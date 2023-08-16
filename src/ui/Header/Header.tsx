import title from "../../assets/logo/deadful cherry tomatoes.svg";
import styles from "./Header.module.css";
import { Form } from "../../application/form/form";

export function Header() {
    return (
        <header className={styles.header}>
            <div className="siteName">
                <div className="deadfulImg__container">
                    <img
                        src={title}
                        className="deadfulImg"
                        alt="Deadful Cherry Tomatoes"
                    />
                </div>
            </div>
            <Form />
        </header>
    );
}
