import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import "./tintuc.css";
import tt1 from '../../img/tintuc1.jpg'
import tt2 from '../../img/tintuc2.jpg'
import tt3 from '../../img/tintuc3.jpg'
import tt4 from '../../img/tintuc4.jpg'
import tt5 from '../../img/tintuc5.jpg'
import { Link } from 'react-router-dom';

const Tintuc = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            <Header />
            <div className="main_tintuc">
                <div className="banner">
                    <img className="side" src={tt1} />
                </div>
                <div className="tintuc">
                    <h2>Tin Tức Về NT Sport</h2>
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
        </div>
    );
}

export default Tintuc;
