import { createReducer } from "@reduxjs/toolkit";
import MAIN_ACTION_TYPES from "./action-types";
import initialState from "./state";


const mainReducer = createReducer(initialState, {
    [MAIN_ACTION_TYPES.ADD_CARD]: (state, action) => {
        return {
            ...state,
            cards: [...state.cards, action.payload]
        }
    },
    [MAIN_ACTION_TYPES.EDIT_CARD]: (state, action) => {
        return {
            ...state,
            cards: editCardHandler(state.cards, action.payload)
        }
    },
    [MAIN_ACTION_TYPES.DELETE_CARD]: (state, action) => {
        return {
            ...state,
            cards: deleteCardHandler(state.cards, action.payload.id)
        }
    },
    [MAIN_ACTION_TYPES.CURRENT_ELEMENT_ID]: (state, action) => {
        return {
            ...state,
            currentElementId: action.payload
        }
    }
})


const editCardHandler = (cards, card) => {
    return cards.map(item => ({ ...item, title: card.id === item.id ? card.title : item.title }))
}

const deleteCardHandler = (cards, cardId) => {
    return cards.filter(item => item.id != cardId)
}

export default mainReducer;