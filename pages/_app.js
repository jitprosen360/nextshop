import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component,session,  pageProps }) {
  return (
    <DataProvider>
      <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </DataProvider>
  )
}

export default MyApp
