import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBell, faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss"

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = days[newDate.getDay()];
const dateString = `${day}, ${date}/${month}/${year}`
const navBar = ["Trang chủ", "Video", "Thời sự", "Góc nhìn", "Thế giới", "Kinh doanh", "Khoa học", "Giải trí"]
function Header() {
    const [activeLogin, setActiveLogin] = useState(true)
    const [showLogin, setShowLogin] = useState(false)

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
                <div className="header_account" onClick={() => { setShowLogin(true) }}>
                    <FontAwesomeIcon icon={faUser} />
                    Đăng nhập
                </div>
                <div className="header_notify">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
            <div style={showLogin ? { display: "block" } : { display: "none" }} className="header_wrapper">
                <div style={activeLogin ? undefined : { display: "none" }} className="login">
                    <div className="login_overlay" onClick={() => setShowLogin(false)} ></div>
                    <div className="login_container">
                        <div className="login_title">
                            <div onClick={() => { setActiveLogin(true) }} style={activeLogin ? { borderBottom: "3px solid var(--primary-color)" } : undefined}>Đăng nhập</div>
                            <div onClick={() => { setActiveLogin(false) }} style={activeLogin ? undefined : { borderBottom: "3px solid var(--primary-color)" }} >Đăng ký</div>
                        </div>
                        <div className="login_content">
                            <div className="login_input">
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <button>Đăng nhập</button>
                                <span>Lấy lại mật khẩu</span>
                            </div>
                            <div className="login_type">
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span>Facebook</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faGoogle} />
                                    <span>Google</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faApple} />
                                    <span>Apple</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={activeLogin ? { display: "none" } : undefined} className="register">
                    <div className="register_overlay" onClick={() => { setShowLogin(false) }}></div>
                    <div className="register_container">
                        <div className="register_title">
                            <div onClick={() => { setActiveLogin(true) }} style={activeLogin ? { borderBottom: "3px solid var(--primary-color)" } : undefined}>Đăng nhập</div>
                            <div onClick={() => { setActiveLogin(false) }} style={activeLogin ? undefined : { borderBottom: "3px solid var(--primary-color)" }} >Đăng ký</div>
                        </div>
                        <div className="register_content">
                            <div className="register_input">
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Tạo mật khẩu" />
                                <button>Tạo tài khoản</button>
                                <span>Khi bấm tạo tài khoản bạn đã đồng ý với quy định của tòa soạn</span>
                            </div>
                            <div className="register_type">
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span>Facebook</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faGoogle} />
                                    <span>Google</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faApple} />
                                    <span>Apple</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_navbar">
                <ul className="nav_list">
                    {navBar.map((navItem, index) => {
                        return (
                            <NavLink to="/" className="nav_item" key={index}> {navItem}</NavLink>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}

export default Header