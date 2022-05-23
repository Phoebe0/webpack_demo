// 获取单个元素
export const qs = (selector) => {
    return document.querySelector(selector)
}

// 获取多个元素
export const qsAll = (selector) => {
    return document.querySelectorAll(selector)
}