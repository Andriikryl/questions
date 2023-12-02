import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";

export default function Contant() {
  return (
    <section>
      <Container>
        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Data types in JavaScript?</h3>
            <p>The Undefined Type</p>
            <p>The Null Type</p>
            <p>The Boolean Type</p>
            <p>The String Type</p>
            <p>The Symbol Type</p>
            <p>Numeric Types</p>
            <p>The Number Type</p>
            <p>The BigInt Type</p>
            <p>The Object Type</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
