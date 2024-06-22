import { MenuMobile } from '../navigation/menu-mobile'
import { ToggleMenu } from './toggle-menu'

export function Header() {
  return (
    <header className="relative z-20 border-b border-line-dark-slate-grey bg-primary-mid-blue px-5 py-[1.125rem]">
      <div className="flex items-center justify-between">
        <span className="font-medium text-accent-green-marine">
          thiago-barbosa
        </span>
        <ToggleMenu />
      </div>
      <MenuMobile />
    </header>
  )
}
