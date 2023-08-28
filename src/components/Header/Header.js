import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header_search">
        <input className="header_searchIn" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne"> Hello</span>
          <span className="header_optionLinetwo"> Sing in </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLinetwo">& Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLinetwo"> Prime </span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLinetwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
