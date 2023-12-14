import Heading from "./Heading";
import {FC} from "react";
import {IPosts} from "../types/types";

type IProps = {
    post: IPosts,
}

const PostInfo: FC<IProps> = ({post}) => {
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