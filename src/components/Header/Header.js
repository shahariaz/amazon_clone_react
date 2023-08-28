import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header_search">
        <input className="header_serachIn" type="text" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne"> Hello</span>
          <span className="header_optionLineOne"> Sing in </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineOne">& Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLineOne"> Prime </span>
        </div>
        <div className="header_option"></div>
      </div>
    </div>
  );
};

export default Header;
