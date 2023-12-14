import * as React from 'react';
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import {GetStaticProps} from "next";
import {IPosts} from "../../types/types";

type IProps = {
    posts: IPosts[],
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {posts: data},
    }
}

const Posts: React.FC<IProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <div>
                <Heading text="Posts list:"/>
                <ul>
                    {posts && posts.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Posts;