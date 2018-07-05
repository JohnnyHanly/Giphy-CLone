const axios = require('axios');


const getTrending = (request, response) => {

    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=XiO5yLXHZWat8hCb1o8hqUfU17qMTVHE&tag=&rating=G&limit=40")
        .then((res) => {
            console.log(res.data)
            response.json({ message: res.data })
        })
}


getSearch = (request,response)=> {


let searchParam=(request.query.param1);

axios.get("https://api.giphy.com/v1/gifs/search?api_key=XiO5yLXHZWat8hCb1o8hqUfU17qMTVHE&q="+searchParam+"&limit=25&offset=0&rating=G&lang=en")
.then((res)=>{
    console.log(res.data)
    response.json({message:res.data})
})



}
module.exports = { getTrending, getSearch }