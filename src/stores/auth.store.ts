import { ObservableStore } from '@codewithdan/observable-store';
import {map, distinctUntilChanged} from 'rxjs/operators'

class AuthStore extends ObservableStore<StoreState> {

    public static ACTIONS = {
        LOGIN: 'AUTH_STORE:LOGIN',
        LOGOUT: 'AUTH_STORE:LOGOUT',
        INIT_STATE: 'INIT_STATE',
    }

    constructor() {
        super({ trackStateHistory: true });
        const initialState = this.getLocalStorageUserInfo()
        this.setState({ userInfo: initialState }, AuthStore.ACTIONS.INIT_STATE)
    }

    saveUserInfo = (userInfo: ILoginInfo) => {
        localStorage['user_info'] = JSON.stringify(userInfo)
        localStorage['access_token'] = userInfo.access_token
        this.setState({ userInfo }, AuthStore.ACTIONS.LOGIN)
    }

    logout = () => {
        localStorage['user_info'] = ''
        localStorage['access_token'] = ''
        this.setState({ userInfo: {} }, AuthStore.ACTIONS.LOGOUT)

    }

    //get saved auth info from local storage
    getLocalStorageUserInfo = (): ILoginInfo => {
        let userInfoString = localStorage['user_info']
        let initialState: ILoginInfo = {
            access_token: '',
            expires_in: 0,
            token_type: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            is_candidate: false,
            is_admin: false,
            is_technicien: false,
            is_publique: false,
            is_contact: false,
        }
        if (userInfoString && Boolean(userInfoString) && localStorage['user_info'] !== '') {
            initialState = JSON.parse(userInfoString);
        }
        return initialState;
    }

    get userInfo$(){
        return this.stateChanged.pipe(
            map(({userInfo}) => userInfo),
            distinctUntilChanged(),
        )
    }


}

export default new AuthStore()

export interface ILoginInfo {
    access_token: string
    expires_in: number
    token_type: string
    username: string
    firstName: string
    lastName: string
    email: string
    is_candidate: boolean
    is_admin: boolean
    is_technicien: boolean
    is_publique: boolean
    is_contact: boolean;
    roles?: string[]
}

export interface StoreState {
    userInfo: ILoginInfo | null | {},
}