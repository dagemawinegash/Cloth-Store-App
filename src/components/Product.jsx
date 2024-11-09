import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Product = () => {
  const productState = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (productState.loading) {
    return <div>Loading...</div>;
  }

  if (productState.error) {
    return <div>Error: {productState.error}</div>;
  }

  const productCards = productState.products.map((product) => (
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{productCards}</div>
    </div>
  );
};

export default Product;
