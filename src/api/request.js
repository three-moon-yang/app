//对 axios 进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
//1 利用一个axios 对象的create 创建一个 axios 实例
const  requests = axios.create({
    //配置对象
    baseURL:'/api',
    //请求的超时时间
    timeout:5000
})
//请求拦截器：在发送请求之前请求拦截器可以检测到 可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config是一个配置对象 有个属性 header 很重要
    nProgress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //服务器成功的回调函数
    nProgress.done();
    return res.data;
},(error)=>{
    //服务器失败的回调函数
    return Promise.reject(new Error('faile'));
})

//对外暴漏
export default requests;