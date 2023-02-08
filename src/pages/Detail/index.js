import { Fragment } from "react";
import { useParams } from "react-router";
import Banner from "../../components/Layout/Banner"
import "./Detail.scss"
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = days[newDate.getDay()];
const dateString = `${day}, ${date}/${month}/${year}`
const view = [
    {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/mayuidatlonnhatthegioi-1675756-5085-2696-1675756155.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=yvWQ2fyc_u0c7ByaTWJmZA",
        description: "Những cỗ máy ủi khổng lồ "
    },
    {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/06/VNETurbine-1675653269-7467-1675653314.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=kyunRZOxAsSWfB-PHt1sGA",
        description: "Trung Quốc xây trang trại điện gió turbine 16 MW"
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/VNECastle-1675735865-2528-1675736048.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=0zpQkaXV4c-sQ2KsUlDMYg",
        description: "Những công trình lịch sử bị phá hủy trong động đất Thổ Nhĩ Kỳ "
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/06/VNELab-1675661943-3614-1675662056.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=T8tqCQfRKuj883gLZxyjNA",
        description: "Phòng thí nghiệm 19 triệu USD có thể kiểm tra mọi thời tiết "
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/Caoconset-1675755541-9830-1675755905.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=ZRGIN3PpVbNfMAXjJJpeWQ",
        description: "Đàn cáo con phá hỏng chuyến đi săn của mẹ "
    },
]
const news = [
    {
        img: "https://i1-vnexpress.vnecdn.net/2022/12/26/seu-1672044405-7039-1672044624.jpg?w=180&h=108&q=100&dpr=1&fit=crop&s=4XtZk6w_cXyFttjLH5B4lQ",
        title: "Hàng nghìn sếu quý hiếm đổ về khu bảo tồn Vân Nam",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. "
    }
]

const tags = [
    {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/VNETesla-1675744146-8228-1675744272.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=-_plDbo3l6oz87aWAVPKKg",
        title: "Hàng nghìn sếu quý hiếm đổ về khu bảo tồn Vân Nam",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    },
    {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/mayuidatlonnhatthegioi-1675756-5085-2696-1675756155.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=yvWQ2fyc_u0c7ByaTWJmZA",
        title: "Những cỗ máy ủi khổng lồ",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/Caoconset-1675755541-9830-1675755905.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=ZRGIN3PpVbNfMAXjJJpeWQ",
        title: "Đàn cáo con phá hỏng chuyến đi săn của mẹ",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/Taucamap-1675763046-1420-1675763800.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=CaIqxRKeRFTV8fdKtuKNLA",
        title: "'Tàu cá mập' tốc độ 89 km/h'",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/VNEBuild-1675759100-7444-1675759214.png?w=300&h=180&q=100&dpr=1&fit=crop&s=kTrqLGDtiEgk--sy43Qheg",
        title: "'Tàu cá mập' tốc độ 89 km/h",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    }, {
        img: "https://i1-vnexpress.vnecdn.net/2023/02/07/VNETesla-1675744146-8228-1675744272.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=-_plDbo3l6oz87aWAVPKKg",
        title: "Cửa sổ kiểm soát ánh sáng lấy cảm hứng từ da mực",
        des: "Mùa đông năm nay, Khu bảo tồn Thiên nhiên Quốc gia Dashanbao ghi nhận số lượng sếu cổ đen di cư nhiều kỷ lục kể từ ngày thành lập. ",
        type: "Khoa học"
    },
]
const data = [
    {
        id: 0,
        title: "Đàn cáo con phá hỏng chuyến đi săn của mẹ",
        frame: "https://www.youtube.com/embed/BQed5b3W8x4"
    },
    {
        id: 1,
        title: "'Tàu cá mập' tốc độ 89 km/h'",
        frame: "https://www.youtube.com/embed/UraqDFtqGAg"
    },
    {
        id: 2,
        title: "Nhà chọc trời xây từng tầng từ trên xuống",
        frame: "https://www.youtube.com/embed/VTmFLAizRqk"

    },
    {
        id: 3,
        title: "Cửa sổ kiểm soát ánh sáng lấy cảm hứng từ da mực",
        frame: "https://www.youtube.com/embed/LH65D99XZvI"
    },
    {
        id: 4,
        title: "Xe điện của Elon Musk sau 5 năm bay vào vũ trụ",
        frame: "https://www.youtube.com/embed/JfkwM98h96k"
    },
    {
        id: 5,
        title: "Trung Quốc thúc đẩy chương trình thám hiểm Mặt Trăng",
        frame: "https://www.youtube.com/embed/_5oSoCvYwBA"
    },
    {
        id: 6,
        title: "Những công trình lịch sử bị phá hủy trong động đất",
        frame: "https://www.youtube.com/embed/LtZspcF6r0k"
    },
    {
        id: 7,
        title: "Google ra chatbot AI cạnh tranh với ChatGPT",
        frame: "https://www.youtube.com/embed/kmBypsgfqPw"
    },
    {
        id: 8,
        title: "Một ngày của Elon Musk diễn ra thế nào",
        frame: "https://www.youtube.com/embed/9YwmJ2naxQY"
    },
    {
        id: 9,
        title: "Bán dẫn Trung Quốc đối mặt áp lực ngay đầu năm",
        frame: "https://www.youtube.com/embed/BQed5b3W8x4"
    },
    {
        id: 10,
        title: "Giá iPhone tăng 66% kể từ 2009",
        frame: "https://www.youtube.com/embed/UraqDFtqGAg"
    },
    {
        id: 11,
        title: "Mở hộp Galaxy S23 Ultra",
        frame: "https://www.youtube.com/embed/VTmFLAizRqk"
    },
    {
        id: 12,
        title: "Gần 7.000 nhân viên Dell mất việc",
        frame: "https://www.youtube.com/embed/LH65D99XZvI"
    },
    {
        id: 13,
        title: "Tại sao có điều hòa vẫn nên mua máy hút ẩm",
        frame: "https://www.youtube.com/embed/JfkwM98h96k"
    },
]
function Detail() {
    const id = useParams()

    return (<div className="detail">
        <div className="detail_container">
            <div className="detail_content">
                <div className="content_header">Khoa học</div>
                <span className="content_date">{dateString}</span>
                <div className="content_title">{
                    data.map((item) => {

                        if (item.id + "" === id.id) {
                            console.log(id)
                            return (<Fragment>
                                <span>{item.title}</span>
                                <iframe width="660" height="415" src={item.frame} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            </Fragment>)
                        }

                    })
                }</div>
                <div className="detail_news">
                    {
                        news.map((item, index) => {
                            return (<div key={index} className="news_item">
                                <img src={item.img} alt="img" />
                                <span className="news_title">{item.title}</span>
                                <span className="news_des">{item.des}</span>

                            </div>)
                        })
                    }
                </div>
            </div>
            <div className="detail_view">
                <div className="view_title">Xem nhiều</div>
                <div className="view_list">
                    {
                        view.map((item, index) => {
                            return (<div key={index} className="view_item">
                                <img src={item.img} alt="img" />
                                <span>{item.description}</span>
                            </div>)
                        })
                    }
                </div>
            </div>

        </div>
        <div className="detail_tags">
            {
                tags.map((item, index) => {
                    return (<div key={index} className="tags_item">
                        <img src={item.img} alt="img" />
                        <span className="tags_title">{item.title}</span>
                        <span className="tags_des">{item.des}</span>
                        <span className="tags_type">{item.type}</span>
                    </div>)
                })
            }
        </div>
        <Banner />
    </div>)
}
export default Detail