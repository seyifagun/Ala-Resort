import { useState } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import 'aos/dist/aos.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import { IToastOptions } from '@/models/toastOptions';
import { ToastContext } from '@/extensions/toast';



export default function App({ Component, pageProps }: AppProps) {

	const [toastOptions, setToastOptions] = useState<IToastOptions>({
		type: 'Info',
		title: 'Welcome',
		description: '',
		timeout: 0.01,
		visible: false
	});

	/**
	 * Logs success message
	 * @param title The title of the success
	 * @param description The description of the success
	 * @param timeout The display timeout of the toast
	 */
	function logSuccess(title: string, description: string, timeout: number = 4000) {
		setToastOptions({
			type: 'Success',
			title: title,
			description: description,
			timeout: timeout,
			visible: true
		});
	}

	/**
	 * Logs info message
	 * @param title The title of the info
	 * @param description The description of the info
	 * @param timeout The display timeout of the toast
	 */
	function logInfo(title: string, description: string, timeout: number = 4000) {
		setToastOptions({
			type: 'Info',
			title: title,
			description: description,
			timeout: timeout,
			visible: true
		});
	}

	/**
	 * Logs warning message
	 * @param title The title of the warning
	 * @param description The description of the warning
	 * @param timeout The display timeout of the toast
	 */
	function logWarning(title: string, description: string, timeout: number = 4000) {
		setToastOptions({
			type: 'Warning',
			title: title,
			description: description,
			timeout: timeout,
			visible: true
		});
	}

	/**
	 * Logs error message
	 * @param title The title of the error
	 * @param description The description of the error
	 * @param timeout The display timeout of the toast
	 */
	function logError(title: string, description: string, timeout: number = 4000) {
		setToastOptions({
			type: 'Error',
			title: title,
			description: description,
			timeout: timeout,
			visible: true
		});
	}

	function closeToast() {
		setToastOptions({
			type: '',
			title: '',
			description: '',
			timeout: 0.01,
			visible: false
		});
	}

	return (
		<ToastContext.Provider value={{ toastOptions, logSuccess, logInfo, logWarning, logError, closeToast }}>
			<Layout toastOptions={toastOptions}>
				<Component {...pageProps} />
			</Layout>
		</ToastContext.Provider>
	)
}

