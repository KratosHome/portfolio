'use client'
import { FC, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '@/server/verifyCaptcha'
import { messageMe } from '@/server/telegram/message-me.server'
import { useLocale } from 'use-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/modal'
import { useToast } from '@/hooks/use-toast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

interface HireMeProps {
  title: string
  modalTitle: string
}

const formSchema = z.object({
  name: z.string().min(2, 'Мінімум 2 символи').max(50, 'Максимум 50 символів'),
  email: z.string().email('Невірний формат email'),
  phone: z
    .string()
    .min(10, 'Мінімум 10 символів')
    .max(15, 'Максимум 15 символів')
    .regex(/^[0-9+]+$/, 'Можна вводити тільки цифри'),
  message: z.string().optional(),
})

export const HireMe: FC<HireMeProps> = ({ title, modalTitle }) => {
  const locale = useLocale()
  const { toast } = useToast()
  const t = useTranslations('home-page.HireMe')

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const resetForm = () => {
    form.reset()
    setIsVerified(false)
    recaptchaRef.current?.reset()
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

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
        form.reset()
        setOpen(false)
      } else {
        toast({
          variant: 'destructive',
          title: t("Something happened, it's sad!"),
        })
      }
    }
    resetForm()
    setLoading(false)
  }

  return (
    <>
      {loading && <>Loader</>}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <Button variant="circle" size="circle">
          {title}
        </Button>
      </div>
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false)
          resetForm()
        }}
        className="flex flex-col justify-end rounded-lg border-b border-black bg-[127deg] bg-gradient-to-r from-[rgba(11,102,245,0.30)] via-[rgba(78,128,206,0.15)] to-transparent px-3 backdrop-blur-[12.5px] lg:px-8"
      >
        <div className="w-[300px] lg:w-[400px]">
          <h2 className="text-center text-[40px] font-bold uppercase text-[#0B66F5]">
            {modalTitle}
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('name')}</FormLabel>
                      <FormControl>
                        <Input {...field} variant="secondary" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input {...field} variant="secondary" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phone')}</FormLabel>
                      <FormControl>
                        <Input {...field} variant="secondary" type="phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('message')}</FormLabel>
                      <FormControl>
                        <textarea
                          className="mt-[12px] h-[125px] w-full resize-none rounded-[8px] border-[1px] border-white bg-transparent px-[8px] py-[14px] text-[16px] text-[white] placeholder-[#FAFAFA]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-3 flex flex-col items-center">
                <ReCAPTCHA
                  className="recaptcha"
                  sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                  hl={locale}
                />
                <Button
                  type="submit"
                  variant="circle"
                  size={'circle'}
                  disabled={!isVerified}
                  className="mt-3"
                >
                  {t('send')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  )
}
