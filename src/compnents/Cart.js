import { Button, ListGroup, ListGroupItem  } from "shards-react";
import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)


  useEffect(() => {
    //alert(`J'aurai ${total}€ à payer 💸`)
    document.title = `LMJ: ${total}€ d'achats`  
  }, [total])


  useEffect(() => {
     localStorage.setItem('cart', JSON.stringify(cart)) 
  }, [cart])

	return isOpen ? (
		<div className='lmj-cart'>
			<Button
				className='lmj-cart-toggle-button border-danger bg-danger'
				onClick={() => setIsOpen(false)}
			>
				X
			</Button>
			{cart.length > 0 ? (
				<div>
					<h2 className="">Panier</h2>
					<ListGroup>
						{cart.map(({ name, price, amount }, index) => (
                <ListGroupItem key={`${name}-${index}`} className="bg-success">{name} {price} € x {amount}</ListGroupItem>
						))}
					</ListGroup>
					<h3>Total :{total}€</h3>
					<Button onClick={() => updateCart([])}>Vider le panier</Button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<Button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</Button>
		</div>
	)
}

export default Cart