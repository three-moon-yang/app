//home模块的小仓库
import {reqCatgoryList} from "@/api"
const state =  {
    categoryList:[]

}
const mutations =  {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions =  {
    //通过api里面的接口函数 向服务器发请求 获取数据
    async categoryList({commit}){
        let result = await reqCatgoryList();
        console.log("result",result);
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    }
}
const getters =  {}

export default {
    state,
    mutations,
    actions,
    getters
}