import Header from "../components/shared/Header"

function MyApp({ Component, pageProps }) {
  return (
    <main>
    <Header/>
        <Component {...pageProps} />
    </main>
  )
}

export default MyApp
