import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss"
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
function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    return (<div className="home_infomation">

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



    </div>)
}
export default Banner