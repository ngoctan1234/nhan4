import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import tt1 from '../../img/tintuc1.jpg'
import tt2 from '../../img/tintuc2.jpg'
import tt3 from '../../img/tintuc3.jpg'
import tt4 from '../../img/tintuc4.jpg'
import tt5 from '../../img/tintuc5.jpg'
import tt6 from '../../img/tintuc6.jpg'
import tt7 from '../../img/tintuc7.jpg'
import tt8 from '../../img/tintuc8.jpg'
import tt9 from '../../img/tintuc9.jpg'
import tt10 from '../../img/tintuc10.jpg'
import tt11 from '../../img/tintuc11.jpg'

import "./tintuc4.css";
import { Link } from 'react-router-dom';

const Tintuc4 = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="tintuc4">
            <Header />
            <div className="main_tt4">
                <h2>Thiết Bị Thể Dục Ngoài Trời Là Gì? Những Lưu Ý Gì Khi Tập?</h2>
                <div className="ic">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-genderless"></i>
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <p className="ngaydang">Ngày đăng: 15/06/2024 06:30 PM</p>
                <p>- Thiết bị thể dục thể thao ngoài trời đang rất được ưa chuộng hiện nay vì vừa có thể rèn luyện sức khỏe vừa tạo sự gắn kết giữa con người với nhau. Bạn biết gì về thiết bị luyện tập thể thao ngoài trời? Đâu là sự khác biệt giữa thiết bị luyện tập ngoài trời và trong nhà? Cùng NT sport tìm hiểu qua bài viết sau đây.</p>
                <div className="giua"><img className="imgsp" src={tt8} /></div><h4>Thiết bị thể dục thể thao ngoài trời là gì?</h4>
                <p>- Thiết bị thể dục thể thao ngoài trời là các dụng cụ giúp con người luyện tập và nâng cao sức khỏe. Những thiết bị này thường được lắp đặt ở những khu vực có dân cư đông đúc như: khu tập thể, chung cư, công viên, trường học,...</p>
                <h4>Điểm khác biệt giữa thiết bị thể thao ngoài trời và trong nhà</h4>
                <p>- Thiết bị thể thao ngoài trời có thiết kế gần giống với thiết bị dụng cụ trong nhà nhưng được sử dụng công nghệ sơn cao cấp, khung thép lớn để chống lại những điều kiện bất lợi của tự nhiên. Điểm khác nhau giữa hai thiết bị nằm ở hai yếu tố sau:</p>
                <div className="giua"><img className="imgsp" src={tt6} /></div>
                <h6>1/. Tính năng</h6>
                <p>- Điểm khác biệt lớn nhất giữa thiết bị thể thao ngoài trời và trong nhà là khả năng điều chỉnh. Thiết bị thể thao ngoài trời thường có khung xương to, chắc chắn, có khung máy cố định và không thể điều chỉnh cường độ luyện tập nặng nhẹ. Còn ở những thiết bị luyện tập trong nhà, người dùng có thể điều chỉnh máy để phù hợp với mục đích luyện tập nhằm cải thiện sức khỏe, vóc dáng.</p>
                <p>- Điểm khác biệt thứ hai là ở những thiết bị luyện tập thể thao ngoài trời sẽ được thiết kế tích hợp cho nhiều người sử dụng một lúc. Người dùng có thể luyện tập cùng gia đình, bạn bè vừa tận hưởng không khí ngoài trời. Điều này sẽ giúp tăng cảm giác phấn khích cho những người mới bắt đầu, đặc biệt phù hợp với những đối tượng không có chủ đích luyện tập. </p>
                <p>- Tập dụng không gian rộng rãi, thoáng đãng ngoài trời, các thiết bị này giúp người dùng tự do giải phóng cơ thể thông qua các bài luyện tập như: vươn vai, đá chân,... Những thiết bị này cũng có thể thay thế cho nhiều bài tập cardio có cường độ vừa phải.</p>
                <h6>2/. Thiết kế</h6>
                <p>- Đa số những thiết bị thể thao này được lắp đặt cố định ở ngoài trời nên cần sử dụng những vật liệu kiên cố và lớp sơn chất lượng để chống lại những điều kiện bất lợi bên ngoài. Thiết bị thể thao ngoài trời thường chỉ tập trung vào một mục tiêu luyện tập cụ thể và chú trọng tận hưởng không gian rộng rãi, thoáng đãng bên ngoài môi trường.</p>
                <p>- Mặc dù những thiết bị luyện tập ngoài trời không hiện đại như những thiết bị chuyên dụng nhưng chúng lại được phân ra nhiều loại khác nhau. Do vậy mà người dùng có thể lựa chọn thiết bị tùy vào mục đích sử dụng. Hơn thế, luyện tập ngoài trời còn là một cách cải thiện tinh thần và giảm stress hiệu quả.</p>
                <div className="giua"><img className="imgsp" src={tt7} /></div>
                <h4>Những lưu ý gì khi tập luyện với thiết bị thể thao ngoài trời</h4>
                <p>- Phải khởi động nhẹ nhàng trước khi tập với thiết bị thể thao ngoài trời, giúp khí huyết lưu thông hơn.</p>
                <p>- Chú ý đến cơ thể, tránh tình trạng sốc nhiệt khi tập luyện thể thao ngoài trời với thời tiết nắng nóng nhiệt độ cao trong thời gian dài. </p>
                <div className="giua"><img className="imgsp" src={tt9} /></div>
                <p>- Uống đủ nước trong quá trình tập luyện, giúp cơ thể không bị mất nước trong quá trình tập luyện.</p>
                <div className="giua"><img className="imgsp" src={tt10} /></div>
                <p>- Sau khi tập thể thao thì không nên tắm nước lanh ngay, bạn nên dùng khăn bông thấm mồ hôi và ngồi nghỉ khoảng 20 phút để nhiệt độ cơ thể ổn định hơn rồi mới vào phòng tắm.</p>
                <div className="giua"><img className="imgsp" src={tt11} /></div>

            </div>

            <div className="lienquan">
                <h2>Các Bài Viết Tin Tức Liên Quan</h2>
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
        </div>
    );
}

export default Tintuc4;
