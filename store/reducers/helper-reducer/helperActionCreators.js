import { helperTypes } from "./helperTypes"
export const createPostActionCreators = {
    setSelectedImagesState : (payload) => ({type : helperTypes.SET_SELECTED_IMAGES_STATE, payload}),
    setCreatePost : (payload) => ({type : helperTypes.SET_CREATE_POST, payload}),
    setChangeSettings : (payload) => ({type : helperTypes.SET_CHANGE_SETTINGS, payload}),
    setScrollToTopFeedRefs : (payload) => ({type : helperTypes.SET_FEED_REFS, payload}),
    clearHelper : () => ({type : helperTypes.CLEAR_HELPER})
}