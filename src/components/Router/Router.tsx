import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { PagesRoutes } from "@/pages/contants";
import { SignUp } from "@/pages/SignUp/SignUp";
import { Login } from "@/pages/Login";
import { Login2 } from "@/pages/Login2";
import { TimeLine } from "@/pages/TimeLine";
import { CredCard } from "@/pages/CredCard";
import { TimeLine2 } from "@/pages/TimeLine2";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.HomePage} element={ <HomePage/> }/>
      <Route path={PagesRoutes.SignUpPage} element={ <SignUp/> }/>
      <Route path={PagesRoutes.LogInPage} element={ <Login/> }/>
      <Route path={PagesRoutes.LogInPage2} element={ <Login2/> }/>
      <Route path={PagesRoutes.TimeLine} element={ <TimeLine/> }/>
      <Route path={PagesRoutes.CredCard} element={ <CredCard/> }/>
      <Route path={PagesRoutes.TimeLine2} element={ <TimeLine2/> }/>
    </Routes>
  </BrowserRouter>
);