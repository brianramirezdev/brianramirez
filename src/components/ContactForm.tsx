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

import { Mail, User, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';

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
        <div className="gsap-card w-lg lg:max-w-xl m-auto">
            <Card className=" p-6 border-2 space-y-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldLegend className="text-center text-2xl font-bold flex flex-col items-center">
                            <div className="w-12 h-12 bg-killua/10 rounded-full flex items-center justify-center mb-3">
                                <Mail className="h-6 w-6 text-killua" />
                            </div>
                            {t.contactForm.title}
                        </FieldLegend>

                        <FieldGroup>
                            {/* NAME */}
                            <Field>
                                <FieldLabel className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-killua" />
                                    {t.contactForm.name}
                                </FieldLabel>
                                <Input placeholder={t.contactForm.placeholders.name} disabled={isSubmitting} {...register('name')} />
                                <div className="h-1">{errors.name && <FieldDescription className="text-red-500 italic">{errors.name.message}</FieldDescription>}</div>
                            </Field>

                            {/* EMAIL */}
                            <Field>
                                <FieldLabel className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-killua" />
                                    {t.contactForm.email}
                                </FieldLabel>
                                <Input type="email" placeholder={t.contactForm.placeholders.email} disabled={isSubmitting} {...register('email')} />
                                <div className="h-1">{errors.email && <FieldDescription className="text-red-500 italic">{errors.email.message}</FieldDescription>}</div>
                            </Field>

                            {/* MESSAGE */}
                            <Field>
                                <FieldLabel className="flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-killua" />
                                    {t.contactForm.message}
                                </FieldLabel>
                                <Textarea placeholder={t.contactForm.placeholders.message} rows={6} disabled={isSubmitting} {...register('message')} />

                                <div className="h-1">{errors.message && <FieldDescription className="text-red-500 italic">{errors.message.message}</FieldDescription>}</div>
                            </Field>
                        </FieldGroup>

                        <FieldSeparator />

                        {/* BUTTON */}
                        <Field>
                            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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

                    {/* SUCCESS / ERROR */}
                    {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 p-4 mt-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                            <CheckCircle2 className="h-5 w-5" />
                            <p className="text-sm font-medium">{t.contactForm.status.success}</p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 p-4 mt-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                            <p className="text-sm font-medium">{t.contactForm.status.error}</p>
                        </div>
                    )}
                </form>
            </Card>
        </div>
    );
}
