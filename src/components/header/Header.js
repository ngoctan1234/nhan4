import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import img1 from "../../img/logoNT.jpg";
import "./header.css";
import { AppContext } from '../../AppContext';

const Header = () => {
    const [show, setShow] = useState(false)
    const {cart}=useContext(AppContext)
    return (
        <div>
            <div className="header">

                <button onClick={() => setShow(!show)} className="btn-toggle"><i class="fa-solid fa-bars"></i></button>

                <div className="nav1">
                    <img className="logo" src={img1} />
                </div>

                <div className="nav2">
                    <Link className="list" to="/">Trang Chủ</Link>
                    <Link className="list" to="/gioithieu">Giới Thiệu</Link>
                    <Link className="list product" to="/sanpham">Sản Phẩm <i class="fa-solid fa-chevron-down"></i>
                        <ul className="menu2">
                            <li><Link to="/thietbidon">Thiết Bị Trụ Đơn</Link></li>
                            <li><Link to="/thietbidoicaocap">Thiết Bị Trụ Đôi Vách Ngăn</Link></li>
                            <li><Link to="/thietbigiare">Thiết Bị Giá Rẻ</Link></li>
                            <li><Link to="/thietbimamnon">Thiết Bị Mầm Non, Trẻ Em</Link></li>
                            <li><Link to="/phukien">Phụ Kiện Thiết Bị Công Viên</Link></li>
                        </ul>
                    </Link>
                    <Link className="list" to="/tintuc">Tin Tức</Link>
                    <Link className="list" to="/lienhe">Liên Hệ</Link>
                </div>

                <div className="icon1">
                    <Link to="/giohang">Giỏ Hàng<i class="fa-solid fa-cart-shopping"></i>({cart.length})</Link>
                </div>

            </div>

            <div className={show ? "sidebar active" : "sidebar "}>
                <div className="left_sidebar">
                    <div className="icon2">
                        <Link to="/giohang">Giỏ Hàng<i class="fa-solid fa-cart-shopping"></i> ({cart.length})</Link>
                    </div>
                    <div className="nav4">
                        <Link className="list" to="/">Trang Chủ</Link> <br />
                        <br />
                        <Link className="list" to="/gioithieu">Giới Thiệu</Link> <br />
                        <br />
                        <Link className="list" to="/sanpham">Sản Phẩm </Link> <br />
                        <br />
                        <Link className="list" to="/tintuc">Tin Tức</Link><br />
                        <br />
                        <Link className="list" to="/lienhe">Liên Hệ</Link> <br />
                    </div>
                </div>

                <div onClick={() => setShow(!show)} className="right_sidebar">
                    
                </div>



            </div>
        </div>
    );
}

export default Header;
