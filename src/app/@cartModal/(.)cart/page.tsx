
import CartCheckOut from '@/src/app/components/cart/checkOutCart';
import Modal from "@/src/app/components/modal";

// import { Modal } from './ssr';

export default function ModalCart() {
  const style = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 max-h-[90vh] overflow-hidden bg-lightColor rounded-lg shadow-xl overflow-y-auto'

  return (
    <Modal style={style}>
      <div className="p-6 h-full flex flex-col">
        {/* <CartCheckOut/> */}
        <h1>THIS IS A CART</h1>
      </div>
    </Modal>
  )
}
