
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
const getProductsBycatrgory=(category)=>axiosClient.get('/products?filters[categories][name][$in]='+category+"&populate=*").then(res=>{
    return res.data.data
})

const registerUser = (username,email,password)=>axiosClient.post('/auth/local/register',{
    username:username,
    email:email,
    password:password
});
const signIn = (email,password)=>axiosClient.post('/auth/local',{
    identifier:email,
    password:password
});
export default{
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsBycatrgory,
    registerUser,
    signIn
}