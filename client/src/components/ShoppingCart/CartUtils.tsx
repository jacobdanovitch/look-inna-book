import { TBookProps, Final_Book } from '../../types';

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]')

export const updateCart = (item: Final_Book) => {
    let cart = getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (item: Final_Book) => {
    let cart = getCart().filter((x: Final_Book) => x.asin !== item.asin);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
}