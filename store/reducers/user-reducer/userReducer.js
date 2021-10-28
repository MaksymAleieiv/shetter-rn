import { userActionTypes } from'./userActionTypes'
const initialState = {
    userInfo: {
        id: -1,
        profile_photo: '',
        username: '',
        first_name: '',
        last_name: ''
    },
    refresh: '',
    access: '',
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActionTypes.CHANGE_USER_AUTH_ACCESS : return {...state,
            userInfo: state.userInfo,
            refresh : state.refresh,
            access : action.payload,
            isAuth: true
        }
        case userActionTypes.CHANGE_USER_AUTH_REFRESH : return {...state,
            userInfo: state.userInfo,
            refresh: action.payload,
            access: state.access,
            isAuth: true
        }
        case userActionTypes.CHANGE_USER_INFO : return {...state,
            userInfo : action.payload,
            refresh: state.refresh,
            access: state.access,
            isAuth: true
        }
        case userActionTypes.CLEAR_USER_INFO : return {...state,
            userInfo: initialState.userInfo,
            refresh: '',
            access: '',
            isAuth: false
        }
        default : return {...state, state}
    }
}