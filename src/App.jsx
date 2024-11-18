import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/Product/ProductPage";
import { UserProvider } from "./components/context/UserContext";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import HookForm from "./components/pages/HookForm/HookForm";
import ReactForm from "./components/pages/ReactForm/ReactForm";
import PostApp from "./components/pages/PostApp/PostApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />} />
            <Route path="/reactform" element={<ReactForm />} />
            <Route path="/postapp" element={<PostApp />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
