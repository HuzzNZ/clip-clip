import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={"flex justify-center w-screen overflow-x-hidden pt-8"}>
            <div className={"flex flex-col items-center w-full md:max-w-screen-md px-3"}>
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
