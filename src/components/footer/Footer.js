import React from 'react';
import img1 from "../../img/logoNT.jpg";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_left">
                        <img className="logo" src={img1} />
                        <ul>
                            <li>
                                <i class="fa-solid fa-arrow-right"></i>
                                <p>Sản xuất và thi công lắp đặt thiết bị công viên</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-arrow-right"></i>
                                <p>Chuyên cung cấp thiết bị trường mầm non</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-arrow-right"></i>
                                <p>Thiết kế và thi công khu vui chơi trẻ em trong nhà</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-arrow-right"></i>
                                <p>Thiết kế và thi công khu vui chơi trẻ em ngoài trời</p>
                            </li>
                        </ul>

                    </div>

                    <div className="footer_center">
                        <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                        <ul>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Hình Thức Thanh Toán</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Phương Thức Vận Chuyển</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Chính Sách Đổi Trả</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Chính Sách Bảo Hành</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Hỗ Trợ Khách Hàng 24/7</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-minus"></i>
                                <p>Hotline Chăm Sóc Khách Hàng 24/24</p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_right">
                        <h4>THÔNG TIN LIÊN HỆ</h4>
                        <ul>
                            <li>
                                <i class="fa-solid fa-address-card"></i>
                                <p>Địa chỉ: D8/26C Đường Nữ Dân Công, Xã Vĩnh Lộc A, Huyện Bình Chánh, TP.HCM</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone-volume"></i>
                                <p>Điện Thoại: 0942.771.229</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <p>Email: cty.ntsport@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer_bottom">
                    <p>Web Project by Hạnh Nhân</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
