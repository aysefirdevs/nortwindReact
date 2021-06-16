import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = { //cartItemsteki çubuk krakeri yazmak yerine obje oluşturup alıyoruz.
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {  //sepetin son halini tuttuğumuz yer. state başlangıç değeri(default değer). ikinci objemiz cartactionstan çağırılır.
    switch (type) {  // gelecek typea göre hareket ettiğimiz statement
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id) //şuanki statedeki cartITemleri bul 3 eşittir hem tip hem değer karşılaştırır.
            if (product) {
                product.quantity++;
                return {  //yeni obje oluşturarak içindeki elemanları ayırırız.
                    ...state //arrayi objeleştirdi ve objeleri ayırdı
                }
            } else {  //sepette daha önce ürün yoksa 
                return {  // cartItemsa 
                    ...state, //birden fazla değer varsa onları ayırır.
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,  //başka değerler olabilir diye tek üründe anlamsız
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)
            }

        default:
            return state;
    }

}