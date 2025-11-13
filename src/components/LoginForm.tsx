import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Card } from './ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
    userName: z.string(),
    userEmail: z.email(),
});

type Form = z.infer<typeof formSchema>;

function LoginForm() {
    const form = useForm<Form>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: Form) => {
        console.log(data);
    };

    const { register, handleSubmit } = form;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="w-[400px] p-6">
                    <FieldSet>
                        <FieldLegend>Login</FieldLegend>

                        <FieldDescription>Please fill in the form below.</FieldDescription>

                        <FieldGroup>
                            <Field>
                                <FieldLabel>First Name</FieldLabel>
                                <Input {...register('userName')} type="text" placeholder="Enter your first name" required />
                            </Field>

                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input {...register('userEmail')} type="email" placeholder="Enter your email" required />
                            </Field>
                        </FieldGroup>

                        <FieldDescription>
                            By clicking the "Login" button, you agree to our <a href="#">terms and conditions</a>.
                        </FieldDescription>
                    </FieldSet>

                    <FieldSeparator />

                    <Field orientation="horizontal">
                        <Button type="submit">Login</Button>
                        <Button type="reset" variant="outline">
                            Reset
                        </Button>
                    </Field>
                </Card>
            </form>
        </>
    );
}

export default LoginForm;
