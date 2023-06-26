import styles from "./app.module.css";
import { getInfo, orderBurger } from "../../utils/burger-api";
import React from "react";

import { Context } from "../../services/context";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

function App() {
  const [status, setStatus] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [cart, addToCart] = React.useState([]);

  React.useEffect(() => {
    getInfo(setData, setStatus);
  }, []);

  return (
    <Context.Provider value={{ addToCart, cart, data }}>
      <div className={styles.app}>
        <div className={styles.section}>
          <AppHeader />{data ?
            (<section className={styles.content}>
              <BurgerIngredients ingredients={data} />
              <BurgerConstructor />
            </section>) : (status ? (`${status}`) : 'Lodaing...')}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
