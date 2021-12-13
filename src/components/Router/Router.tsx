import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Main } from "../pages/Main/Main";
import { Secondary } from "../pages/Secondary/Secondary";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/secondary' element={<Secondary />} />
      </Routes>
    </BrowserRouter>
  )
}
