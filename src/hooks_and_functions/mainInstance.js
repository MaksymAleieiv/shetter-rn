import axios from 'axios';
import { store } from '../../store';
import { userActionCreators } from '../../store/reducers/user-reducer/userActionCreators';

const mainInstance = axios.create({
  baseURL : 'https://fierce-dusk-92502.herokuapp.com/'
})
const mainInstanceRetry = axios.create({
  baseURL : 'https://fierce-dusk-92502.herokuapp.com/'
})

mainInstance.interceptors.request.use(
  config => {
    const {access} = store.getState().user
    if(access) config.headers.Authorization = 'Bearer ' + access;
      return config;
  },
  error => {
      Promise.reject(error)
});

mainInstanceRetry.interceptors.request.use(
  config => {
    const {access} = store.getState().user
    if(access) config.headers.Authorization = 'Bearer ' + access;
      return config;
  },
  error => {
      Promise.reject(error)
});

mainInstance.interceptors.response.use((response) => {
  return response
}, error => {
  const {refresh} = store.getState().user
  if(refresh){
    const originalRequest = error.config;
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        return mainInstanceRetry.post('/token/refresh/',
          {
            'refresh' : refresh
          })
          .then(res => {
            if (res.status === 200) {
                let payload = JSON.parse(res.request.response).access 
                store.dispatch(userActionCreators.changeUserAuthAccess(payload))
                originalRequest.headers.Authorization = 'Bearer ' + JSON.parse(res.request.response).access
                return axios(originalRequest);
            }
          })
          .catch(res => {
            store.dispatch(userActionCreators.clearUserInfo())
          })
    }
  }
  return Promise.reject(error);
});

export default mainInstance
