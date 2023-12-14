import * as React from 'react';
import Heading from "../../components/Heading";
import Link from "next/link";
import Head from "next/head";
import {GetStaticProps} from "next";
import {IContact} from "../../types/types";

type IProps = {
    contacts: IContact[],
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contacts: data},
    }
}

const Contacts: React.FC<IProps> = ({contacts}) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <div>
                <Heading text="Contacts List:"/>
                <ul>
                    {contacts && contacts.map(({id, name, email}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Contacts;