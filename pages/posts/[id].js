import * as React from 'react';
import Head from "next/head";
import PostInfo from "@/components/postInfo";

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
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

const Post = ({post}) => {
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