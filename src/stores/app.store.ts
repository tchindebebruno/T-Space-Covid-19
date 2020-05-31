import { ObservableStore } from '@codewithdan/observable-store';
import { map, distinctUntilChanged } from 'rxjs/operators'

class AppStore extends ObservableStore<StoreState> {

    public static ACTIONS = {
        SWITCH_LANGUAGE: 'APP_STORE:SWITCH_LANGUAGE',
        INIT_STATE: 'INIT_STATE',
    }

    constructor() {
        super({ trackStateHistory: true });
        this.setState({
            language: localStorage['language'] || 'en'
        }, AppStore.ACTIONS.INIT_STATE)
    }

    toggleLanguage = (language: 'en' | 'fr') => {
        localStorage['language'] = language
        this.setState({ language }, AppStore.ACTIONS.SWITCH_LANGUAGE)
    }


    get language$() {
        return this.stateChanged.pipe(
            map(({ language }) => language),
            distinctUntilChanged(),
        )
    }


}

export default new AppStore()


export interface StoreState {
    language: 'en' | 'fr',
}