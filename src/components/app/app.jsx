import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

function App() {
  return (
          <div className={styles.app}>
            <div className={styles.section}>
              <AppHeader />
                <section className={styles.content}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </section>
            </div>
          </div>
  );
}

export default App;
