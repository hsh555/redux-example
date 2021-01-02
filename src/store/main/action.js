import { createAction } from "@reduxjs/toolkit"
import MAIN_ACTION_TYPES from "./action-types"

const addNewCardAction = (payload) => {
    return {
        type: MAIN_ACTION_TYPES.ADD_CARD,
        payload
    }
}

const editCardAction = (payload) => {
    return {
        type: MAIN_ACTION_TYPES.EDIT_CARD,
        payload
    }
}

const deleteCardAction = (id) => {
    return {
        type: MAIN_ACTION_TYPES.DELETE_CARD,
        payload: {
            id
        }
    }
}

const currentElementIdAction = createAction(MAIN_ACTION_TYPES.CURRENT_ELEMENT_ID);


export { addNewCardAction, editCardAction, deleteCardAction, currentElementIdAction };