import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'py-[10px] px-[14px] rounded-lg leading-none text-sm font-medium transition',
  variants: {
    variant: {
      primary:
        'text-primary-very-dark-blue bg-accent-yellow-sand hover:bg-[#FFAC6B]',
      default: 'text-white bg-[#1C2B3A] hover:bg-[#263B50]',
      ghost:
        'bg-transparent border border-white text-white hover:border-white/50',
    },
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  children: React.ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  )
}
