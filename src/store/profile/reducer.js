import PROFILE_ACTION_TYPES from "./action-types";
import initialState from "./state";

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

export default profileReducer;