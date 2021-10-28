import { helperTypes } from "./helperTypes";

const initialState = {
    selectedImagesCount : 0,
    onSuccess : () => {},
    onPost : () => {},
    onChangeSettings : () => {}
}

export const helperReducer = (state = initialState, action) => {
    switch(action.type) {
        case helperTypes.SET_SELECTED_IMAGES_STATE : return {...state,
            selectedImagesCount : action.payload.selectedImagesCount,
            onSuccess : action.payload.onSuccess
        }
        case helperTypes.SET_CREATE_POST : return {...state,
            onPost : action.payload
        }
        case helperTypes.SET_CHANGE_SETTINGS : return {...state,
            onChangeSettings : action.payload
        }
        case helperTypes.CLEAR_HELPER : return {...state,
            initialState
        }
        default : return {...state, state}
    }
}