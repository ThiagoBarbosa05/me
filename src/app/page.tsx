import { FileSpreadsheet, MoveRight } from 'lucide-react'
import Image from 'next/image'

import { Skills } from '@/components/skills'

export default function Hello() {
  return (
    <div className="flex flex-1 flex-col">
      <section id="hello">
        <section className="relative mt-12 px-5">
          <Image
            src="/hero.svg"
            className="w-full"
            width={500}
            height={500}
            alt=""
          />

          <div className="absolute left-0 top-0 h-full w-[80%] rounded-[50%] bg-[#43D9AD] opacity-15 blur-2xl" />
          <div className="absolute -bottom-24 right-0 h-full w-[80%] rounded-[50%] bg-[#4D5BCE] opacity-15 blur-2xl" />
        </section>

        <section id="" className="mb-12 px-5 pt-20">
          <div className="relative flex flex-col">
            <h2 className="pb-2 text-4xl text-white">Hi, i&apos;m Thiago</h2>
            <p className="pb-6 text-xl font-medium text-accent-green-marine">
              &gt; Full-stack developer
            </p>
            <p className="font-medium leading-6 text-secondary-light-gray">
              Over 4 years of experience in the tech industry. I specialize in
              building innovative web and mobile applications using technologies
              such as React, React Native, and Node.js.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className="flex h-14 w-full items-center justify-center gap-2 text-ellipsis rounded-lg bg-[#1C2B3A] px-5  font-medium leading-none text-white transition hover:bg-[#263B50]">
              <FileSpreadsheet className="h-6 w-6" /> My resume
            </button>
            <button className="flex h-14 w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-accent-yellow-sand px-5  font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]">
              Get in touch
              <MoveRight className="h-6 w-6 min-w-6" />
            </button>
          </div>
        </section>
      </section>

      <section id="about" className="bg-line-dark-slate-grey py-12">
        <div className="relative mx-auto mb-10 h-44 w-44 overflow-hidden rounded-full border-4 border-accent-green-marine">
          <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt=""
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div>
          <Skills />
        </div>

        <div className="px-5">
          <h3 className="font-medium text-accent-green-marine">About me</h3>
          <p className="mt-2 text-2xl font-medium leading-8 text-white">
            I’m a passionate software developer looking for my first
            international opportunity
          </p>
          <p className="mt-6 leading-6 text-white">
            Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a
            self-taught artist who enjoys spending my free time doodling. I am
            currently seeking opportunities to bring my skills and enthusiasm to
            a tech company in the United States or Europe and am excited about
            the prospect of relocating to pursue new challenges.
          </p>
          <button className="mt-8 flex h-14 w-full max-w-40 items-center justify-center gap-2 text-ellipsis rounded-lg bg-accent-yellow-sand px-5  font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]">
            <FileSpreadsheet className="h-6 w-6" /> My resume
          </button>
        </div>
      </section>
    </div>
  )
}
