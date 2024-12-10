export default function isMobileDevice() {
    return (
        typeof window !== 'undefined' &&
        /mobi/i.test(window.navigator.userAgent)
    )
}
