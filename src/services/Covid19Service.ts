import BaseService from './BaseService'
import {authUrls} from './urls'

class Covid19Service {
    static getSumarry = () => BaseService.getRequest(authUrls.SUMMARY, false);
    // static signUp = (info) => BaseService.postRequest(authUrls.SIGNUP, info, false);
}

export default Covid19Service;