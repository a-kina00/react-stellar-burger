import styles from "./app.module.css";
import { getInfo } from "../../utils/burger-api";
import React from "react";

import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

function App() {
  const [status, setStatus] = React.useState(null);
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    getInfo(setData, setStatus, 'ingredients');
  }, []);

  return (
    <div className={styles.app}>
      <pre style={{
        margin: "auto",
        fontSize: "1.5rem"
      }}>
       <AppHeader />{ data ? 
       (<section className={styles.content}>
          <BurgerIngredients ingredients={data}/>
          <BurgerConstructor />
        </section>) : (status ? (`${status}`) : 'Lodaing...')}
      </pre>
    </div>
  );
}

export default App;
