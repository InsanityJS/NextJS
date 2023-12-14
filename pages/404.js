import * as React from 'react';
import {useEffect} from "react";
import {useRouter} from "next/router";
import Heading from "@/components/Heading";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [router]);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <Heading text="Error"/>
                <Heading text="Page is not found" tag="h2"></Heading>
            </div>
        </>
    );
};

export default Error;