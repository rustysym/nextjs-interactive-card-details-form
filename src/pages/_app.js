import '@/styles/globals.css'
import '@/styles/reset.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <Component {...pageProps} />
  </>
  )
}
