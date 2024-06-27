import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";

import Products from "./pages/products/Products";
import Products2 from "./pages/products/Products2";
import Products3 from "./pages/products/Products3";
import Products4 from "./pages/products/Products4";
import Products5 from "./pages/products/Products5";

import Product1 from "./components/product1/Product1";
import Product2 from "./components/product2/Product2";
import Product3 from "./components/product3/Product3";
import Product4 from "./components/product4/Product4";
import Product5 from "./components/product5/Product5";

import Detail from "./pages/detail/Detail";

import Contact from "./pages/contact/Contact";

import Tintuc from "./pages/tintuc/Tintuc";
import Tintuc1 from "./pages/tintuc/Tintuc1";
import Tintuc2 from "./pages/tintuc/Tintuc2";
import Tintuc3 from "./pages/tintuc/Tintuc3";
import Tintuc4 from "./pages/tintuc/Tintuc4";

import NotFound from "./components/notfound/NotFound";
import { AppProvider } from "./AppContext";
import Cart1 from "./pages/cart/Cart1";

const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <AppProvider>
                <HashRouter>
                    <Routes>
                        <Route index element={<Home />} />

                        <Route path="/gioithieu" element={<Blog />} />

                        <Route path="/sanpham" element={<Products />} />
                        <Route path="/sanpham-2" element={<Products2 />} />
                        <Route path="/sanpham-3" element={<Products3 />} />
                        <Route path="/sanpham-4" element={<Products4 />} />
                        <Route path="/sanpham-5" element={<Products5 />} />

                        <Route path="/thietbidon" element={<Product1 />} />
                        <Route path="/thietbidoicaocap" element={<Product2 />} />
                        <Route path="/thietbigiare" element={<Product3 />} />
                        <Route path="/thietbimamnon" element={<Product4 />} />
                        <Route path="/phukien" element={<Product5 />} />

                        <Route path="/sanpham/:id" element={<Detail />} />

                        <Route path="/tintuc" element={<Tintuc />} />
                        <Route path="/tintuc/huongdantapthietbicongvien" element={<Tintuc1 />} />
                        <Route path="/tintuc/top10maytapcongvien" element={<Tintuc2 />} />
                        <Route path="/tintuc/loiichkhisudungmaytapcongvien" element={<Tintuc3 />} />
                        <Route path="/tintuc/thietbitheducngoaitroilagi" element={<Tintuc4 />} />

                        <Route path="/lienhe" element={<Contact />} />

                        <Route path="/giohang" element={<Cart1 />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </HashRouter>
            </AppProvider>
        </div>
    );
};

export default App;
