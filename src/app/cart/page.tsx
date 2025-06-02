import CartCheckOut from '@/app/components/cart/checkOutCart';
import { cartItems } from '../hooks/localStorage';


export default function Cart() {

  // if (cartItems.length == 0) {
  //   return (
  //     <>
  //       <h1>Your cart is empty</h1>
  //       <h1>Feel free to check our products</h1>
  //     </>
  //   )
  // }
  return (
    <>
      <CartCheckOut/>
    </>
  )
}
