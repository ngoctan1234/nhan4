import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ct3 from '../../img/gioithieu3.jpg'

import nt0101 from '../../img/nt01/nt01-dblt.jpg'
import nt0102 from '../../img/nt01/nt01-xk-kt.jpg'
import nt0103 from '../../img/nt01/nt01-le.jpg'
import nt0104 from '../../img/nt01/nt01-dbtk-tv.jpg'

import nt0105 from '../../img/nt01/nt01-lb-cam.jpg'
import nt0106 from '../../img/nt01/nt01-tvdoi-cam.jpg'
import nt0107 from '../../img/nt01/nt01-dbtk-cam.jpg'
import nt0108 from '../../img/nt01/nt01-xdhb-cam.jpg'

import nt0201 from '../../img/nt02/nt02-lb.jpg'
import nt0202 from '../../img/nt02/nt02-xd.jpg'
import nt0203 from '../../img/nt02/nt02-tvdon.jpg'
import nt0204 from '../../img/nt02/nt02-dc.jpg'

import nt0211 from '../../img/nt02/nt02-ms-x.jpg'
import nt0212 from '../../img/nt02/nt02-kt-x.jpg'
import nt0213 from '../../img/nt02/nt02-cn-x.jpg'
import nt0214 from '../../img/nt02/nt02-xe-x.jpg'

import nt0301 from '../../img/nt03/nt03-xe.jpg'
import nt0302 from '../../img/nt03/nt03-dbtk.jpg'
import nt0303 from '../../img/nt03/nt03-dbtkd.jpg'
import nt0304 from '../../img/nt03/nt03-le.jpg'

