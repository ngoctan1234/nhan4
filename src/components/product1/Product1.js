import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./product1.css";
import spdon from '../../img/sp-trudon.jpg'
import nt0101 from '../../img/nt01/nt01-dblt.jpg'
import nt0102 from '../../img/nt01/nt01-xk-kt.jpg'
import nt0103 from '../../img/nt01/nt01-le.jpg'
import nt0104 from '../../img/nt01/nt01-dbtk-tv.jpg'

import nt0105 from '../../img/nt01/nt01-lb-cam.jpg'
import nt0106 from '../../img/nt01/nt01-tvdoi-cam.jpg'
import nt0107 from '../../img/nt01/nt01-dbtk-cam.jpg'
import nt0108 from '../../img/nt01/nt01-xdhb-cam.jpg'

import nt0109 from '../../img/nt01/nt01-xd.jpg'
import nt0110 from '../../img/nt01/nt01-xdtl.jpg'
import nt0111 from '../../img/nt01/nt01-ttt.jpg'
import nt0112 from '../../img/nt01/nt01-dc.jpg'

import nt0113 from '../../img/nt01/nt01-xe.jpg'
import nt0114 from '../../img/nt01/nt01-dn.jpg'
import nt0115 from '../../img/nt01/nt01-kt.jpg'
import nt0116 from '../../img/nt01/nt01-tvd.jpg'

import nt0117 from '../../img/nt01/nt01-lb.jpg'
import nt0118 from '../../img/nt01/nt01-dbtk.jpg'
import nt0119 from '../../img/nt01/nt01-dbtkd.jpg'
import nt0120 from '../../img/nt01/nt01-dnn.jpg'

import nt0121 from '../../img/nt01/nt01-xe-cam.jpg'
import nt0122 from '../../img/nt01/nt01-le-cam.jpg'
import nt0123 from '../../img/nt01/nt01-xdhb-cam.jpg'
import nt0124 from '../../img/nt01/nt01-dbtkd-cam.jpg'

import nt0125 from '../../img/nt01/nt01-dbtk2.jpg'
import nt0126 from '../../img/nt01/nt01-xk.jpg'
import nt0127 from '../../img/nt01/nt01-xd-lb-xe.jpg'
import nt0128 from '../../img/nt01/nt01-xd-tv-xe.jpg'

import nt0129 from '../../img/nt01/nt01-lb-db-dx.jpg'
import nt0130 from '../../img/nt01/nt01-xd-db-xe.jpg'
import nt0131 from '../../img/nt01/nt01-xdhb.jpg'
import nt0132 from '../../img/nt01/nt01-db-lb-xe.jpg'


const Product1 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0101, nt0102, nt0103, nt0104, nt0105, nt0106, nt0107, nt0108, nt0109, nt0110, nt0111, nt0112, nt0113, nt0114, nt0115, nt0116, nt0117, nt0118, nt0119, nt0120, nt0121, nt0122, nt0123, nt0124, nt0125, nt0126, nt0127, nt0128, nt0129, nt0130, nt0131, nt0132]
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
            <Header />

            <div className="main_product1">
                <div className="banner">
                    <img className="side" src={spdon} />
                </div>
                <div className="sp_maydon">
                    <h2>Thiết Bị Công Viên Trụ Đơn</h2>
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
                            {data && data.slice(0,32).map((item, index) => (
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

export default Product1;