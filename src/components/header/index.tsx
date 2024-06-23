import LanguageChanger from '../language-changer'
import { ToggleMenu } from './toggle-menu'

export function Header() {
  return (
    <header className="fixed inset-x-0 z-50 flex h-14 items-center border-b border-line-dark-slate-grey bg-primary-mid-blue px-5">
      <div className="flex w-full items-center justify-between">
        <span className="font-medium text-accent-green-marine">
          thiago-barbosa
        </span>

        <div className="flex items-center gap-3">
          <LanguageChanger />
          <ToggleMenu />
        </div>
      </div>
      {/* <MenuMobile /> */}
    </header>
  )
}
