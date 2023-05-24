import styles from "./app.module.css";
import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
        margin: "auto",
        fontSize: "1.5rem"
      }}>
        <AppHeader />
        <section className={styles.content}>
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </pre>
    </div>
  );
}

export default App;
