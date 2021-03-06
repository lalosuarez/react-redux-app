import FETCH_POSTS from '../Actions/Actions';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data }
        default:
            return state;
    }
}