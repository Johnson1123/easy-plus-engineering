import { Header } from "./utils";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./screens";
const Wrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
