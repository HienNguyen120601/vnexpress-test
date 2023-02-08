
import "./Home.scss"
import Banner from "../../components/Layout/Banner";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="home">
            <h2 className="home_title">
                Khoa học - công nghệ
            </h2>
            <ul className="home_navlist">
                <li className="home_navitem">Khoa học</li>
                <li className="home_navitem">Ứng dụng</li>
                <li className="home_navitem">Phát minh</li>
                <li className="home_navitem">Thế giới tự nhiên</li>
            </ul>
            <div className="home_content">
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/Caoconset-1675755541-9830-1675755905.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Nh2alnb4zz-MpA2CnxVb7A" alt="img" />
                    <span>Đàn cáo con phá hỏng chuyến đi săn của mẹ</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/Taucamap-1675763046-1420-1675763800.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=8dIPbNPuKpKPxmEjQZeTkw" alt="img" />
                    <span>'Tàu cá mập' tốc độ 89 km/h</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNEBuild-1675759100-7444-1675759214.png?w=380&h=228&q=100&dpr=1&fit=crop&s=6GCdVkjJlZ2VxA_MqRjVwA" alt="img" />
                    <span>Nhà chọc trời xây từng tầng từ trên xuống</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/cuasolong-1675742271-8820-1675742648.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=xcopISAhBtAR7kNrOtUgMg" alt="img" />
                    <span>Cửa sổ kiểm soát ánh sáng lấy cảm hứng từ da mực</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNETesla-1675744146-8228-1675744272.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=txko6ihZg10f2t9oFu5jAQ" alt="img" />
                    <span>Xe điện của Elon Musk sau 5 năm bay vào vũ trụ</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/mattrang2-1675738549-7306-1675738923.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eawSa_Hz5eTkeXh3CM-8TA" alt="img" />
                    <span>Trung Quốc thúc đẩy chương trình thám hiểm Mặt Trăng </span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNECastle-1675735865-2528-1675736048.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=nt7wbF2u0V_4Ny1XFUSYZw" alt="img" />
                    <span>Những công trình lịch sử bị phá hủy trong động đất Thổ Nhĩ Kỳ</span>
                </Link>
            </div>
            <ul style={{ marginTop: "50px" }} className="home_navlist">
                <li className="home_navitem">Số hóa</li>
                <li className="home_navitem">Công nghệ</li>
                <li className="home_navitem">Sản phẩm</li>
                <li className="home_navitem">Startup</li>
            </ul>
            <div className="home_content">
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/07/GG-2968-1675739784.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=n2bjbzNS0oBJ3zP-6SQiwg" alt="img" />
                    <span>Google ra chatbot AI cạnh tranh với ChatGPT</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-16-06-4523-2170-1675674551.png?w=380&h=228&q=100&dpr=1&fit=crop&s=rpX_wXM7IovKBTgiHleiAQ" alt="img" />
                    <span>Một ngày của Elon Musk diễn ra thế nào</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/1x-1-1675670086-5505-1675670354.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=0jc59DsN-tLJLBmrsT8hnw" alt="img" />
                    <span>Bán dẫn Trung Quốc đối mặt áp lực ngay đầu năm</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/07/phone-5139-1675743788.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=rxiLgKRxXQsDHm26PS3uCg" alt="img" />
                    <span>Giá iPhone tăng 66% kể từ 2009</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/DSC8699.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=oNizTIM62gbnbbsQUJdwrg" alt="img" />
                    <span>Mở hộp Galaxy S23 Ultra</span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-21-13-7161-1939-1675693127.png?w=120&h=72&q=100&dpr=1&fit=crop&s=-gTPw3T8h7mYFGgMrboB1w" alt="img" />
                    <span>Gần 7.000 nhân viên Dell mất việc
                    </span>
                </Link>
                <Link to="/detail" className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/dehumidifier-vs-air-conditione-8928-1749-1675675927.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eQss7CEG8oe0wMQzvEBcKw" alt="img" />
                    <span>Tại sao có điều hòa vẫn nên mua máy hút ẩm</span>
                </Link>
            </div>
            <Banner />

        </div>
    )
}
export default Home