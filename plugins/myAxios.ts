import axios, {AxiosInstance} from "axios";

const myAxios : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

myAxios.defaults.withCredentials = true;//配置为true，让axios默认每次发送请求时都携带上cookie

//滴定液鉴权的请求头
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//定义全局请求拦截器
myAxios.interceptors.request.use(function (config){
    //在放行请求前的处理

    return config;//放行请求
}, function (error) {
    //
    return Promise.reject(error);
})

//定义全局响应拦截器
myAxios.interceptors.response.use(function (response) {

    return response.data;//放行请求
}, function (error) {

    return Promise.reject(error);
})

export default myAxios;