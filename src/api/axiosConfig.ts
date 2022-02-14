const BASE_PREFIX = import.meta.env.VITE_API_BASEURL
export default {
    baseURL: `/${BASE_PREFIX}`,
    withCredentials: true,
    timeout: 1000 * 60,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json, text/plain, */*'
    }
}
