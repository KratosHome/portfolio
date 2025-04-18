import Script from 'next/script'

export const GoogleTagManager = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VH1Y00D2RY"
      />
      <Script id="google-analytics">
        {`
                       window.dataLayer = window.dataLayer || [];
                       function gtag(){dataLayer.push(arguments);}
                       gtag('js', new Date());
                       gtag('config', 'G-VH1Y00D2RY');
                    `}
      </Script>
    </>
  )
}
