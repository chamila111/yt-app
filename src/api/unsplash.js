import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID EJ1L_3NBIqI7js-aulacfxUzLLVqW-p6FRa4l2j2TDc'
    }  
})

