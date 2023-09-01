import "./CheckoutProduct.css";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img src="{image}" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"></p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating"></div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
