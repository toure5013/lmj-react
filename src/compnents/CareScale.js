import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import { useState } from "react";

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function toggleModal() {
    console.log("toggleModal");
    setModelIsOpen(!modelIsOpen);
  }

  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div>
      <div onClick={() => toggleModal()}>
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span>
          ) : null
        )}
      </div>

	  <Modal open={modelIsOpen} toggle={toggleModal}>
		<ModalHeader>Info</ModalHeader>
		<ModalBody>Cette plante requiert  {quantityLabel[scaleValue]}   { careType === "light" ? "de lumière" :  "d'arrosage"  } { careType === "light" ?  <img src={Sun} alt="sun-icon" />  :  <img src={Water} alt="water-icon" />  } </ModalBody>
	</Modal>
    </div>
  );
}

export default CareScale;
