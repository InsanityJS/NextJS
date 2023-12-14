import {FC} from "react";
import Heading from "./Heading";
import {IContact} from "../types/types";

type IProps = {
    contact: IContact,
}

const ContactInfo: FC<IProps> = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};

    if (!contact) {
        return <Heading tag="h3" text="Empty contact"/>
    }

    return (
        <>
            <Heading tag="h3" text={name}/>
            <div>
                <strong>Email:</strong>
                {} {email}
            </div>
            <div>
                <strong>Address:</strong>
                {} {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    );
}

export default ContactInfo;