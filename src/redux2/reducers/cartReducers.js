import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState={
    cart:[],
    products:[
        {name:'lenovo',id:1},
        {name:'asus',id:2},
        {name:'dell',id:3},
        {name:'hp',id:4}
    ]
};

 const cartReducers=(state=initialState,action)=>{ //state=initialState -this is how we set defaults

    switch(action.type){

        case ADD_TO_CART:
            // console.log(action);
            const newItem={
                productId: action.id,
                name:action.name,
                cartId: state.cart.length+1
            }
            return{...state,
                   cart:[...state.cart,newItem]
            };

        case REMOVE_FROM_CART:
            return{...state,
                cart: [state.cart.filter(item => item.cardId !== action.id)]
            };

             default:
             return state;
    }
}

export default cartReducers;
//combinedReducers is used to combine two or more reducers in advanced cases
//see the di=ocumentation in https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers