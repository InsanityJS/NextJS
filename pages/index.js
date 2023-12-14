import * as React from 'react';
import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";
import Socials from "@/components/Socials";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {socials: data},
    }
}

const Home = ({socials}) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.wrapper}>
                <Heading text="Next.js application"/>
            </div>
            <div>
                <Socials socials={socials}/>
            </div>
        </>

    );
};

export default Home;