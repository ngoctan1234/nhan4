import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./product5.css";
import phukien from '../../img/sp-phukien.jpg'

import nt0501 from '../../img/nt05/nt05-bandap.jpg'
import nt0502 from '../../img/nt05/nt05-ncchan.jpg'
import nt0503 from '../../img/nt05/nt05-ncchan-composite.jpg'
import nt0504 from '../../img/nt05/nt05-ncdau.jpg'

import nt0505 from '../../img/nt05/nt05-ncvang.jpg'
import nt0506 from '../../img/nt05/nt05-nut.jpg'
import nt0507 from '../../img/nt05/nt05-ytl.jpg'
import nt0508 from '../../img/nt05/nt05-yxd.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product5 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0501, nt0502, nt0503, nt0504, nt0505, nt0506, nt0507, nt0508]
    useEffect(() => {
        window.scrollTo(0, 0)
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
            <Header />
            <div className="main_product5">
                <div className="banner">
                    <img className="side" src={phukien} />
                </div>
                <div className="sp_phukien">
                    <h2>Phụ Kiện Thiết Bị Công Viên, Mầm Non</h2>
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
                            {data && data.slice(90, 98).map((item, index) => (
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
                </div>

                <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
            </div>
            <Footer />
        </div>
    );
}

export default Product5;
