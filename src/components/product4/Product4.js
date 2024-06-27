import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./product4.css";
import mamnon from '../../img/sp-mamnon.jpg'

import nt0401 from '../../img/nt04/nt04-cthm.jpg'
import nt0402 from '../../img/nt04/nt04-ctlh.jpg'
import nt0403 from '../../img/nt04/nt04-xd3g.jpg'
import nt0404 from '../../img/nt04/nt04-xd3t.jpg'

import nt0405 from '../../img/nt04/nt04-glhb.jpg'
import nt0406 from '../../img/nt04/nt04-gllh.jpg'
import nt0407 from '../../img/nt04/nt04-gllh2.jpg'
import nt0408 from '../../img/nt04/nt04-tld.jpg'

import nt0409 from '../../img/nt04/nt04-vdln.jpg'
import nt0410 from '../../img/nt04/nt04-xadu.jpg'
import nt0411 from '../../img/nt04/nt04-xdbb.jpg'
import nt0412 from '../../img/nt04/nt04-xk.jpg'

import nt0413 from '../../img/nt04/nt04-xd4c.jpg'
import nt0414 from '../../img/nt04/nt04-ct3m.jpg'
import nt0415 from '../../img/nt04/nt04-tn.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product4 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const imgs = [nt0401, nt0402, nt0403, nt0404, nt0405, nt0406, nt0407, nt0408, nt0409, nt0410, nt0411, nt0412, nt0413, nt0414, nt0415]
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
            <div className="main_product4">
                <div className="banner">
                    <img className="side" src={mamnon} />
                </div>
                <div className="sp_mamnon">
                    <h2>Thiết Bị Mầm Non, Trẻ Em</h2>
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
                            {data && data.slice(75, 90).map((item, index) => (
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

export default Product4;
