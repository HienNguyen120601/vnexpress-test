import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss"

const infomation = [
    {
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/07/Image-653225652-ExtractWord-0-4098-7749-1675754966.png?w=300&h=180&q=100&dpr=1&fit=crop&s=hS3qCnauT3RGs6ZYO4-cog",
        description: "Khát khao xây dựng thương hiệu truyền thông của CEO MetaHub",
    },
    {
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/07/img-6427-1675741641-1283-1675741673.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=xMAKwfa6Avt23aprGrHtBQ",
        description: "Khách hàng 'săn' Jackpot hơn 85 tỷ bằng ngày sinh, con giáp",
    },
    {
        img: "https://i1-suckhoe.vnecdn.net/2023/02/06/hinh-03-1675650741-5529-1675650964.png?w=300&h=180&q=100&dpr=1&fit=crop&s=NZVVP9jk-6frYjbB13gA8Q",
        description: "Fucoidan từ rong nâu hỗ trợ bảo vệ sức khỏe, tăng cường miễn dịch",
    },
    {
        img: "https://i1-kinhdoanh.vnecdn.net/2022/07/01/image003-1656663151-8181-1656663197.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=wOE0Uw76GW9uJiTyqEpQmQ",
        description: "Doanh nghiệp Việt cung cấp sản phẩm mẹ và bé chính hãng",
    },
    {
        img: "https://i1-kinhdoanh.vnecdn.net/2023/02/05/picture12-1675561038-3790-1675561162.png?w=300&h=180&q=100&dpr=1&fit=crop&s=0AsKae79ExGEXX9O0lljNw",
        description: "Điểm nhấn tại lễ hội vàng"
    }
]
function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };
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
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/Caoconset-1675755541-9830-1675755905.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Nh2alnb4zz-MpA2CnxVb7A" alt="img" />
                    <span>Đàn cáo con phá hỏng chuyến đi săn của mẹ</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/Taucamap-1675763046-1420-1675763800.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=8dIPbNPuKpKPxmEjQZeTkw" alt="img" />
                    <span>'Tàu cá mập' tốc độ 89 km/h</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNEBuild-1675759100-7444-1675759214.png?w=380&h=228&q=100&dpr=1&fit=crop&s=6GCdVkjJlZ2VxA_MqRjVwA" alt="img" />
                    <span>Nhà chọc trời xây từng tầng từ trên xuống</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/cuasolong-1675742271-8820-1675742648.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=xcopISAhBtAR7kNrOtUgMg" alt="img" />
                    <span>Cửa sổ kiểm soát ánh sáng lấy cảm hứng từ da mực</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNETesla-1675744146-8228-1675744272.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=txko6ihZg10f2t9oFu5jAQ" alt="img" />
                    <span>Xe điện của Elon Musk sau 5 năm bay vào vũ trụ</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/mattrang2-1675738549-7306-1675738923.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eawSa_Hz5eTkeXh3CM-8TA" alt="img" />
                    <span>Trung Quốc thúc đẩy chương trình thám hiểm Mặt Trăng </span>
                </div>
                <div className="content_item">
                    <img src="https://i1-vnexpress.vnecdn.net/2023/02/07/VNECastle-1675735865-2528-1675736048.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=nt7wbF2u0V_4Ny1XFUSYZw" alt="img" />
                    <span>Những công trình lịch sử bị phá hủy trong động đất Thổ Nhĩ Kỳ</span>
                </div>
            </div>
            <ul style={{ marginTop: "50px" }} className="home_navlist">
                <li className="home_navitem">Số hóa</li>
                <li className="home_navitem">Công nghệ</li>
                <li className="home_navitem">Sản phẩm</li>
                <li className="home_navitem">Startup</li>
            </ul>
            <div className="home_content">
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/07/GG-2968-1675739784.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=n2bjbzNS0oBJ3zP-6SQiwg" alt="img" />
                    <span>Google ra chatbot AI cạnh tranh với ChatGPT</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-16-06-4523-2170-1675674551.png?w=380&h=228&q=100&dpr=1&fit=crop&s=rpX_wXM7IovKBTgiHleiAQ" alt="img" />
                    <span>Một ngày của Elon Musk diễn ra thế nào</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/1x-1-1675670086-5505-1675670354.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=0jc59DsN-tLJLBmrsT8hnw" alt="img" />
                    <span>Bán dẫn Trung Quốc đối mặt áp lực ngay đầu năm</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/07/phone-5139-1675743788.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=rxiLgKRxXQsDHm26PS3uCg" alt="img" />
                    <span>Giá iPhone tăng 66% kể từ 2009</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/DSC8699.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=oNizTIM62gbnbbsQUJdwrg" alt="img" />
                    <span>Mở hộp Galaxy S23 Ultra</span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/screenshot-2023-02-06-at-21-13-7161-1939-1675693127.png?w=120&h=72&q=100&dpr=1&fit=crop&s=-gTPw3T8h7mYFGgMrboB1w" alt="img" />
                    <span>Gần 7.000 nhân viên Dell mất việc
                    </span>
                </div>
                <div className="content_item">
                    <img src="https://i1-sohoa.vnecdn.net/2023/02/06/dehumidifier-vs-air-conditione-8928-1749-1675675927.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eQss7CEG8oe0wMQzvEBcKw" alt="img" />
                    <span>Tại sao có điều hòa vẫn nên mua máy hút ẩm</span>
                </div>
            </div>
            <div className="home_infomation">

                <div className="infomation_title">Thông tin doanh nghiệp</div>
                <div className="infomation_list">
                    <Slider {...settings} >
                        {
                            infomation.map((item, index) => {
                                return (<div key={index} className="infomation_item">
                                    <img src={item.img} alt="img" />
                                    <span>{item.description}</span>
                                </div>)
                            })
                        }
                    </Slider>


                </div>



            </div>

        </div>
    )
}
export default Home