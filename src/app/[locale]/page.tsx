import { FileSpreadsheet, Globe, MoveRight } from 'lucide-react'
import Image from 'next/image'

import { ContactForm } from '@/components/contact-form'
import { Skills } from '@/components/skills'
import TranslationsProvider from '@/contexts/translations-provider'

import initTranslations from '../i18n'

const i18nNamespaces = ['page']
export default async function Hello({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { t, resources } = await initTranslations(locale, ['page'])
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-1 flex-col">
        <section id="hello">
          <section className="relative mt-12 px-5">
            <Image
              src="/hero.svg"
              className="w-full"
              width={500}
              height={500}
              alt=""
              priority
            />

            <div className="absolute left-0 top-0 h-full w-[80%] rounded-[50%] bg-[#43D9AD] opacity-15 blur-2xl" />
            <div className="absolute -bottom-24 right-0 h-full w-[80%] rounded-[50%] bg-[#4D5BCE] opacity-15 blur-2xl" />
          </section>

          <section id="" className="mb-12 px-5 pt-20">
            <div className="relative flex flex-col">
              <h2 className="pb-2 text-4xl text-white">{t('greeting')}</h2>
              <p className="pb-6 text-xl font-medium text-accent-green-marine">
                &gt; {t('occupation')}
              </p>
              <p className="font-medium leading-6 text-secondary-light-gray">
                {t('hello-description')}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button className="flex h-14 items-center justify-center gap-2 text-ellipsis rounded-lg bg-[#1C2B3A] px-5 font-medium leading-none text-white transition hover:bg-[#263B50]">
                <FileSpreadsheet className="h-6 w-6" /> {t('button-resume')}
              </button>
              <button className="flex h-14 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-accent-yellow-sand px-5 font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]">
                {t('button-contact')}
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
            <h3 className="font-medium text-accent-green-marine">
              {t('about-title')}
            </h3>
            <p className="mt-2 text-2xl font-medium leading-8 text-white">
              {t('about-description')}
            </p>
            <p className="mt-6 leading-6 text-white">{t('about-more')}</p>
            <button className="mt-8 flex h-14 items-center justify-center gap-2 text-ellipsis rounded-lg bg-accent-yellow-sand px-5 font-medium leading-none text-primary-very-dark-blue transition hover:bg-[#FFAC6B]">
              <FileSpreadsheet className="h-6 w-6" /> {t('button-resume')}
            </button>
          </div>
        </section>

        <section className="px-5 py-12">
          <h3 className="mb-2 text-center font-medium text-accent-green-marine">
            {t('projects-title')}
          </h3>
          <p className="text-center text-2xl font-medium leading-8 text-white">
            {t('projects-description')}
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {/* Card */}
            <div className=" overflow-hidden rounded-2xl border border-line-dark-slate-grey p-4">
              <div className="h-40 overflow-hidden rounded-t-lg">
                <Image
                  className="h-full w-full object-cover object-center"
                  src="/samle.jpg"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>

              <div className="mt-4">
                <div className="mb-4 flex items-start justify-between">
                  <p className="text-xl font-medium leading-6 text-white">
                    Feedback Widget
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                  </div>
                </div>
                <p className="mb-4 leading-6 text-secondary-light-gray">
                  A feedback widget to improve your applications based on users
                  feedback.
                </p>

                <div className="flex gap-3">
                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg border border-white bg-transparent px-3 font-medium leading-none  text-white transition hover:border-white/50 hover:bg-[#263B50]">
                    <Image
                      src="/github.svg"
                      className="h-7 w-7"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </button>

                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg bg-accent-green-marine px-3 font-medium leading-none text-white transition">
                    <Globe className="h-8 w-8 text-primary-dark-blue" />
                  </button>
                </div>
              </div>
            </div>
            {/* Card */}

            {/* Card */}
            <div className=" overflow-hidden rounded-2xl border border-line-dark-slate-grey p-4">
              <div className="h-40 overflow-hidden rounded-t-lg">
                <Image
                  className="h-full w-full object-cover object-center"
                  src="/samle.jpg"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>

              <div className="mt-4">
                <div className="mb-4 flex items-start justify-between">
                  <p className="text-xl font-medium leading-6 text-white">
                    Feedback Widget
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                  </div>
                </div>
                <p className="mb-4 leading-6 text-secondary-light-gray">
                  A feedback widget to improve your applications based on users
                  feedback.
                </p>

                <div className="flex gap-3">
                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg border border-white bg-transparent px-3 font-medium leading-none  text-white transition hover:border-white/50 hover:bg-[#263B50]">
                    <Image
                      src="/github.svg"
                      className="h-7 w-7"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </button>

                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg bg-accent-green-marine px-3 font-medium leading-none text-white transition">
                    <Globe className="h-8 w-8 text-primary-dark-blue" />
                  </button>
                </div>
              </div>
            </div>
            {/* Card */}

            {/* Card */}
            <div className=" overflow-hidden rounded-2xl border border-line-dark-slate-grey p-4">
              <div className="h-40 overflow-hidden rounded-t-lg">
                <Image
                  className="h-full w-full object-cover object-center"
                  src="/samle.jpg"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>

              <div className="mt-4">
                <div className="mb-4 flex items-start justify-between">
                  <p className="text-xl font-medium leading-6 text-white">
                    Feedback Widget
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="inline-block rounded-sm border border-line-dark-slate-grey p-1">
                      <Image
                        src="/react.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                  </div>
                </div>
                <p className="mb-4 leading-6 text-secondary-light-gray">
                  A feedback widget to improve your applications based on users
                  feedback.
                </p>

                <div className="flex gap-3">
                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg border border-white bg-transparent px-3 font-medium leading-none  text-white transition hover:border-white/50 hover:bg-[#263B50]">
                    <Image
                      src="/github.svg"
                      className="h-7 w-7"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </button>

                  <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg bg-accent-green-marine px-3 font-medium leading-none text-white transition">
                    <Globe className="h-8 w-8 text-primary-dark-blue" />
                  </button>
                </div>
              </div>
            </div>
            {/* Card */}
          </div>
        </section>

        <section id="contact" className="bg-line-dark-slate-grey px-5 py-12">
          <h3 className="mb-2 font-medium text-accent-green-marine">
            {t('contact-title')}
          </h3>
          <p className="text-2xl font-medium leading-8 text-white">
            {t('contact-description')}
          </p>

          <div className="mt-4 flex gap-3">
            <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg  bg-secondary-light-gray/50 px-3 font-medium  leading-none text-white transition hover:bg-[#263B50]">
              <Image
                src="/github.svg"
                className="h-7 w-7"
                width={100}
                height={100}
                alt=""
              />
            </button>

            <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg bg-secondary-light-gray/50 px-3 font-medium leading-none text-white transition hover:bg-[#263B50]">
              <Image
                src="/linkedin.svg"
                className="h-7 w-7"
                width={100}
                height={100}
                alt=""
              />
            </button>

            <button className="flex h-12 items-center justify-center gap-2 text-ellipsis rounded-lg bg-secondary-light-gray/50 px-3 font-medium leading-none text-white transition hover:bg-[#263B50]">
              <Image
                src="/whatsapp.svg"
                className="h-7 w-7"
                width={100}
                height={100}
                alt=""
              />
            </button>
          </div>

          <ContactForm />
        </section>
      </div>
    </TranslationsProvider>
  )
}
