import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  if (products.length === 0) {
    return (
      <div>
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "20px" }} key={product.id}>
      <Card style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="secondary" onClick={() => removeFromCart(product)}>
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
