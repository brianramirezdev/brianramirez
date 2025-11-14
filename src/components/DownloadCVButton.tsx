'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function DownloadCVButton() {
    const { t } = useLanguage();
    return (
        <Button
            asChild
            variant="outline"
            size="default"
            className="flex items-center gap-2 border-killua text-killua rounded-md transition-all ease-in-out duration-180 active:scale-95 scale-100"
        >
            <a href="/brian_ramirez_cv.pdf" download="brian_ramirez_cv.pdf" className="flex items-center gap-2">
                <Download size={20} />
                {t.downloadCV.label}
            </a>
        </Button>
    );
}
