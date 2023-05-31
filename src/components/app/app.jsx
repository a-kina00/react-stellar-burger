import styles from "./app.module.css";
import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import OrderDetails from "../orderDetails/orderDetails";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => res.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.app}>
      <pre style={{
        margin: "auto",
        fontSize: "1.5rem"
      }}>
       <AppHeader />{ data ? 
       (<section className={styles.content}>
          <BurgerIngredients props={data}/>
          <BurgerConstructor props={data}/>
        </section>) : 'Loading...'}
      </pre>
    </div>
  );
}

export default App;
