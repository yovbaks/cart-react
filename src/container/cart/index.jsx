import CartInputForm from '../../components/CartInputForm'
import CartItemList from '../../components/CartItemList'
import Loader from '../../components/loader'
import TotalAmount from '../../components/TotalAmount'

const initialState = [
  {
    id: 'id-1',
    name: 'printer',
    price: 100,
    count: 2,
  },
  {
    id: 'id-2',
    name: 'Motherboard',
    price: 150,
    count: 1,
  },
  {
    id: 'id-3',
    name: 'RAM',
    price: 30,
    count: 1,
  },
  {
    id: 'id-4',
    name: 'Monitor',
    price: 220,
    count: 2,
  },
]

const Cart = () => {
  //logic here..............

  return (
    <div className="cart">
      <CartInputForm />
      <Loader />
      <CartItemList items={initialState} />
      <TotalAmount items={initialState} />
    </div>
  )
}

export default Cart
