/* eslint-disable */
/**
 * 请求装饰器可以在挂载到接口
 */
import { ElMessageBox } from 'element-plus'
/**
 * @description 请求loading
 * @param {object} option
 */
// export const withLoading = (option = {
//   message: '加载中...',
//   isTransparent: false
// }) => {
//   return function (target: any, name: any, descriptor: any) {
//     const originFunc = descriptor.value
//     const Ins = new Loading(option.message, option.isTransparent)
//     descriptor.value = async function (...args) {
//         Ins.open()
//       let res
//       try {
//         res = await originFunc.apply(this, args)
//       } catch (e) {
//         res = Promise.reject(e)
//       }
//       Ins.close()
//       return res
//     }
//   }
// }

// /**
//  * 防抖
//  * @param {*} option
//  * @returns
//  */
// export const debounceApi = (timeout = 3000) => {
//     return async function(target, name, descriptor) {
//         const oldValue = descriptor.value;
//         // 初始timerID
//         let timer = null;
//         // 覆盖被装饰的方法
//         descriptor.value = function () {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 oldValue.apply(this, arguments)
//             }, timeout);
//         };
//         return descriptor;
//     }
// }

/**
 * @description 增加接口确认弹窗
 */
export const withConfirm = (
    option = {
        message: '确认？'
    }
) => {
    return function (target: any, name: any, descriptor: any) {
        const originFunc = descriptor.value
        descriptor.value = async function (...args: any) {
            let res
            const confirm: any = await ElMessageBox.confirm(option.message, '温馨提示')
                .then(async () => {
                    try {
                        res = await originFunc.apply(this, args)
                    } catch (e) {
                        res = Promise.reject(e)
                    }
                    return res
                })
                .catch(() => {
                    return
                })
            if (confirm) {
                return confirm
            } else {
                return Promise.reject()
            }
        }
    }
}
