import { userActionTypes } from'./userActionTypes'
import mainInstance from '../../../src/hooks_and_functions/mainInstance'
export const userActionCreators = {
    changeUserInfo : (payload) => ({type: userActionTypes.CHANGE_USER_INFO, payload}),
    clearUserInfo : () => ({type: userActionTypes.CLEAR_USER_INFO}),
    changeUserAuthAccess : (payload) => ({type: userActionTypes.CHANGE_USER_AUTH_ACCESS, payload}),
    changeUserAuthRefresh : (payload) => ({type: userActionTypes.CHANGE_USER_AUTH_REFRESH, payload}),
    getMe : () => async (dispatch) => {
        try{
            let user = await mainInstance.get('/auth/users/me');
            dispatch( userActionCreators.changeUserInfo(user.data) )
        }
        catch{
            dispatch( userActionCreators.clearUserInfo() )
        }
    }
}