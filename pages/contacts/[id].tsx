import * as React from 'react';
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {GetServerSideProps} from "next"
import {IContact} from "../../types/types";

type IProps = {
    contact: IContact,
}

// export const getStaticProps = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return {
//         props: {contacts: data},
//     }
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contact: data},
    }
}

const Contact: React.FC<IProps> = ({contact}) => {
    return (
        <>
            <Head>
                <title>{contact.name}</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    );
};

export default Contact;