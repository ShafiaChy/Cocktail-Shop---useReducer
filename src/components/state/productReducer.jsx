import { actionTypes } from "./actionTypes";

export const initialState={
    loading: false,
    products:[],
    error:false,
    carts:[]
};

export const productReducer = (state, action) =>{
    switch(action.type){
        case actionTypes.FETCHING_START:
            return{
                ...state,
                loading:true,
                error:false

            }
        case actionTypes.FETCHING_SUCCESS:
            return{
                ...state,
                loading:false,
                products: action.payload,
                error:false

            }
        case actionTypes.FETCHING_ERROR:
            return{
                ...state,
                loading:false,
                error:true

            }

        case actionTypes.ADD_TO_CART:
            return{
                ...state,
                carts:[...state.carts,action.payload ]

            }
        case actionTypes.REMOVE_ITEM:
            return{
                ...state,
                carts:[...state.carts.filter((cart)=>cart.idDrink!==action.payload.idDrink)]

            }
        default:
            return state;
    }
   

}