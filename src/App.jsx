import InputList from "./components/InputList";
import Layout from "./layout/layout";
import Provider from "./context/Provider";
import { Route, Routes } from "react-router-dom";
import About_us from "./pages/About_us";
import PageNOtFound from "./pages/404";
import Loading from "./pages/Loading";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<InputList />} />
            <Route path="/about-us" element={<About_us />} />
            <Route path="*" element={<PageNOtFound />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
