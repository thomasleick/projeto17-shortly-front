import { Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
import PersistLogin from "./components/PersistLogin";
import RedirectIfAuth from "./components/RedirectIfAuth";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";

export default function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Root />} />
          <Route element={<RequireAuth />}></Route>
          <Route element={<RedirectIfAuth />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
