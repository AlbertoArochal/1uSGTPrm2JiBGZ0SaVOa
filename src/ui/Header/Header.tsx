import logo from "./rviewer-logo.svg";
import styles from "./Header.module.css";
import { Form } from "../../application/form/form";

export function Header() {
  return (
    <header className={styles.header}>
      <Form />
    </header>
  );
}
