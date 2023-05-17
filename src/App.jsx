import { Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
/* import SignUp from "./routes/SignUp";
import Login from "./routes/Login"; */
import PersistLogin from "./components/PersistLogin";
import RedirectIfAuth from "./components/RedirectIfAuth";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Root />} />
          <Route element={<RequireAuth />}></Route>
          <Route element={<RedirectIfAuth />}>
            {/*           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
