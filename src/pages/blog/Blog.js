import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./blog.css";
import gt1 from '../../img/gioithieu1.jpg'
import gt2 from '../../img/gioithieu2.jpg'
import gt3 from '../../img/gioithieu3.jpg'
import { Link } from 'react-router-dom';

const Blog = () => {
    const handle_scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div>
            <Header />
            <div className="main_blog">
                <div className="banner">
                    <img className="side" src={gt1} />
                </div>

                <div className="gioithieu">
                    <h2>Giới Thiệu Về Chúng Tôi</h2>
                    <div className="ic">
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-genderless"></i>
                            <i class="fa-solid fa-minus"></i>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                    <h5>NT sport xin kính chào Quý Khách Hàng!</h5>
                    <p>- Cảm ơn Quý Khách Hàng đã quan tâm đến sản phẩm và dịch vụ của website: ntsport.com thuộc quyền sở hữu của Công Ty TNHH SX TM DV Minh Thiện.</p>
                    <p>- NT Sport với đội ngũ nhân viên nhiều năm kinh nghiệm chuyên sản xuất, gia công và lắp đặt thi công thiết bị thể dục công viên ngoài trời, các sản phẩm của NT Sport  đã có mặt trên phạm vi toàn quốc. Với phương châm Chất Lượng tạo nên Uy Tín, Chúng tôi luôn lấy sự Hài Lòng của Quý Khách Hàng làm động lực, Chúng tôi cam kết mang đến Quý Khách Hàng những sản phẩm chất lượng và giá thành hợp lý nhất.  </p>
                    <img className="side" src={gt2} />
                    <p>- Bên cạnh đó, với kinh nghiệm tích lũy nhiều năm và thấu hiểu nhu cầu khách hàng, chúng tôi cũng thiết kế những gói dịch vụ cơ bản phù hợp với điều kiện của từng nhóm khách hàng để Quý khách có thể nhanh chóng tham khảo và đưa ra lựa chọn chuẩn xác.</p>
                    <p>- Với đội ngũ nhân lực giàu kinh nghiệm và có mối liên hệ sâu rộng với nhiều khách hàng, chúng tôi tự tin có thể thấu hiểu được nhu cầu, điều kiện của Quý khách và đưa ra những tư vấn tận tâm, chuyên nghiệp nhất. Giúp Quý Khách Hàng tìm ra các thiết bị ưng ý và các giải pháp tốt nhất.</p>
                    <img className="side" src={gt3} />
                    <h5>Sản Phẩm và Dịch Vụ của NT sport</h5>
                    <p>- Sản xuất và thi công lắp đặt các loại thiết bị thể dục công viên: Thiết bị máy đôi có vách ngăn cao cấp, Thiết bị công viên trụ đơn, Máy tập công viên giá rẻ v.v...</p>
                    <p>- Cung cấp và thi công lắp đặt các loại thiết bị vui chơi mầm non</p>
                    <p>- Thiết kế và thi công lắp đặt khu vui chơi trẻ em trong nhà và ngoài trời</p>

                    <h2>Xin chân thành cảm ơn Quý Khách Hàng đã tin tưởng NT sport</h2>
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

export default Blog;
