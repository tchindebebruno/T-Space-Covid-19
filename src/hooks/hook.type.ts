export interface IUseFetchOptions {
    //should dispatch notification action for any success notification
    dispatchNotificationOnSuccess?: boolean;

    //should dispatch notification action for any error notification
    dispatchNotificationOnError?: boolean;

    //should fire main action on mount( that is, in useEffect)
    fireOnMount?: boolean,
}