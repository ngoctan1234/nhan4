import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./tintuc1.css";

import nt0101 from '../../img/nt01/nt01-dblt.jpg'
import nt0102 from '../../img/nt01/nt01-xk-kt.jpg'
import nt0103 from '../../img/nt01/nt01-le.jpg'
import nt0104 from '../../img/nt01/nt01-dbtk-tv.jpg'

import nt0105 from '../../img/nt01/nt01-lb-cam.jpg'
import nt0106 from '../../img/nt01/nt01-tvdoi-cam.jpg'
import nt0107 from '../../img/nt01/nt01-dbtk-cam.jpg'
import nt0108 from '../../img/nt01/nt01-xdhb-cam.jpg'

import tt2 from '../../img/tintuc2.jpg'
import tt3 from '../../img/tintuc3.jpg'
import tt4 from '../../img/tintuc4.jpg'
import tt5 from '../../img/tintuc5.jpg'
import { Link } from 'react-router-dom';
const Tintuc1 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="tintuc1">
            <Header />
            <div className="main_tt1">
                <h2>Hướng Dẫn Tập Các Thiết Bị Thể Dục Công Viên</h2>
                <div className="ic">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <p className="ngaydang">Ngày đăng: 01/06/2024 09:30 AM</p>
                <h5>1/. Thiết Bị Đi Bộ Lắc Tay</h5>
                <p>- Máy đi bộ lắc tay ngoài trời là dòng thiết bị tập chuyên sâu rèn luyện sức mạnh của tay/chân và các khớp hông/khớp gối, tăng cường độ dẻo dai của các nhóm cơ bắp và lưu thông khí huyết.</p>
                <p>- Với máy đi bộ lắc tay ngoài trời, người tập chỉ việc đặt 2 chân lên phần bàn đạp, 2 tay nắm lên 2 cần phía trên, lưng thẳng. Sau đó từ từ di chuyển chân để vận động toàn thân. Chân ở vị trí cao hơn từ từ đạp xuống đồng thời chân còn lại từ từ di chuyển lên trên.</p>
                <div className="giua"><img className="imgsp" src={nt0101} /></div>

                <h5>2/. Thiết Bị Xà Kép</h5>
                <p>- Thiết bị xà kép là một thiết bị tập luyên đa năng tác dụng lên khắp toàn bộ cơ thể như vai, ngực, bụng, bắp tay và lưng.</p>
                <p>- Với thiết bị xà kép, người tập đứng giữa 2 thanh xà kép, 2 tay nắm lấy 2 thanh xà, dùng sức của tay và vai, nâng thân người lên sao cho vai và ngực ngang thanh xà, đẩy chân lên càng cao càng tốt. Sau đó đưa chân về vị trí ban đầu và lặp lại động tác. Cách hít thở chuẩn đó là: hít vào khi xuống và thở ra khi lên.</p>

                <h5>3/. Thiết Bị Kéo Tay</h5>
                <p>- Máy kéo tay ngoài trời giúp Tăng cường sức mạnh cơ vai, cơ bắp tay, tăng tính dẻo dai của cơ xô liên sườn.</p>
                <p>- Người tập ngồi lên yên của máy, nắm chặt tay cầm phía trên đầu bằng hai tay. Giữ cho cánh tay thẳng ngang, sau đó kéo tay cầm lại từ từ. Sau đó từ từ thả tay về vị trí ban đầu (lưu ý không thả thẳng tay). Phần đối trọng chính là trọng lượng cơ thể của người tập. Thực hiện động tác này từ 5-10 lần kéo, tùy vào sức khỏe từng người.</p>
                <div className="giua"><img className="imgsp" src={nt0102} /></div>

                <h5>4/. Thiết Bị Lưng Eo</h5>
                <p>- Máy tập lưng eo ngoài trời là dụng cụ thuộc nhóm tập hông eo. Cung cấp các bài tập cho vùng khớp hông, giảm mỡ eo, làm săn chắc cơ hông và cơ bụng. giúp khí huyết lưu thông.</p>
                <p>- Người tập đứng 2 chân lên phần bàn đạp của máy, tay nắm chặt vào phần giá đỡ. Dùng lực lắc phần eo qua trái rồi qua phải, giống như quả lắc đồng hồ. Thực hiện động tác lặp đi lặp lại nhiều lần, giữ tốc độ phù hợp với sức của mình. Duy trì từ 5-10 phút sau đó tạm nghỉ rồi tiếp tục luyện tập.</p>
                <div className="giua"><img className="imgsp" src={nt0103} /></div>
            </div>

            <div className="lienquan">
                <h2>Các Bài Viết Tin Tức Liên Quan</h2>
                <div className="container">
                    <div className="row">
                        <div className="card" data-aos="zoom-in" data-aos-delay="450">
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

                        <div className="card" data-aos="zoom-in" data-aos-delay="600">
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

                        <div className="card" data-aos="zoom-in" data-aos-delay="750">
                        <Link to="/tintuc/thietbitheducngoaitroilagi"> <img className="imgsp" src={tt5} />
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
            <Footer />
        </div>
    );
}

export default Tintuc1;
