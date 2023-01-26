import '../styles/globals.css'
import Script from 'next/script';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return(
    <>

      <Head>
        <title>Dnews | The all blockchain and trending news</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content='Dnews | The all blockchain and trending news'/> 
        <meta name="description" content='  all upcoming and live news are here regarding blockchain , crypto currency, bitcoin , ethereum, trending, and all types'/> 
        <meta name="keywords" content='crypto , crypto currency , blockchain , bitcoin , ethereum , trending , polygon , nft , news , Dnews , dnews '/> 

      </Head>



              <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WYP4PFZVFJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WYP4PFZVFJ');
        `}
      </Script>


    <Component {...pageProps} />
    </>
    
    ) 
}

export default MyApp
