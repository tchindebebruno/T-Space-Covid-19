import { useState, useEffect } from 'react'
import { Subject } from 'rxjs'
import { AppStore } from 'stores'
import { takeUntil } from 'rxjs/operators'

export function useLanguageData(){
    const [language, setLanguage] = useState<string>('en')
    const trigger = new Subject<boolean>()
    const { language$ } = AppStore
    useEffect(() => {
        language$.pipe(
            takeUntil(trigger.asObservable())
        ).subscribe({
            next: setLanguage
        })
        return () => trigger.next(false)
    }, [language$, trigger]);
    return { language }
}