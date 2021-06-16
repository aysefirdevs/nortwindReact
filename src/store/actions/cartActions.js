export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    return {
        type : ADD_TO_CART,  // reducerlerin içinde de aynısını yazman gerek o yüzden yukarda tanımlıyoruz.
        payload : product     //aksiyonla beraber statei etkileyecek veri göndermen gerek
    }
}

export function removeFromCart(product){
    return {
        type : REMOVE_FROM_CART,  //gönderilen aksiyon
        payload : product     
    }
}