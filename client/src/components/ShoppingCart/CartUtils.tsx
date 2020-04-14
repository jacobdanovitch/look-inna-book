import { TBookProps } from '../../types';

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]')

export const updateCart = (item: TBookProps) => {
    let cart = getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (item: TBookProps) => {
    let cart = getCart().filter((x: TBookProps) => x.asin !== item.asin);
    localStorage.setItem('cart', JSON.stringify(cart));
}