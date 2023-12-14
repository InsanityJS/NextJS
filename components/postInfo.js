import Heading from "@/components/Heading";

const PostInfo = ({post}) => {
    const {title, body} = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post"/>
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <div>
                <strong>Post:</strong>
                <div>
                    {body}
                </div>
            </div>
        </>
    );
}

export default PostInfo;