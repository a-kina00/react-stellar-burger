import styles from "./app.module.css";
import { getInfo } from "../../utils/burger-api";
import { createStore } from 'redux';
import { useSelector } from "react-redux";
import { Provider } from 'react-redux';
import React from "react";

import { Context } from "../../services/context";
import { rootReducer, dataList } from "../../services/reducers/ingredients";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

function App() {
  const [status, setStatus] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getInfo(setData, setStatus);
  }, []);

  const store = createStore(rootReducer);

  //const ddata = useSelector(state => state.data)
  // console.log(ddata)
  return (
    <Provider store={store}>
      <Context.Provider value={{ data }}>
        <div className={styles.app}>
          <div className={styles.section}>
            <AppHeader />{data ?
              (<section className={styles.content}>
                <BurgerIngredients />
                <BurgerConstructor />
              </section>) : (status ? (`${status}`) : 'Lodaing...')}
          </div>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
