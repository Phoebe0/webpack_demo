// 传统开发的缺陷
// 1. 全局变量污染
// 2. 引入大量的模块，这些模块有先后顺序
// 3. 引入多个文件，网页加载速度慢

// 使用webpack进行优化
// 1. 在webpack中可以使用任意的模块化语法，浏览器端使用nodejs模块化 ES6模块化
import { qs, qsAll } from './utils.js'
import moment from 'moment'
// 2. 使用ES6模块引入css模块
import './css/index.css'
import './css/base.css'
import './less/aa.less'

import jpg from './images/1.jpg'
import './iconfont/iconfont.css'

// 实现隔行变色的效果
qsAll('ul li').forEach((item, index) => {
    if (index % 2 === 0) {
        item.style.color = 'red'
    } else {
        item.style.color = 'green'
    }
})

qs('.time').innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')

// 点击盒子 生成一张图片
let flag = false
qs('.box').addEventListener('click', function() {
    const img = document.createElement('img')
    img.src = jpg
    if (flag) return

    qs('.box').appendChild(img)

    flag = true
})