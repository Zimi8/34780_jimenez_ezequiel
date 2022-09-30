import cart from './img/cartpeneg.png'
import './CartWidget.css'

const CartWidgets = () => {
    return (
        <div className='carritoEstilo'>
        <img className= 'imgCartito marginCartito' src={cart} alt='cart'/> <span className='margenesCartito'>1</span>
        </div>
    )
}

export default CartWidgets