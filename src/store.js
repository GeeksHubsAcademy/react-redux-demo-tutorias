import { createStore } from 'redux';


const initialState = {
    count: 5,

}

function reducer(state = initialState, action) {
    switch (action.type) {

        case 'INCREMENT':
            return {
                ...state,
               count: state.count + action.payload
            };

        case 'DECREMENT':
            // debugger;
            return {
                ...state,
                count: state.count - action.payload
            };
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}



export const store = createStore(reducer)