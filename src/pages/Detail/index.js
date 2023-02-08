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
function Detail() {
    return (<div className="detail">
        <div className="detail_container">
            <div className="detail_content">
                <div className="content_header">Khoa học</div>
                <span className="content_date">{dateString}</span>
                <div className="content_title">Cháy kho phế liệu cột khỏi bốc cao hàng mét</div>
                <iframe width="660" height="415" src="https://www.youtube.com/embed/BuLjhM86w6A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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