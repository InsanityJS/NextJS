import Header from "./Header";
import Footer from "./Footer";
import {FC, ReactNode} from "react";

type IProps = {
    children: ReactNode,
}

const Layout: FC<IProps> = ({children}) => (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
);

export default Layout