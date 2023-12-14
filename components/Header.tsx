import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
import {FC} from "react";

const Header: FC = () => (
    <header className={styles.header}>
        <Navbar/>
    </header>
)

export default Header;