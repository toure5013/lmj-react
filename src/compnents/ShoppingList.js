import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { Button, Container, Row, Col } from "shards-react";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [selectCategory, updateSelectCategory] = useState("");

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <Container className="lmj-shopping-list">
      <Row>
        <Col md={9}>
          <Categories
            categories={categories}
            selectCategory={selectCategory}
            updateSelectCategory={updateSelectCategory}
          />
        </Col>
        <Col md={3}>
          <Button onClick={()=>updateSelectCategory("")}>
              Réinitialiser
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="mx-auto">
        <ul className="lmj-plant-list">
          {plantList.map(({ id, cover, name, water, light, price, category }) =>
            selectCategory === category || selectCategory === "" ? (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                />
                <Button onClick={() => addToCart(name, price)}>Ajouter</Button>
              </div>
            ) : null
          )}
        </ul>
        </Col>
      
      </Row>
    </Container>
  );
}

export default ShoppingList;
