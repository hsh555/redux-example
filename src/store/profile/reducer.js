import { createAction, createReducer, createStore } from "@reduxjs/toolkit";
// import { editCardAction } from "./action";
import PROFILE_ACTION_TYPES from "./action-types";
import actionTypes from "./action-types";
import initialState from "./state";

const profileAction = createAction("PROFILE_ACTION")

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION_TYPES.PROFILE_ACTION:
            return {
                ...state,
                profileName: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

// const appReducer = createReducer(initialState, {
//     [actionTypes.ADD_CARD]: (state, action) => {
//         return {
//             ...state,
//             cards: [...state.cards, action.payload]
//         }
//     },
//     [actionTypes.EDIT_CARD]: (state, action) => {
//         return {
//             ...state,
//             cards: editCardHandler(state.cards, action.payload)
//         }
//     },
//     [actionTypes.DELETE_CARD]: (state, action) => {
//         return {
//             ...state,
//             cards: deleteCardHandler(state.cards, action.payload.id)
//         }
//     }
// })


// const editCardHandler = (cards, card) => {
//     return cards.map(item => ({ ...item, title: card.id === item.id ? card.title : item.title }))
// }

// const deleteCardHandler = (cards, cardId) => {
//     cards = cards.filter(item => item.id != cardId)
//     return [...cards];
// }

export default profileReducer;