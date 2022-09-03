import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import {GlobalTheme} from '../styles/globalTheme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={GlobalTheme}/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
