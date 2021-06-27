import React, { useContext } from 'react';
import { isInCart } from '../../Helpers';
import { CartContext } from '../../context/CartContext';
import { withRouter } from 'react-router';
import './featuredproducts.styles.scss'

const FeaturedProduct = (props) => {

    const { title, imageURL, price, history, id, description } = props;
    const product = { title, imageURL, price, id, description };
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const itemInCart = isInCart(product, cartItems)


    return (
        <div className='fetured-product'>
            <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
                <img src={imageURL} alt='product' />
            </div>
            <div className='name-price'>
                <h3>{title}</h3>
                <h3>${price}</h3>
                {
                    !itemInCart &&
                    <button className='button is-black nomad-btn' onClick={() => addProduct(product)}>
                        ADD TO CART
                    </button>
                }

                {
                    itemInCart &&
                    <button
                        className='button is-white nomad-btn'
                        id='btn-white-outline'
                        onClick={() => increase(product)}>
                        ADD MORE
                    </button>
                }

            </div>
        </div>
    ); 
}

export default withRouter(FeaturedProduct);