import tt2 from '../../img/tintuc2.jpg'
import tt3 from '../../img/tintuc3.jpg'
import tt4 from '../../img/tintuc4.jpg'
import tt5 from '../../img/tintuc5.jpg'
import "./home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            <Header />
            <div className="main_home">
                <div className="banner">
                    <Banner />
                </div>

                <div className="visao">
                    <div className="container">
                        <h2>Lý do bạn nên chọn NT sport</h2>
                        <div className="ic">
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div className="row">
                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <i class="icon fa-solid fa-award"></i>
                                <h4>Chất Lượng Sản Phẩm</h4>
                                <p>Chúng tôi lấy Uy Tín và Chất Lượng đặt lên hàng đầu</p>
                            </div>

                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <i class="icon fa-solid fa-screwdriver-wrench"></i>
                                <h4>Thời Gian Bảo Hành</h4>
                                <p>Bảo hành sản phẩm từ 12 đến 36 tháng, khắc phục sự cố nhanh chóng</p>
                            </div>

                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <i class="icon fa-solid fa-hand-holding-dollar"></i>
                                <h4>Giá Cả Cạnh Tranh</h4>
                                <p>Trực tiếp sản xuất, báo giá cạnh tranh, chiết khấu cao</p>
                            </div>

                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="300">
                                <i class="icon fa-solid fa-truck-fast"></i>
                                <h4>Giao Hàng & Lắp Đặt</h4>
                                <p>Giao Hàng & Lắp đặt nhanh chóng, đúng tiến độ hợp đồng</p>
                            </div>

                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="300">
                                <i class="icon fa-solid fa-phone-volume"></i>
                                <h4>Hỗ Trợ Hotline 24/24</h4>
                                <p>Hỗ trợ tư vấn nhiệt tình, giúp khách hàng lựa chọn giải pháp tốt nhất</p>
                            </div>

                            <div className="card_visao col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="300">
                                <i class="icon fa-regular fa-handshake"></i>
                                <h4>Bạn Đồng Hành</h4>
                                <p>Chúng tôi lấy Chất Lượng tạo nên Uy Tín và lấy sự Hài Lòng làm động lực</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sp_noibat">
                    <div className="container ">
                        <h2>Sản Phẩm Nổi Bật</h2>
                        <div className="ic">
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div className="row">
                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
                                <Link to="/sanpham/1"><img className="imgsp" src={nt0101} />
                                    <h3>Đi Bộ Lắc Tay</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="450" >
                                <Link to="/sanpham/2"><img className="imgsp" src={nt0102} />
                                    <h3>Cụm 2in1 XK-KT</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="600">
                                <Link to="/sanpham/3"><img className="imgsp" src={nt0103} />
                                    <h3>Lưng Eo</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="750">
                                <Link to="/sanpham/4"><img className="imgsp" src={nt0104} />
                                    <h3>Cụm 2in1 ĐB-TV</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
                                <Link to="/sanpham/5"><img className="imgsp" src={nt0105} />
                                    <h3>Lưng Bụng</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="450">
                                <Link to="/sanpham/6"><img className="imgsp" src={nt0106} />
                                    <h3>Tay Vai Đôi</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="600">
                                <Link to="/sanpham/7"><img className="imgsp" src={nt0107} />
                                    <h3>Đi Bộ Trên Không</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="750">
                                <Link to="/sanpham/8"><img className="imgsp" src={nt0108} />
                                    <h3>Xà Đơn Hai Bậc</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
                                <Link to="/sanpham/33"><img className="imgsp" src={nt0201} />
                                    <h3>Lưng Bụng</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="450" >
                                <Link to="/sanpham/34"><img className="imgsp" src={nt0202} />
                                    <h3>Xe Đạp</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="600">
                                <Link to="/sanpham/35"><img className="imgsp" src={nt0203} />
                                    <h3>Tay Vai Đơn</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="750">
                                <Link to="/sanpham/36"><img className="imgsp" src={nt0204} />
                                    <h3>Đạp Chân</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
                                <Link to="/sanpham/43"> <img className="imgsp" src={nt0211} />
                                    <h3>Massage Lưng</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="450" >
                                <Link to="/sanpham/44"><img className="imgsp" src={nt0212} />
                                    <h3>Kéo Tay</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="600">
                                <Link to="/sanpham/45"><img className="imgsp" src={nt0213} />
                                    <h3>Cỡi Ngựa</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="750">
                                <Link to="/sanpham/46"><img className="imgsp" src={nt0214} />
                                    <h3>Xoay Eo</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
                                <Link to="/sanpham/53"><img className="imgsp" src={nt0301} />
                                    <h3>Xoay Eo</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="450">
                                <Link to="/sanpham/54"><img className="imgsp" src={nt0302} />
                                    <h3>Đi Bộ Trên Không</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="600">
                                <Link to="/sanpham/55"><img className="imgsp" src={nt0303} />
                                    <h3>Đi Bộ Trên Không Đôi</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                            <div className="card col-lg-2 col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="750">
                                <Link to="/sanpham/56"><img className="imgsp" src={nt0304} />
                                    <h3>Lưng Eo</h3>
                                    <h5>Liên Hệ</h5></Link>
                                {/* <button className="chitiet">Chi tiết sản phẩm</button> */}
                            </div>

                        </div>
                        <div className="sp_xemthem">
                            <Link to="/sanpham"><button className="xemthem">Xem Thêm Sản Phẩm...</button></Link>
                        </div>

                    </div>
                </div>

                <div className="vechungtoi">
                    <div className="container">
                        <div className="left_vechungtoi" data-aos="zoom-in" data-aos-delay="600">
                            <h2>Về Chúng Tôi</h2>
                            <p>Với nhiều năm kinh nghiệm trong sản xuất và thi công lắp đặt thiết bị công viên, sản phầm của NT sport đã có mặt trên khắp thị trường Việt Nam với giá cả cạnh tranh và chiết khấu hoa hồng cao. </p>
                        </div>
                        <div className="right_vechungtoi" data-aos="zoom-in-up" data-aos-delay="900">
                            <img className="side" src={ct3} />
                        </div>
                    </div>
                </div>

                <div className="baivietmoi">
                    <h2>Bài Viết Mới Về NT sport</h2>
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
                            <div className="card" data-aos="zoom-out-up" data-aos-delay="300">
                                <Link to="/tintuc/huongdantapthietbicongvien"><img className="imgsp" src={tt2} />
                                    <h5>Bài Hướng Dẫn Tập Các Thiết Bị Thể Dục Thể Thao Công Viên</h5>
                                    <p>Ngày đăng: 01/06/2024 09:30 AM</p>
                                    <div className="yeuthich">
                                        <div className="com">
                                            <i class="fa-solid fa-thumbs-up"></i>
                                            <p>612 likes</p>
                                        </div>
                                        <div className="com">
                                            <i class="fa-solid fa-comments"></i>
                                            <p>230 Comments</p>
                                        </div>
                                    </div></Link>
                            </div>

                            <div className="card" data-aos="zoom-out-up" data-aos-delay="450">
                                <Link to="/tintuc/top10maytapcongvien"><img className="imgsp" src={tt3} />
                                    <h5>Loại Máy Tập Công Viên Nào Được Ưa Chuộng Nhất Hiện Nay</h5>
                                    <p>Ngày đăng: 07/06/2024 11:30 AM</p>
                                    <div className="yeuthich">
                                        <div className="com">
                                            <i class="fa-solid fa-thumbs-up"></i>
                                            <p>429 likes</p>
                                        </div>
                                        <div className="com">
                                            <i class="fa-solid fa-comments"></i>
                                            <p>182 Comments</p>
                                        </div>
                                    </div></Link>
                            </div>

                            <div className="card" data-aos="zoom-out-up" data-aos-delay="600">
                                <Link to="/tintuc/loiichkhisudungmaytapcongvien"><img className="imgsp" src={tt4} />
                                <h5>Những Lợi Ích Khi Sử Dụng Thiết Bị Thể Dục Công Viên</h5>
                                <p>Ngày đăng: 09/06/2024 02:30 PM</p>
                                <div className="yeuthich">
                                    <div className="com">
                                        <i class="fa-solid fa-thumbs-up"></i>
                                        <p>401 likes</p>
                                    </div>
                                    <div className="com">
                                        <i class="fa-solid fa-comments"></i>
                                        <p>159 Comments</p>
                                    </div>
                                </div></Link>
                            </div>

                            <div className="card" data-aos="zoom-out-up" data-aos-delay="750">
                                <Link to="/tintuc/thietbitheducngoaitroilagi"><img className="imgsp" src={tt5} />
                                <h5>Thiết Bị Thể Dục Ngoài Trời Là Gì? Những Lưu Ý Gì Khi Tập?</h5>
                                <p>Ngày đăng: 15/06/2024 06:30 PM</p>
                                <div className="yeuthich">
                                    <div className="com">
                                        <i class="fa-solid fa-thumbs-up"></i>
                                        <p>732 likes</p>
                                    </div>
                                    <div className="com">
                                        <i class="fa-solid fa-comments"></i>
                                        <p>296 Comments</p>
                                    </div>
                                </div></Link>
                            </div>
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
        </div >
    );
}

export default Home;
