//接口统一管理
import requests from "./request";
//三级联动接口 GET api/product/getBaseCategoryList

export const reqCatgoryList  = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})
