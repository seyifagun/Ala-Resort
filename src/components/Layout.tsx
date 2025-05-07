import { FunctionComponent, ReactElement, useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { IToastOptions } from "@/models/toastOptions";
import { ToastContext } from "@/extensions/toast";
import ToastCard from "@/cards/ToastCard";
// import Inter from 'next/font';

interface LayoutProps {
    children?: React.ReactNode;
    toastOptions: IToastOptions;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

	// Fetch the toast context
	const toastContext = useContext(ToastContext);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                />
            </Head>
			<ToastCard
				visibility={toastContext?.toastOptions?.visible ?? false}
				title={toastContext?.toastOptions?.title ?? 'Welcome'}
				description={toastContext?.toastOptions?.description ?? ''}
				messageType={toastContext?.toastOptions?.type ?? 'Info'}
				timeout={toastContext?.toastOptions?.timeout ?? 0.01} />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;