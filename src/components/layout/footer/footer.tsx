'use client'
import './footer.scss'
import { useLocale } from 'use-intl'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '@/server/verifyCaptcha'
import { messageMe } from '@/server/telegram/message-me.server'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Loader } from '@/components/ui/loader/loader'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import MaskedInput from 'react-text-mask'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const Footer = () => {
  const { toast } = useToast()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const t = useTranslations('footer')
  const locale = useLocale()
  const pathname = usePathname()

  const year = new Date().getFullYear()

  const [isVerified, setIsVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean | undefined>(false)

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [pathname])

  useGSAP(() => {
    gsap.fromTo(
      '.footer-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 65%',
          end: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  useGSAP(() => {
    gsap.fromTo(
      '.planet-section',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.planet-section',
          start: 'top 80%',
          end: 'top 10%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      },
    )
  })

  const formSchema = z.object({
    name: z
      .string()
      .min(2, `${t('Minimum number of characters')} 2`)
      .max(50, `${t('Maximum number of characters')} 50 `),
    email: z.string().email('Невірний формат email'),
    phone: z
      .string()
      .regex(
        /^\+380 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        `${t('This field is required')}`,
      ),
    message: z.string().default(''),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '+380 ',
      message: '',
    },
  })

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false))
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)
    const sendData = {
      type: 'footer message',
      locale: locale,
      name: data.name,
      email: data.email,
      number: data.phone,
      message: data.message,
    }
    if (isVerified) {
      const result = await messageMe(sendData)
      if (result?.success) {
        toast({ title: t('The message has been sent') })
        recaptchaRef.current?.reset()
        form.reset()
        setIsVerified(false)
      } else {
        toast({
          variant: 'destructive',
          title: t("Something happened, it's sad!"),
        })
      }
    }
    setLoading(false)
  }

  return (
    <footer className="relative pt-[150px] lg:pt-[250px]">
      {loading && <Loader />}
      <div className="relative mx-auto max-w-[1442px] px-[24px]">
        <div className="flex flex-col items-end justify-end">
          <div className="animate-scale-in-out bg-group-pattern-light absolute -top-[55px] left-0 -z-20 size-[200px] -translate-x-1/2 dark:opacity-[0.1] dark:bg-group-pattern lg:size-[200px]" />
          <div className="text-[24px] uppercase lg:text-[64px] lg:font-light">
            {t('any-questions')}
          </div>
          <div className="text-[32px] font-bold uppercase text-[#0B66F5] lg:mt-[32px]">
            {t('Just fill out the form below')}
          </div>
          <div className="mt-24 flex flex-col items-center">
            <div className="!-mb-2 h-16 w-[2px] bg-blue-500"></div>
            <FiArrowDown size={30} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="mt-[155px] h-[1px] w-full bg-stone-500/30 lg:mt-[310px]" />
      <div className="planet-section relative mx-auto h-10 min-h-max w-full max-w-[1442px] px-[24px]">
        <div className="absolute -top-[45px] right-[0] max-w-[1445px] rotate-[25deg] justify-end lg:-top-[80px]">
          <div className="circle-footer absolute right-[100px] ml-[110px] mt-[70px] size-[55px] rounded-full bg-[rgba(255,255,255,0.3)] p-[55px] opacity-40 blur-2xl lg:size-[125px] lg:p-[135px]" />
          <div className="absolute right-[115px] ml-[120px] mt-[80px] size-[85px] rounded-full bg-black lg:size-[250px]" />
          <div className="planet-footer absolute right-[100px] z-10 ml-[80px] mt-[25px] size-[80px] rounded-full bg-white opacity-40 blur-2xl lg:h-40 lg:w-40"></div>
        </div>
      </div>
      <div
        aria-label="contact"
        id="contact"
        className="footer-section relative mx-auto mt-[155px] max-w-[1442px] px-[24px]"
      >
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:mr-[100px]">
            <div className="text-[34px] uppercase lg:text-[64px]">
              {t('Oleg-Tkach')}
            </div>
            <div className="mt-[121px]">
              <div className="text-[40px] font-bold uppercase text-[#0B66F5]">
                {t('contact-and')}
              </div>
              <div className="mt-[13px] max-w-[600px] text-[32px]">
                {t('watch your ideas turn into beautifully coded realities')}
              </div>
            </div>
            <div className="mr-[100px] flex flex-col items-end">
              <div className="mr-3 mt-[60px] h-[1px] w-[289px] bg-[#FAFAFA]/50" />
              <div className="mt-[45px] flex flex-col items-center text-[20px]">
                <span>{t('let-connect')}</span>
                <div className="flex items-center text-blue-500">
                  <div className="-mr-2 h-[2px] w-16 bg-current"></div>
                  <FiArrowRight size={30} className="text-current" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full lg:w-max"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t('name')}
                          variant="secondary"
                          className="md:max-w-[320px]"
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-3" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t('email')}
                          variant="secondary"
                          className="md:max-w-[320px]"
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-3" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MaskedInput
                          {...field}
                          mask={[
                            '+',
                            '3',
                            '8',
                            '0',
                            ' ',
                            '(',
                            /\d/,
                            /\d/,
                            /\d/,
                            ')',
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                          ]}
                          placeholder="+380 (XXX) XXX-XX-XX"
                          showMask
                          className="!mb-5 mt-[12px] h-[48px] w-full rounded-[8px] border-[1px] border-black bg-transparent px-[8px] py-[14px] text-[20px] text-white placeholder-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white dark:text-white dark:placeholder-[#FAFAFA] md:max-w-[320px] lg:text-[16px]"
                        />
                      </FormControl>
                      <FormMessage className="absolute bottom-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder={t('message')}
                          className="h-28 w-full resize-none rounded-md border border-white bg-transparent p-3 text-white md:max-w-[320px]"
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-3" />
                    </FormItem>
                  )}
                />
                <div className="mt-[24px] md:px-10 lg:w-[400px] lg:flex-row lg:items-start lg:px-0">
                  <ReCAPTCHA
                    className="recaptcha !ml-[-15px]"
                    sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                    ref={recaptchaRef}
                    onChange={handleCaptchaSubmission}
                    hl={locale}
                  />
                  <div className="!mt-7 flex w-full items-end justify-end lg:mt-0">
                    <Button disabled={!isVerified} variant="circle">
                      {t('send')}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="mb-[40px] mt-[92px] flex flex-col-reverse items-center justify-between gap-[20px] lg:flex-row">
          <div>
            (c) {year} {t('Oleg-Tkach')}
          </div>
          <div className="flex flex-row justify-between gap-[16px]">
            <a
              href="https://github.com/KratosHome"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="GitHub"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-200"
            >
              <FaGithub size={35} />
            </a>
            <a
              className="block transition-all duration-300 hover:scale-110 hover:text-blue-200"
              href="https://www.linkedin.com/in/olegtkach101/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://t.me/KratosHome"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Telegram"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-200"
            >
              <FaTelegram size={35} />
            </a>
            <a
              href="https://www.instagram.com/codecraftmaster9"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Instagram"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-200"
            >
              <FaInstagram size={35} />
            </a>
          </div>
          <div />
        </div>
      </div>
    </footer>
  )
}

export default Footer
