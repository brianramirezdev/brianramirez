import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';

const formSchema = z
    .object({
        userName: z.string().min(3, { message: 'Debe tener al menos 3 caracteres' }).trim().toLowerCase(),

        userEmail: z.email({ message: 'Debe ser un email válido' }).trim().toLowerCase(),

        userPassword: z.string().regex(/^(?=.*[A-Z])(?=.*\d).{8,}$/, {
            message: 'Debe tener al menos 8 caracteres, una mayúscula y un número',
        }),

        terms: z.boolean().refine((val) => val === true, {
            message: 'Debes aceptar los términos',
        }),

        userConfirmPassword: z.string(),
    })
    .refine((data) => data.userPassword === data.userConfirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['userConfirmPassword'],
    });

type Form = z.infer<typeof formSchema>;

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm<Form>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            userEmail: '',
            userPassword: '',
            userConfirmPassword: '',
            terms: false,
        },
        mode: 'onTouched',
    });

    const onSubmit = async (data: Form) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('✅ Datos:', data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[400px] p-6 space-y-4">
                <FieldSet>
                    <FieldLegend>Register</FieldLegend>
                    <FieldDescription>Please fill in the form below.</FieldDescription>

                    <FieldGroup>
                        <Field>
                            <FieldLabel>First Name</FieldLabel>
                            <Input {...register('userName')} type="text" placeholder="Enter your first name" />
                            <p className="text-xs text-red-500 italic">{errors.userName?.message}</p>
                        </Field>

                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input {...register('userEmail')} type="email" placeholder="Enter your email" />
                            <p className="text-xs text-red-500 italic">{errors.userEmail?.message}</p>
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Password</FieldLabel>
                            <Input {...register('userPassword')} type="password" placeholder="Enter your password" />
                            <FieldDescription>Mínimo 8, 1 mayúscula y 1 número.</FieldDescription>
                            <p className="text-xs text-red-500 italic">{errors.userPassword?.message}</p>
                        </Field>

                        <Field>
                            <FieldLabel>Confirm Password</FieldLabel>
                            <Input {...register('userConfirmPassword')} type="password" placeholder="Confirm your password" />
                            <p className="text-xs text-red-500 italic">{errors.userConfirmPassword?.message}</p>
                        </Field>
                    </FieldGroup>

                    <FieldSeparator />

                    <Field orientation="horizontal" className="items-start gap-3">
                        <Controller
                            control={control}
                            name="terms"
                            render={({ field }) => (
                                <>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    <div>
                                        <FieldDescription>
                                            By clicking “Register”, you agree to our <a href="#">terms and conditions</a>.
                                        </FieldDescription>
                                        <p className="text-xs text-red-500 italic">{errors.terms?.message}</p>
                                    </div>
                                </>
                            )}
                        />
                    </Field>
                </FieldSet>

                <FieldSeparator />

                <Field orientation="horizontal" className="gap-3">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : 'Submit'}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => reset()}>
                        Reset
                    </Button>
                </Field>
            </Card>
        </form>
    );
}

export default RegisterForm;
