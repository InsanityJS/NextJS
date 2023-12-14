type IHeading = {
    tag?: any,
    text: string,
}
const Heading = ({tag, text}: IHeading) => {
    const Tag = tag || 'h1';
    return <Tag>{text}</Tag>
}

export default Heading;