export function isMobileDevice(): boolean {
    return (
        typeof window !== 'undefined' &&
        /mobi/i.test(window.navigator.userAgent)
    )
}
