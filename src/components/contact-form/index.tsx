'use client'
import { MoveRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function ContactForm() {
  const { t } = useTranslation()
  return (
    <form action="" className="mt-12">
      <div>
        <label className="mb-2 block text-white" htmlFor="name">
          {t('input-name')}
        </label>
        <input
          className="mb-4 h-12 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 text-white  outline-accent-green-marine"
          type="text"
          id="name"
          placeholder={t('input-name-placeholder')}
        />
      </div>
      <div>
        <label className="mb-2 block text-white" htmlFor="email">
          {t('input-email')}
        </label>
        <input
          className="mb-4 h-12 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 text-white  outline-accent-green-marine"
          type="text"
          id="email"
          placeholder={t('input-email-placeholder')}
        />
      </div>
      <div>
        <label className="mb-2 block text-white" htmlFor="message">
          {t('input-message')}
        </label>
        <textarea
          className="h-36 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 py-3 text-white outline-accent-green-marine"
          id="message"
          placeholder={t('input-message-placeholder')}
        />
      </div>

      <button
        type="submit"
        className="mt-4 flex h-14 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-accent-yellow-sand px-5  font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]"
      >
        {t('button-message')} <MoveRight />
      </button>
    </form>
  )
}
