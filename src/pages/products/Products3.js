import React, { useEffect, useState } from 'react';
import "./products.css";
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import axios from 'axios';

import nt0301 from '../../img/nt03/nt03-xe.jpg'
import nt0302 from '../../img/nt03/nt03-dbtk.jpg'
import nt0303 from '../../img/nt03/nt03-dbtkd.jpg'
import nt0304 from '../../img/nt03/nt03-le.jpg'

import nt0305 from '../../img/nt03/nt03-ct.jpg'
import nt0306 from '../../img/nt03/nt03-dblt.jpg'
import nt0307 from '../../img/nt03/nt03-dc.jpg'
import nt0308 from '../../img/nt03/nt03-dcxe.jpg'

import nt0309 from '../../img/nt03/nt03-dn.jpg'
import nt0310 from '../../img/nt03/nt03-ktdn.jpg'
import nt0311 from '../../img/nt03/nt03-lb.jpg'
import nt0312 from '../../img/nt03/nt03-lbd.jpg'

import nt0313 from '../../img/nt03/nt03-tvdoi.jpg'
import nt0314 from '../../img/nt03/nt03-tvdon.jpg'
import nt0315 from '../../img/nt03/nt03-tld.jpg'
import nt0316 from '../../img/nt03/nt03-tldd.jpg'

import nt0317 from '../../img/nt03/nt03-tln.jpg'
import nt0318 from '../../img/nt03/nt03-xdbb.jpg'
import nt0319 from '../../img/nt03/nt03-xdhb.jpg'
import nt0320 from '../../img/nt03/nt03-xdxe.jpg'

import nt0321 from '../../img/nt03/nt03-tt.jpg'
import nt0322 from '../../img/nt03/nt03-xk.jpg'
import nt0323 from '../../img/nt03/nt03-xd.jpg'




const Products3 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0301, nt0302, nt0303, nt0304, nt0305, nt0306, nt0307, nt0308, nt0309, nt0310, nt0311, nt0312, nt0313, nt0314, nt0315, nt0316, nt0317, nt0318, nt0319, nt0320, nt0321, nt0322, nt0323]
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
                                {data && data.slice(52,75).map((item, index) => (
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
                            <Link to="/sanpham-2"><i class="fa-solid fa-chevron-left"></i></Link>
                            <Link to="/sanpham"><i class="fa-solid fa-1"></i></Link>
                            <Link to="/sanpham-2"><i class="fa-solid fa-2"></i></Link>
                            <i class="ba fa-solid fa-3"></i>
                            <Link to="/sanpham-4"><i class="fa-solid fa-4"></i></Link>
                            <Link to="/sanpham-5"><i class="fa-solid fa-5"></i></Link>
                            <Link to="/sanpham-4"><i class="fa-solid fa-chevron-right"></i></Link>
                        </div>

                    </div>
                    <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
                </div>


                <Footer />
            </div >
        </div>
    );
}

export default Products3;
