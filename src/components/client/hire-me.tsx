'use client'
import { FC, useRef, useState, Fragment } from 'react'
import { useTranslations } from 'next-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '@/server/verifyCaptcha'
import { messageMe } from '@/server/telegram/message-me.server'
import { useLocale } from 'use-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { Dialog, Transition } from '@headlessui/react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Loader } from '@/components/ui/loader/loader'

interface HireMeProps {
  title: string
  modalTitle: string
}

export const HireMe: FC<HireMeProps> = ({ title, modalTitle }) => {
  const locale = useLocale()
  const { toast } = useToast()
  const t = useTranslations('home-page.HireMe')

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(false)

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
    message: z.string().optional(),
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

  const resetForm = () => {
    form.reset()
    setIsVerified(false)
    recaptchaRef.current?.reset()
  }

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false))
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true)

    const sendData = {
      type: 'hire',
      locale: locale,
      name: data.name,
      email: data.email,
      number: data.phone,
      message: data.message || '',
    }

    if (isVerified) {
      const result = await messageMe(sendData)
      if (result?.success) {
        toast({ title: t('The message has been sent') })
        resetForm()
        setOpen(false)
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
    <>
      {loading && <Loader />}
      <Button variant="circle" size="circle" onClick={() => setOpen(true)}>
        {title}
      </Button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setOpen(false)
            resetForm()
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-100 ease-out"
            enterFrom="opacity-0 scale-75 translate-y-10"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition-transform duration-100 ease-in"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-75 translate-y-10"
          >
            <div className="bg-black/2 fixed inset-0 bg-opacity-60 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="transition-all duration-300 ease-out"
              enterFrom="opacity-0 scale-50 rotate-12"
              enterTo="opacity-100 scale-100 rotate-0"
              leave="transition-all duration-100 ease-in"
              leaveFrom="opacity-100 scale-100 rotate-0"
              leaveTo="opacity-0 scale-50 rotate-12"
            >
              <Dialog.Panel className="max-h-[90svh] w-full max-w-lg transform overflow-auto rounded-lg border border-black bg-[#709CF2] px-3 py-8 shadow-2xl backdrop-blur-[12.5px] dark:bg-transparent dark:bg-gradient-to-r dark:from-[rgba(11,102,245,0.30)] dark:via-[rgba(78,128,206,0.15)] dark:to-transparent lg:px-8">
                <Dialog.Title className="text-center text-[40px] font-bold uppercase text-[#0B66F5]">
                  {modalTitle}
                </Dialog.Title>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
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
                              className="!mb-5 mt-[12px] h-[48px] w-full rounded-[8px] border-[1px] border-black bg-transparent px-[8px] py-[14px] text-[20px] text-white placeholder-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white dark:text-white dark:placeholder-[#FAFAFA] lg:text-[16px]"
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
                              className="h-28 w-full resize-none rounded-md border border-white bg-transparent p-3 text-white"
                            />
                          </FormControl>
                          <FormMessage className="absolute -bottom-3" />
                        </FormItem>
                      )}
                    />
                    <div className="flex w-full flex-col items-center justify-center gap-4">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        onChange={handleCaptchaSubmission}
                        hl={locale}
                      />
                      <Button
                        type="submit"
                        variant="circle"
                        disabled={!isVerified}
                      >
                        {t('send')}
                      </Button>
                    </div>
                  </form>
                </Form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
