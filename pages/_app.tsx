import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
console.log('Hello from app');

  return <Component {...pageProps} />
}

export default MyApp
