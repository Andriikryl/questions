import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div>
          <h1>Header</h1>
        </div>
      </Container>
    </header>
  );
}
