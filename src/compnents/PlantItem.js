import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { useState } from "react";

import {Modal, ModalHeader , ModalBody} from 'shards-react'

function PlantItem({ cover, name, water, light }) {
	const [modelIsOpen, setModelIsOpen] = useState(false)

	function toggleModal() {
	 setModelIsOpen(!modelIsOpen)
	}

	return (
		<li className='lmj-plant-item' onClick={toggleModal}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<Modal open={modelIsOpen} toggle={toggleModal}>
				<ModalHeader>Header</ModalHeader>
				<ModalBody>Vous voulez acheter 1 {name}? Très bon choix 🌱✨!</ModalBody>
			</Modal>
		</li>
	)
}

export default PlantItem

