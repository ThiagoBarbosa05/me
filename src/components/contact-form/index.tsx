import { MoveRight } from 'lucide-react'

export function ContactForm() {
  return (
    <form action="" className="mt-12">
      <div>
        <label className="mb-2 block text-white" htmlFor="name">
          name:
        </label>
        <input
          className="mb-4 h-12 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 text-white  outline-accent-green-marine"
          type="text"
          id="name"
          placeholder="your name"
        />
      </div>
      <div>
        <label className="mb-2 block text-white" htmlFor="email">
          email:
        </label>
        <input
          className="mb-4 h-12 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 text-white  outline-accent-green-marine"
          type="text"
          id="email"
          placeholder="your email address"
        />
      </div>
      <div>
        <label className="mb-2 block text-white" htmlFor="message">
          message:
        </label>
        <textarea
          className="h-36 w-full rounded-lg border border-line-dark-slate-grey bg-primary-mid-blue px-4 py-3 text-white outline-accent-green-marine"
          id="message"
          placeholder="Please type your message here."
        />
      </div>

      <button
        type="submit"
        className="mt-4 flex h-14 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-accent-yellow-sand px-5  font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]"
      >
        Send me a message <MoveRight />
      </button>
    </form>
  )
}
