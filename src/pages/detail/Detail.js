import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./detail.css";

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

import nt0501 from '../../img/nt05/nt05-bandap.jpg'
import nt0502 from '../../img/nt05/nt05-ncchan.jpg'
import nt0503 from '../../img/nt05/nt05-ncchan-composite.jpg'
import nt0504 from '../../img/nt05/nt05-ncdau.jpg'

import nt0505 from '../../img/nt05/nt05-ncvang.jpg'
import nt0506 from '../../img/nt05/nt05-nut.jpg'
import nt0507 from '../../img/nt05/nt05-ytl.jpg'
import nt0508 from '../../img/nt05/nt05-yxd.jpg'
import swal from 'sweetalert';

import { AppContext } from "../../AppContext"

const Detail = () => {
    const {addCart}=useContext(AppContext)
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const [data, setData] = useState(null);
    const { id } = useParams();
    const arr = [nt0101, nt0102, nt0103, nt0104, nt0105, nt0106, nt0107, nt0108, nt0109, nt0110, nt0111, nt0112, nt0113, nt0114, nt0115, nt0116, nt0117, nt0118, nt0119, nt0120, nt0121, nt0122, nt0123, nt0124, nt0125, nt0126, nt0127, nt0128, nt0129, nt0130, nt0131, nt0132, nt0201, nt0202, nt0203, nt0204, nt0205, nt0206, nt0207, nt0208, nt0209, nt0210, nt0211, nt0212, nt0213, nt0214, nt0215, nt0216, nt0217, nt0218, nt0219, nt0220, nt0301, nt0302, nt0303, nt0304, nt0305, nt0306, nt0307, nt0308, nt0309, nt0310, nt0311, nt0312, nt0313, nt0314, nt0315, nt0316, nt0317, nt0318, nt0319, nt0320, nt0321, nt0322, nt0323, nt0401, nt0402, nt0403, nt0404, nt0405, nt0406, nt0407, nt0408, nt0409, nt0410, nt0411, nt0412, nt0413, nt0414, nt0415, nt0501, nt0502, nt0503, nt0504, nt0505, nt0506, nt0507, nt0508]
    useEffect(() => {
        window.scrollTo(0, 0)
        const url = `https://66613d4963e6a0189fe8f994.mockapi.io/products/${id}`;
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
        <div className="main_detail">
            <Header />
            <h1>Chi Tiết Sản Phẩm</h1>
            <div className="ic">
                <i class="fa-solid fa-minus"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-minus"></i>
            </div>
            {data && (
                <div className="chitiet_sp">
                    <div className="hinh_sp">
                        <img src={arr[id - 1]} />
                    </div>
                    <div className="noidung_sp">
                        <h2>{data.tensp}</h2>
                        <h6>Giá bán: {formatter.format(data.gia)}</h6>
                        <p>- Giá trên chưa bao gồm 8% VAT và chi phí vận chuyển & lắp đặt.</p>
                        <p>- Giá tùy thuộc vào số lượng đặt hàng sẽ có chiết khấu % hoa hồng cao khi Quý Khách Hàng liên hệ mua hàng qua số điện thoại 0942.771.229.</p>
                        <p>- Kích thước: {data.kichthuoc}</p>
                        <p>- Vật liệu: {data.vatlieu}</p>
                        <p>* Mô tả: {data.mota}</p>
                        <p>* Hướng dẫn: {data.huongdan}</p>
                        <button className="them_sp" onClick={()=>
                            {
                                swal("Thành Công", "Đã thêm vào giỏ hàng!", "success");
                                addCart(data.id)
                            }
                            
                            }>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            )}
            <div className="sp_lienquan">
                <h2>Sản Phẩm Liên Quan</h2>
                <div className="container">
                    <div className="row">
                        <div className="card" data-aos="flip-left" data-aos-delay="300">
                            <Link to="/sanpham/9">
                                <img className="imgsp" src={nt0109} />
                                <h3>Xe Đạp</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="450">
                            <Link to="/sanpham/10">
                                <img className="imgsp" src={nt0110} />
                                <h3>Xe Đạp Tựa Lưng</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="600">
                            <Link to="/sanpham/11">
                                <img className="imgsp" src={nt0111} />
                                <h3>Tập Toàn Thân</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="750">
                            <Link to="/sanpham/12">
                                <img className="imgsp" src={nt0112} />
                                <h3>Đạp Chân</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="300">
                            <Link to="/sanpham/27">
                                <img className="imgsp" src={nt0127} />
                                <h3>Bộ 3in1 Lưng Bụng - Xe Đạp - Xoay Eo</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="450">
                            <Link to="/sanpham/28">
                                <img className="imgsp" src={nt0128} />
                                <h3>Bộ 3in1 Xe Đạp - Tay Vai - Xoay Eo</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="600">
                            <Link to="/sanpham/29">
                                <img className="imgsp" src={nt0129} />
                                <h3>Bộ 3in1 Lưng Bụng - Đi Bộ Trên Không - Xe Đạp</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>

                        <div className="card" data-aos="flip-left" data-aos-delay="750">
                            <Link to="/sanpham/30">
                                <img className="imgsp" src={nt0130} />
                                <h3>Bộ 3in1 Đi Bộ Trên Không - Xe Đạp - Xoay Eo</h3>
                                <h5>Liên Hệ</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="cuon" onClick={handle_scroll}><i class="fa-solid fa-chevron-up"></i></button>
            <Footer />
        </div>
    );
}

export default Detail;
