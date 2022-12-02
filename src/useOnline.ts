import { useState, useEffect } from 'react'

export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const onOnline = () => setIsOnline(true)
        const onOffline = () => setIsOnline(false)
        window.addEventListener('online', onOnline)
        window.addEventListener('offline', onOffline)
        return () => {
            window.removeEventListener('online', onOnline)
            window.removeEventListener('offline', onOffline)
        }
    }, [])

    return isOnline
}

