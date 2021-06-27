import React, {useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import CartItems from './CartItems'
import Layout from '../../shared/Layout';
import Total from './Total';
import './cartpage.styles.scss'

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext)
    const funcs = { increase, decrease, removeProduct };
    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className="empty-cart">Your cart is empty</div> :
                    <>
                        <div className="cart-page">
                            <div className="cart-item-container">
                                {
                                    cartItems.map(item => <CartItems {...item} key={item.id} {...funcs} />)
                                }
                                </div>
                                <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                        </div>
                    </>
                }
            </>
        </Layout>
    );
}


export default CartPage;
