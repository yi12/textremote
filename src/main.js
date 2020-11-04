import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})



//axios框架的基本使用
// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res=>{
//   console.log(res);
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
//   //专门对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res =>{
//   console.log(res);
// })

//axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
//   params: {
//     type: 'pop',
//     page: 5
//   }
// })])
//   .then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   })

//axios.spread使用
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
//   params: {
//     type: 'pop',
//     page: 5
//   }
// })])
//   .then(axios.spread((res1,res2)=>{
//     console.log(res1);
//     console.log(res2);
//   }))
//
// //数据解构
// const {name,age} = obj ;
// const names = ['why','kobe','james']
// const [name1,name2,name3] = names;


//axios全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios.all([axios({
  //baseURL: 'http://123.207.32.32:8000',
  url: '/home/multidata'
  //timeout: '5000',
}),axios({
  //baseURL: 'http://123.207.32.32:8000',
  url: '/home/data?type=sell&page=1',
  //timeout: '5000',
  params: {
    type: 'pop',
    page: 5
  }
})])
  .then(axios.spread((res1,res2)=>{
    console.log(res1);
    console.log(res2);
  }))
