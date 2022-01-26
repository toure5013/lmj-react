import { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import { LoginContext } from "../helpers/Context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, updateCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(() => {
    updateCart(
      JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Banner title="la maison jungle" />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Cart cart={cart} updateCart={updateCart} />
          </Col>
          <Col md={9}>
            <ShoppingList cart={cart} updateCart={updateCart} />
          </Col>
        </Row>
      </Container>
    </LoginContext.Provider>
  );
}

export default App;
