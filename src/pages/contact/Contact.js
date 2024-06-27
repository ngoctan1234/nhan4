import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// import { form } from "react-router-dom";
import "./contact.css";
import lh1 from '../../img/lienhe1.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const [formLienhe, setFormLienhe] = useState({
        hoten: '',
        dienthoai: '',
        email: '',
        diachi: '',
        noidung: '',
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormLienhe({
            ...formLienhe,
            [name]: value,
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formLienhe);
    };
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div>
            <Header />
            <div className="main_contact">
                <div className="banner">
                    <img className="side" src={lh1} />
                </div>

                <div className="lienhe">
                    <h2>Liên Hệ Với Chúng Tôi</h2>
                    <div className="ic">
                        <i class="fa-solid fa-minus"></i>
                        <i class="fa-solid fa-minus"></i>
                        <i class="fa-solid fa-genderless"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-genderless"></i>
                        <i class="fa-solid fa-minus"></i>
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <div className="container">
                        <div className="thongtin">
                            <h4>NT sport</h4>
                            <p>Hotline: 0942.771.229</p>
                            <p>Email: ntsport@gmail.com</p>
                            <p>Wibsite: ntsport.com</p>
                            <p>Địa chỉ: D8/26V/3L Ấp 4, Xã Vĩnh Lộc A, Huyện Bình Chánh, TP.HCM</p>
                            <p>Kho: D8/26c Nũ Dân Công, Xã Vĩnh Lộc A, Huyện Bình Chánh, TP.HCM</p>
                        </div>

                        <div className="form_lh">
                            <h4>Nhập thông tin liên hệ</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form_group">
                                    <label htmlFor="hoten">Họ và Tên:</label>
                                    <input 
                                        type="text"
                                        className="form_control"
                                        id="hoten"
                                        name="hoten"
                                        value={formLienhe.hoten}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_group">
                                    <label htmlFor="dienthoai">Điện Thoại:</label>
                                    <input 
                                        type="text"
                                        className="form_control"
                                        id="dienthoai"
                                        name="dienthoai"
                                        value={formLienhe.dienthoai}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_group">
                                    <label htmlFor="email">Email:</label>
                                    <input 
                                        type="email"
                                        className="form_control"
                                        id="email"
                                        name="email"
                                        value={formLienhe.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_group">
                                    <label htmlFor="diachi">Địa Chỉ:</label>
                                    <input 
                                        type="text"
                                        className="form_control"
                                        id="diachi"
                                        name="diachi"
                                        value={formLienhe.diachi}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_group">
                                    <label htmlFor="noidung">Nội dung cần liên hệ:</label>
                                    <input 
                                        className="form_control"
                                        id="noidung"
                                        name="noidung"
                                        rows="3"
                                        value={formLienhe.noidung}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn">Gửi thông tin</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="nut" >
                    <h2>Tổng Hợp Sản Phẩm Của Chúng Tôi</h2>
                    <div className="nutsp">
                        <Link to="/thietbidon"><button data-aos="zoom-in-down" data-aos-delay="300">Thiết Bị Công Viên Trụ Đơn</button></Link>
                        <Link to="/thietbidoicaocap"><button data-aos="zoom-in-down" data-aos-delay="450">Thiết Bị Trụ Đôi Vách Ngăn</button></Link>
                        <Link to="/thietbigiare"><button data-aos="zoom-in-down" data-aos-delay="600">Thiết Bị Công Viên Giá Rẻ</button></Link>
                        <Link to="/thietbimamnon"><button data-aos="zoom-in-down" data-aos-delay="750">Thiết Bị Mầm Non, Trẻ Em</button></Link>
                        <Link to="/phukien"><button data-aos="zoom-in-down" data-aos-delay="900">Phụ Kiện Thiết Bị Công Viên</button></Link>
                    </div>
                </div>
                <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
