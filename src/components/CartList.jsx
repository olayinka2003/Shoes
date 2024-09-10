import { Cart } from "./Cart"


export const CartList = ({cartItems, onRemove}) => {
  return (
    <div>
    <h2 className="dark:text-white text-4xl font-bold mb-5">Cart</h2>
    <ul className="space-y-5">
        {cartItems.map(cartitem=> <li key={cartitem.product.id}><Cart item={cartitem} onRemove={onRemove}/></li>)}
    </ul>
    </div>
  )
}
