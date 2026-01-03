'use client';

import { useTranslations } from 'next-intl';

interface ErrorFallbackProps {
  error: Error & { digest?: string };
  reset?: () => void;
}

export default function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  const t = useTranslations('Error');

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        {error.message || t('defaultMessage')}
      </p>
      {reset && (
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {t('retry')}
        </button>
      )}
    </div>
  );
}
