import BaseService from './BaseService'
import {authUrls} from './urls'

class AuthService {
    static login = (info) => BaseService.postRequest(authUrls.LOGINUSER, info, false);
    // static signUp = (info) => BaseService.postRequest(authUrls.SIGNUP, info, false);
}

export default AuthService;