import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useLanguage } from '@/contexts/LanguageContext';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldLegend, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Mail, User, MessageSquare, Send, Loader2, CheckCircle2, SendHorizonal } from 'lucide-react';

const makeContactFormSchema = (t: any) =>
    z.object({
        name: z
            .string()
            .min(2, t.contactForm.errors.name.min)
            .refine((v) => v.trim().length > 0, t.contactForm.errors.name.required),
        email: z
            .string()
            .email(t.contactForm.errors.email.invalid)
            .refine((v) => v.trim().length > 0, t.contactForm.errors.email.required),
        message: z
            .string()
            .min(10, t.contactForm.errors.message.min)
            .refine((v) => v.trim().length > 0, t.contactForm.errors.message.required),
    });

type ContactFormData = z.infer<ReturnType<typeof makeContactFormSchema>>;

export default function ContactForm() {
    const { t } = useLanguage();
    const schema = makeContactFormSchema(t);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Revalidación al cambiar idioma
    useEffect(() => {
        const keys = Object.keys(errors);
        if (keys.length > 0) trigger(keys as any);
    }, [t]);

    return (
        <Card className="gsap-card border-none w-full bg-transparent mt-12 lg:mt-8 shadow-none space-y-10 sm:space-y-12 sm:max-w-md md:max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldSet className="sm:space-y-8">
                    <FieldGroup className="space-y-6">
                        {/* NAME */}
                        <Field>
                            <FieldLabel className="flex items-center gap-2 text-sm sm:text-base">
                                <User className="h-4 w-4 text-killua" />
                                {t.contactForm.name}
                            </FieldLabel>
                            <Input placeholder={t.contactForm.placeholders.name} disabled={isSubmitting} {...register('name')} className="text-sm sm:text-base h-12" />
                            {errors.name && <FieldDescription className="text-red-500 italic mt-1 text-xs sm:text-sm">{errors.name.message}</FieldDescription>}
                        </Field>

                        {/* EMAIL */}
                        <Field>
                            <FieldLabel className="flex items-center gap-2 text-sm sm:text-base">
                                <Mail className="h-4 w-4 text-killua" />
                                {t.contactForm.email}
                            </FieldLabel>
                            <Input
                                type="email"
                                placeholder={t.contactForm.placeholders.email}
                                disabled={isSubmitting}
                                {...register('email')}
                                className="text-sm sm:text-base h-12"
                            />
                            {errors.email && <FieldDescription className="text-red-500 italic mt-1 text-xs sm:text-sm">{errors.email.message}</FieldDescription>}
                        </Field>

                        {/* MESSAGE */}
                        <Field>
                            <FieldLabel className="flex items-center gap-2 text-sm sm:text-base">
                                <MessageSquare className="h-4 w-4 text-killua" />
                                {t.contactForm.message}
                            </FieldLabel>
                            <Textarea
                                placeholder={t.contactForm.placeholders.message}
                                rows={5}
                                disabled={isSubmitting}
                                {...register('message')}
                                className="text-sm sm:text-base min-h-[130px]"
                            />
                            {errors.message && <FieldDescription className="text-red-500 italic mt-1 text-xs sm:text-sm">{errors.message.message}</FieldDescription>}
                        </Field>
                    </FieldGroup>

                    <FieldSeparator />

                    {/* BUTTON */}
                    <Field>
                        <Button type="submit" className="sm:py-6 text-sm sm:text-base" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t.contactForm.sending}
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    {t.contactForm.submit}
                                </>
                            )}
                        </Button>
                    </Field>
                </FieldSet>

                {/* SUCCESS */}
                {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-3 sm:p-4 mt-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-sm sm:text-base">
                        <CheckCircle2 className="h-5 w-5" />
                        <p className="font-medium">{t.contactForm.status.success}</p>
                    </div>
                )}

                {/* ERROR */}
                {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-3 sm:p-4 mt-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm sm:text-base">
                        <p className="font-medium">{t.contactForm.status.error}</p>
                    </div>
                )}
            </form>
        </Card>
    );
}
