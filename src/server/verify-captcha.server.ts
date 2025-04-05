'use server'

export async function verifyCaptchaServer(token: string | null) {
  'use server'
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    },
  )
  const data = await response.json()

  if (data.success) {
    return {
      success: true,
    }
  } else {
    return {
      success: false,
    }
  }
}
