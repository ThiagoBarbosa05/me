'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { ToggleMenuMobile } from '@/contexts/toggle-menu-mobile'

const navLinks = [
  {
    name: '_hello',
    href: '/#hello',
  },
  {
    name: '_about-me',
    href: '/#about',
  },
  {
    name: '_projects',
    href: '/projects',
  },
  {
    name: '_contact-me',
    href: '/contact',
  },
]

export function MenuMobile() {
  const { isOpen } = useContext(ToggleMenuMobile)
  const pathname = usePathname()

  console.log(pathname)

  return (
    <div
      data-state={isOpen}
      className={twMerge(
        'z-40 mt-2 flex flex-col justify-center  overflow-hidden bg-primary-mid-blue transition-all duration-200 data-[state=false]:m-0 data-[state=false]:h-0 data-[state=true]:h-28',
      )}
    >
      <nav className="text-white">
        <ul className="grid grid-cols-2 items-center ">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.name}
                className={twMerge(
                  'relative border border-line-dark-slate-grey text-center',
                  pathname.startsWith(navLink.href) &&
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-accent-yellow-sand',
                )}
              >
                <Link className="block w-full pb-2 pt-3 " href={navLink.href}>
                  {navLink.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
