import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

import ResetPassword from "../pages/reset-password/reset-password";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile";
import Login from "../pages/login/login";
import ForgotPassword from "../pages/forgot-password/forgot-password";
import IngredientFullPage from "../pages/ingredients/ingredients";
import Feed from "../pages/feed/feed";

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.section}>
        <AppHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ingredient-info" element={<IngredientFullPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={
            <section className={styles.content}>
              <BurgerIngredients />
              <BurgerConstructor />
            </section>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
