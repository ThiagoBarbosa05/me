'use client'

import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export default function LanguageChanger() {
  const router = useRouter()

  function handleChangeLanguage(lng: string) {
    router.push(`/${lng}`)
  }

  return (
    <Popover>
      <PopoverTrigger className="rounded-md border border-line-dark-slate-grey p-2">
        <Languages className="h-4 w-4 text-white" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 text-white">
        <button
          className="px-4 pt-2"
          onClick={() => handleChangeLanguage('en')}
        >
          en
        </button>
        <button
          className="px-4 pb-2"
          onClick={() => handleChangeLanguage('pt')}
        >
          pt
        </button>
      </PopoverContent>
    </Popover>
  )
}
