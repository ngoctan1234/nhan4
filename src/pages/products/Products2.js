import React, { useEffect, useState } from 'react';
import "./products.css";
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import axios from 'axios';

import nt0201 from '../../img/nt02/nt02-lb.jpg'
import nt0202 from '../../img/nt02/nt02-xd.jpg'
import nt0203 from '../../img/nt02/nt02-tvdon.jpg'
import nt0204 from '../../img/nt02/nt02-dc.jpg'

import nt0205 from '../../img/nt02/nt02-dblt.jpg'
import nt0206 from '../../img/nt02/nt02-dbtk.jpg'
import nt0207 from '../../img/nt02/nt02-le.jpg'
import nt0208 from '../../img/nt02/nt02-xdhh.jpg'

import nt0209 from '../../img/nt02/nt02-xe.jpg'
import nt0210 from '../../img/nt02/nt02-xk.jpg'
import nt0211 from '../../img/nt02/nt02-ms-x.jpg'
import nt0212 from '../../img/nt02/nt02-kt-x.jpg'

import nt0213 from '../../img/nt02/nt02-cn-x.jpg'
import nt0214 from '../../img/nt02/nt02-xe-x.jpg'
import nt0215 from '../../img/nt02/nt02-dblt-x.jpg'
import nt0216 from '../../img/nt02/nt02-lb-x.jpg'

import nt0217 from '../../img/nt02/nt02-le-x.jpg'
import nt0218 from '../../img/nt02/nt02-tvdon-x.jpg'
import nt0219 from '../../img/nt02/nt02-xdhh-x.jpg'
import nt0220 from '../../img/nt02/nt02-xd-x.jpg'


const Products2 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0201, nt0202, nt0203, nt0204, nt0205, nt0206, nt0207, nt0208, nt0209, nt0210, nt0211, nt0212, nt0213, nt0214, nt0215, nt0216, nt0217, nt0218, nt0219, nt0220]
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
                                {data && data.slice(32,52).map((item, index) => (
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
                            <Link to="/sanpham"><i class="fa-solid fa-chevron-left"></i></Link>
                            <Link to="/sanpham"><i class="fa-solid fa-1"></i></Link>
                            <i class="hai fa-solid fa-2"></i>
                            <Link to="/sanpham-3"><i class="fa-solid fa-3"></i></Link>
                            <Link to="/sanpham-4"><i class="fa-solid fa-4"></i></Link>
                            <Link to="/sanpham-5"><i class="fa-solid fa-5"></i></Link>
                            <Link to="/sanpham-3"><i class="fa-solid fa-chevron-right"></i></Link>
                        </div>

                    </div>
                    <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
                </div>


                <Footer />
            </div >
        </div>
    );
}

export default Products2;
