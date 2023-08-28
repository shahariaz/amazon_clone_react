import "./Product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/71eDIz87SwL._AC_SL1500_.jpg"
        alt=""
      />
      <button>Add to bucket</button>
    </div>
  );
};

export default Product;
