import CartCheckOut from '@/app/components/cart/checkOutCart';
import Modal from "@/app/components/modal";
import { cartItems } from '@/app/hooks/localStorage';



export default function ModalCart() {
  const style = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6 bg-lightColor'
  // if (cartItems.length == 0) {
  //   return (
  //     <Modal style={style}>
  //       <h1>Your cart is empty</h1>
  //       <h1>Feel free to check our products</h1>
  //     </Modal>
  //   )
  // }
  return (
    <Modal style={style}>
      <CartCheckOut/>
    </Modal>
  )
}
