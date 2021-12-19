import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Main } from "../pages/Main/Main";
import { ChristmasTree } from "../pages/ChristmasTree/ChristmasTree";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/toys' element={<Main />} />
        <Route path='/tree' element={<ChristmasTree />} />
      </Routes>
    </BrowserRouter>
  )
}
