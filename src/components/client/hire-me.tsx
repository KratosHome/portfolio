'use client'
import { FC, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '@/server/verifyCaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import { messageMe } from '@/server/telegram/message-me.server'
import { useLocale } from 'use-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/modal'
import { useToast } from '@/hooks/use-toast'

interface HireMeProps {
  title: string
  modalTitle: string
}

interface FormData {
  name: string
  email: string
  phone: string
  message?: string
}

export const HireMe: FC<HireMeProps> = ({ title, modalTitle }) => {
  const locale = useLocale()
  const { toast } = useToast()
  const t = useTranslations('home-page.HireMe')

  const { register, handleSubmit, reset } = useForm<FormData>()

  const [open, setClose] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean | undefined>(false)
  const [isVerified, setIsVerified] = useState<boolean>(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false))
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
        toast({
          title: `${t('The message has been sent')}`,
        })
        reset()
        setClose(false)
      } else {
        toast({
          variant: 'destructive',
          title: `${t("Something happened, it's sad!")}`,
        })
      }
    }
    setLoading(false)
  }

  return (
    <>
      {loading && <>Loader</>}
      <div
        onClick={() => setClose(true)}
        className="!z-50 cursor-pointer"
        style={{
          zIndex: 50,
        }}
      >
        <Button variant="circle" size="circle">
          {title}
        </Button>
      </div>
      <Modal
        isOpen={open}
        onClose={() => setClose(false)}
        className="flex flex-col justify-end rounded-lg border-b border-black bg-[127deg] bg-gradient-to-r from-[rgba(11,102,245,0.30)] via-[rgba(78,128,206,0.15)] to-transparent px-3 backdrop-blur-[12.5px] lg:px-8"
      >
        <div className="w-[300px] lg:w-[400px]">
          <h2 className="text-center text-[40px] font-bold uppercase text-[#0B66F5]">
            {modalTitle}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input type={'text'} placeholder={t('name')} name={'name'} />
              <Input type={'text'} placeholder={t('email')} name={'email'} />
              <Input type={'phone'} placeholder={t('phone')} name={'phone'} />
              <textarea
                className={`mt-[12px] h-[125px] w-full resize-none rounded-[8px] border-[1px] border-white bg-transparent px-[8px] py-[14px] text-[16px] text-[white] placeholder-[#FAFAFA]`}
                placeholder={t('message')}
                {...register('message', {
                  required: false,
                })}
              />
            </div>
            <div className="flex flex-col items-center">
              <ReCAPTCHA
                className="recaptcha"
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
                hl={locale}
              />
              <Button variant="circle" className="mt-3">
                {t('send')}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
