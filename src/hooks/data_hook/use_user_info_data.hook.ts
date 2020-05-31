import { useState, useEffect } from 'react'
import { Subject } from 'rxjs'
import { AuthStore } from 'stores'
import { takeUntil } from 'rxjs/operators'

export function useUserInfoData(){
    const [userInfo, setUserInfo] = useState<any>()
    const trigger = new Subject<boolean>()
    const { userInfo$ } = AuthStore
    useEffect(() => {
        userInfo$.pipe(
            takeUntil(trigger.asObservable())
        ).subscribe({
            next: setUserInfo
        })

        return () => trigger.next(false)
    }, [userInfo$,trigger])

    return { userInfo }
}