import Layout from "../components/Layout";
// import Image from "next/image";
// import imageBack from "../public/image-back.jpg"
import '../styles/globals.scss'
import Head from "next/head";

const MyApp = ({Component, pageProps}) => (
    <Layout>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Open+Sans:wght@300&family=Work+Sans:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        {/*<Image src={imageBack}*/}
        {/*       width={500}*/}
        {/*       height={350}*/}
        {/*       alt="Preview"*/}
        {/*       placeholder="blur"*/}
        {/*/>*/}
    </Layout>
);

export default MyApp;
