import * as React from 'react';
import Head from "next/head";
import PostInfo from "../../components/postInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {IPosts} from "../../types/types";

type IProps = {
    post: IPosts,
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await response.json();

    const paths = data.map(({id}) => ({
        params: {id: id.toLocaleString()},
    }));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {post: data},
    }
}

// export const getServerSideProps = async (context) => {
//     const {id} = context.params;
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const data = await response.json();
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return {
//         props: {post: data},
//     }
// }

const Post: React.FC<IProps> = ({post}) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <PostInfo post={post}/>
        </>
    );
};

export default Post;