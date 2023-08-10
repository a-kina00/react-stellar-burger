import styles from "./app.module.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "../../services/reducers/ingredients";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import { composeWithDevTools } from "redux-devtools-extension";

function App() {

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>

          <div className={styles.app}>
            <div className={styles.section}>
              <AppHeader />{
                (<section className={styles.content}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </section>)}
            </div>
          </div>

      </Provider>
    </DndProvider >
  );
}

export default App;
