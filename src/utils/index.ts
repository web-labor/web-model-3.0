/**
 * 获取url上的参数
 * @param key 键值
 * @param url url
 */
export const getUrlParams = (keyStr: string): string => {
    const url = window.location.href
    const reg = /[[\]]/g
    const key = keyStr.replace(reg, '\\$&')
    const regex = new RegExp(`[?&]${key}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(url)
    if (!results) return ''
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const test = (): number => {
    return 1
}
