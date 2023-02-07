import "./Footer.scss"
const footer0 = ["Trang chủ", "Video", "Podcasts", "Ảnh", "Infographics"]
const footer1 = ["Thời sự", "Góc nhìn", "Thế giới", "Kinh doanh", "Giải trí"]
const footer2 = ["Thể thao", "Pháp luật", "Giáo dục", "Sức khỏe", "Đời sống", "Du lịch"]
const footer3 = ["Khoa học", "Số hóa", "Xe", "Ý kiến", "Tâm sự", "Hài"]
function Footer() {

    return (
        <div className="footer">
            <div className="footer_content">
                <ul className="footer_list first_nav">
                    {
                        footer0.map((item, index) => {
                            return (<li key={index} className="footer_item">{item}</li>)
                        })
                    }
                </ul>
                <ul className="footer_list">
                    {
                        footer1.map((item, index) => {
                            return (<li key={index} className="footer_item">{item}</li>)
                        })
                    }
                </ul>
                <ul className="footer_list">
                    {
                        footer2.map((item, index) => {
                            return (<li key={index} className="footer_item">{item}</li>)
                        })
                    }
                </ul>
                <ul className="footer_list">
                    {
                        footer3.map((item, index) => {
                            return (<li key={index} className="footer_item">{item}</li>)
                        })
                    }
                </ul>
                <div className="footer_contact">
                    <div className="contact_title">Tải ứng dụng</div>
                    <button className="contact_button">
                        VnExpress
                    </button>
                    <div className="contact_email">
                        <div className="title">Liên hệ</div>
                        <span>Tòa soạn</span>
                        <span>Quảng cáo</span>
                    </div>

                    <div className="contact_hotline">
                        <div className="title">Đường dây nóng</div>
                        <b> 083.888.0123</b>
                        <div>(Ha Noi)</div>
                        <b> 083.888.0123</b>
                        <div>(Ho Chi Minh)</div>
                    </div>




                </div>

            </div>
        </div>
    )
}
export default Footer