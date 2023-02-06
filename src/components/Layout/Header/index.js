import { faBell, faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.scss"

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = days[newDate.getDay()];
const dateString = `${day}, ${date}/${month}/${year}`
function Header() {

    return (
        <div className="header">
            <div className="header_top">
                <div className="header_img">
                    <Link to="/">
                        <img src="./img/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="header_date">
                    {
                        dateString
                    }
                </div>
                <div className="header_newest">
                    <FontAwesomeIcon icon={faClock} />
                    Mới nhất
                </div>
                <div className="header_location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Tìm theo khu vực
                    <div className="header_location-area">
                        <ul>
                            <li>Hà Nội</li>
                            <li>TP.Hồ Chí Minh</li>
                        </ul>

                    </div>
                </div>
                <div className="header_find">
                    <input type="text" placeholder="Tìm kiếm" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="header_account">
                    <FontAwesomeIcon icon={faUser} />
                    Đăng nhập
                </div>
                <div className="header_notify">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
            <div className="account">
                <div className="account_login">

                </div>
            </div>
        </div>
    )
}

export default Header