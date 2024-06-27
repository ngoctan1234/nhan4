import React, { useContext, useEffect, useState } from 'react';
import "./cart.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { CardText, Table } from 'reactstrap';
import { AppContext } from '../../AppContext';
import swal from 'sweetalert';
import { Link ,useNavigate  } from 'react-router-dom';
function Cart1() {
  const { cart, removeItem, changeQty,removeAll } = useContext(AppContext)
  const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
  const navigate = useNavigate();
  const [formLienhe, setFormLienhe] = useState({
    hoten: '',
    dienthoai: '',
    email: '',
    diachi: '',

  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormLienhe({
      ...formLienhe,
      [name]: value,
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Đã gửi from: ', formLienhe);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const handle_show=()=>{
    if(formLienhe.diachi && formLienhe.dienthoai &&formLienhe.email && formLienhe.hoten){
      swal("Đặt Hàng Thành Công", "Quý Khách vui lòng liên hệ 0942.771.229 để được nhận khuyến mãi và xử lý đơn hàng nhanh nhất nhé!", "success");
      removeAll();
      navigate("/");
    }
    else
    {
      swal("Vui Lòng Nhập Thông Tin","Quý Khách vui lòng nhập đầy đủ thông tin nhận hàng.", "info");
    }
  }
  return (
    <div>
      <Header />
      <div className="cart">
        <h2>Giỏ Hàng Của Bạn</h2>
        <div className="ic">
          <i class="fa-solid fa-minus"></i>
          <i class="fa-solid fa-minus"></i>
          <i class="fa-solid fa-genderless"></i>
          <i class="fa-solid fa-circle"></i>
          <i class="fa-solid fa-genderless"></i>
          <i class="fa-solid fa-minus"></i>
          <i class="fa-solid fa-minus"></i>
        </div>

        <div className="cart_tt">
          <div className="giohang col-sm-8">
            <Table>
              <thead>
                <tr>
                  <th>
                    STT
                  </th>
                  <th>
                    Tên SP
                  </th>
                  <th>
                    Đơn Giá
                  </th>
                  <th>
                    SL
                  </th>
                  <th>
                    Thành Tiền
                  </th>
                  <th>
                    Xóa
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  cart && cart.map((item, index) => (
                    <tr>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>
                        {item.tensp}
                      </td>
                      <td>
                        {item.gia}
                      </td>
                      <td className="sl">
                        <button className="sp" onClick={() => changeQty(item.id, -1)}>-</button>
                        {item.qty}
                        <button className="sp" onClick={() => changeQty(item.id, 1)}>+</button>
                      </td>
                      <td>
                        {item.qty * item.gia}
                      </td>
                      <td>
                        <button className="xoasp" onClick={() => removeItem(item.id)}>X</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </Table>
            <div className="tc">
              <h6>Tổng Cộng: {formatter.format(cart.reduce((sum, item) => item.qty * item.gia + sum, 0))} </h6>
            </div>
            <div className="muathem_sp">
              <Link to="/sanpham"><i class="fa-solid fa-arrow-left"></i>Tiếp Tục Mua Sắm</Link>
            </div>


          </div>

          <div className="thanhtoan col-sm-4">
            <h4>Nhập Thông Tin Của Bạn</h4>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="hoten">Họ và Tên:</label>
                <input
                  type="text"
                  className="form_control"
                  id="hoten"
                  name="hoten"
                  value={formLienhe.hoten}
                  onChange={handleChange}
                />
              </div>

              <div className="form_group">
                <label htmlFor="dienthoai">Điện Thoại:</label>
                <input
                  type="text"
                  className="form_control"
                  id="dienthoai"
                  name="dienthoai"
                  value={formLienhe.dienthoai}
                  onChange={handleChange}
                />
              </div>

              <div className="form_group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form_control"
                  id="email"
                  name="email"
                  value={formLienhe.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form_group">
                <label htmlFor="diachi">Địa Chỉ Nhận Hàng:</label>
                <input
                  type="text"
                  className="form_control"
                  id="diachi"
                  name="diachi"
                  value={formLienhe.diachi}
                  onChange={handleChange}
                />
              </div>

              {/* <button type="submit" className="btn">Đặt Hàng</button> */}

              <button type="submit" className="btn" onClick={handle_show}>Đặt Hàng</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart1;
