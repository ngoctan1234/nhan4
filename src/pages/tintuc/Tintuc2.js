import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./tintuc2.css";
import { Link } from 'react-router-dom';

import tt2 from '../../img/tintuc2.jpg'
import tt3 from '../../img/tintuc3.jpg'
import tt4 from '../../img/tintuc4.jpg'
import tt5 from '../../img/tintuc5.jpg'

import nt0118 from '../../img/nt01/nt01-dbtk.jpg'
import nt0101 from '../../img/nt01/nt01-dblt.jpg'
import nt0109 from '../../img/nt01/nt01-xd.jpg'
import nt0116 from '../../img/nt01/nt01-tvd.jpg'
import nt0103 from '../../img/nt01/nt01-le.jpg'
import nt0117 from '../../img/nt01/nt01-lb.jpg'
import nt0113 from '../../img/nt01/nt01-xe.jpg'
import nt0112 from '../../img/nt01/nt01-dc.jpg'
import nt0126 from '../../img/nt01/nt01-xk.jpg'

const Tintuc2 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="tintuc2">
            <Header />
            <div className="main_tt2">
                <h2>Top Những Máy Tập Công Viên Được Ưa Chuộng Nhất Hiện Nay</h2>
                <div className="ic">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <p className="ngaydang">Ngày đăng: 07/06/2024 11:30 AM</p>
                <p>- NT sport là một trong những đơn vị tiên phong trong lĩnh vực sản xuất và thi công lắp đặt thiết bị thể dục công viên tại Việt Nam. Tất cả các thiết bị công viên đều được sản xuất bằng thép mạ kẽm trụ chính dày 4mm và trụ phụ 3mm, Sơn tĩnh điện nhiều màu theo yêu cầu của Quý Khách Hàng. </p>
                <p>- Dưới đây là top nhưng máy tập được ưa chuộng và được lắp đặt nhiều nhất hiện nay:</p>
                <h5>1/. Thiết Bị Đi Bộ Trên Không</h5>
                <div className="giua"><img className="imgsp" src={nt0118} /></div>
                <p>- Máy đi bộ trên không hỗ trợ tập luyện cơ chân, cơ mông, cơ đùi hiệu quả.</p>

                <h5>2/. Thiết Bị Đi Bộ Lắc Tay</h5>
                <div className="giua"><img className="imgsp" src={nt0101} /></div>
                <p>- Máy đi bộ lắc tay ngoài trời là dòng thiết bị tập chuyên sâu rèn luyện sức mạnh của tay/chân và các khớp hông/ khớp gối, tăng cường độ dẻo dai của các nhóm cơ bắp và lưu thông khí huyết.</p>

                <h5>3/. Thiết Bị Đạp Xe</h5>
                <div className="giua"><img className="imgsp" src={nt0109} /></div>
                <p>- Xe đạp ngoài trời thuộc về nhóm dụng cụ tập chân. Thiết bị có cấu tạo tương tự như một chiếc xe đạp bình thường nhưng được cố định để đạp tại chỗ. Các bài tập với xe đap giúp đôi chân khỏe mạnh và linh hoạt hơn.</p>

                <h5>4/. Thiết Bị Tay Vai Đôi</h5>
                <div className="giua"><img className="imgsp" src={nt0116} /></div>
                <p>- Máy tập tay vai hỗ trợ tập luyện cơ tay và vai, vận động tốt cho xương và khớp.</p>

                <h5>5/. Thiết Bị Lưng Eo</h5>
                <div className="giua"><img className="imgsp" src={nt0103} /></div>
                <p>- Máy tập lưng eo ngoài trời là dụng cụ thuộc nhóm tập hông eo. Cung cấp các bài tập cho vùng khớp hông, giảm mỡ eo, làm săn chắc cơ hông và cơ bụng. giúp khí huyết lưu thông.</p>

                <h5>6/. Thiết Bị Lưng Bụng</h5>
                <div className="giua"><img className="imgsp" src={nt0117} /></div>
                <p>- Máy tập lưng bụng ngoài trời là dụng cụ thuộc nhóm tập hông eo. Cung cấp các bài tập cho vùng bụng, giảm mỡ eo, làm săn chắc cơ bụng.</p>

                <h5>7/. Thiết Bị Xoay Eo</h5>
                <div className="giua"><img className="imgsp" src={nt0113} /></div>
                <p>- Máy tập xoay eo ngoài trời giúp đốt cháy mỡ thừa ở vùng bụng của người tập, từ đó giúp vòng eo trở nên thon gọn và săn chắc nhanh chóng. </p>

                <h5>8/. Thiết Bị Đạp Chân</h5>
                <div className="giua"><img className="imgsp" src={nt0112} /></div>
                <p>- Máy đạp chân hỗ trợ tập luyện cơ chân, cơ mông, cơ đùi hiệu quả.</p>

                <h5>9/. Thiết Bị Xà Kép</h5>
                <div className="giua"><img className="imgsp" src={nt0126} /></div>
                <p>- Máy xà kép hỗ trợ tập luyện cơ tay, cơ bụng và làm săn chắc cơ bắp.</p>
            </div>

            <div className="lienquan">
                <h2>Các Bài Viết Tin Tức Liên Quan</h2>
                <div className="container">
                    <div className="row">
                        <div className="card" data-aos="zoom-in" data-aos-delay="450">
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

export default Tintuc2;
