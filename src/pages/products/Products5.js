import React, { useEffect, useState } from 'react';
import "./products.css";
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import axios from 'axios';

import nt0501 from '../../img/nt05/nt05-bandap.jpg'
import nt0502 from '../../img/nt05/nt05-ncchan.jpg'
import nt0503 from '../../img/nt05/nt05-ncchan-composite.jpg'
import nt0504 from '../../img/nt05/nt05-ncdau.jpg'

import nt0505 from '../../img/nt05/nt05-ncvang.jpg'
import nt0506 from '../../img/nt05/nt05-nut.jpg'
import nt0507 from '../../img/nt05/nt05-ytl.jpg'
import nt0508 from '../../img/nt05/nt05-yxd.jpg'



const Products5 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0501, nt0502, nt0503, nt0504, nt0505, nt0506, nt0507, nt0508]
    useEffect(() => {
        window.scrollTo(0,0)
        const url = "https://66613d4963e6a0189fe8f994.mockapi.io/products";
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <div>
                <Header />
                <div className="main_products">
                    <div className="banner">
                        <Banner />
                    </div>
                    <div className="sp_tonghop">
                        <h2>Tổng Hợp Thiết Bị Của NT sport</h2>
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
                            <div className="row">
                                {data && data.slice(90,98).map((item, index) => (
                                    <div key={index} className="card" data-aos="flip-left" data-aos-delay="300">
                                        <Link to={`/sanpham/${item.id}`}>
                                            <img src={imgs[index]} />
                                            <h5>{item.tensp}</h5>
                                            <h6>Giá Bán: {formatter.format(item.gia)}</h6>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="icon">
                            <Link to="/sanpham-4"><i class="fa-solid fa-chevron-left"></i></Link>
                            <Link to="/sanpham"><i class="fa-solid fa-1"></i></Link>
                            <Link to="/sanpham-2"><i class="fa-solid fa-2"></i></Link>
                            <Link to="/sanpham-3"><i class="fa-solid fa-3"></i></Link>
                            <Link to="/sanpham-4"><i class="fa-solid fa-4"></i></Link>
                            <i class="nam fa-solid fa-5"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>

                    </div>
                    <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
                </div>


                <Footer />
            </div >
        </div>
    );
}

export default Products5;
