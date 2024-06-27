import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/logoNT.jpg";
import { AppContext } from "../../AppContext";

const NotFound = () => {
    const [show, setShow] = useState(false);
    const { cart } = useContext(AppContext);
    return (
        <div className={show ? "sidebar active" : "sidebar "}>
            <div className="left_sidebar">
                <div className="icon2">
                    <Link to="/giohang">
                        Giỏ Hàng<i class="fa-solid fa-cart-shopping"></i> ({cart.length})
                    </Link>
                </div>
                <div className="nav4">
                    <Link className="list" to="/">
                        Trang Chủ
                    </Link>{" "}
                    <br />
                    <br />
                    <Link className="list" to="/gioithieu">
                        Giới Thiệu
                    </Link>{" "}
                    <br />
                    <br />
                    <Link className="list" to="/sanpham">
                        Sản Phẩm{" "}
                    </Link>{" "}
                    <br />
                    <br />
                    <Link className="list" to="/tintuc">
                        Tin Tức
                    </Link>
                    <br />
                    <br />
                    <Link className="list" to="/lienhe">
                        Liên Hệ
                    </Link>{" "}
                    <br />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
