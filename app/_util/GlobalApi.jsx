
const {default: axios} = require("axios");
const axiosClient = axios.create({
    baseURL:'https://online-grocery-store-strapi-cms.onrender.com/api'
})


const getCategory=()=>axiosClient.get('/categories?populate=*');

const getSliders=()=>axiosClient.get('/sliders?populate=*').then(res=>{
    return res.data.data
})

const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(res=>{
    return res.data.data
})
const getAllProducts=()=>axiosClient.get('/products?populate=*').then(res=>{
    return res.data.data
})

export default{
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts
}