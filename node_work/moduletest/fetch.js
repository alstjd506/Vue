const axios = require('axios');
let url = 'http://localhost:3000/posts';


let data = {"id" : "4" , "title" : "update4"}
//fetch delete
//fetchDelete();
function fetchDelete(){
    fetch(url+"/1", { 
        method : 'delete'
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
//axios delete
//axiosDelete();
function axiosDelete(){
    axios.delete(url+"/3")
}

//fetch put
//fetchPut();
function fetchPut(){
    fetch(url+"/5", {
        method : 'put',
        headers : {"content-type" : "apllication/json : charset = UTF-8"},
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
//axios put
axiosPut();
function axiosPut(){
    axios.put(url+"/4",data)
}


//fetct post
// fetchPost(); //호이스팅(끌어올리기)
function fetchPost(){
    fetch(url, {
        method : 'post',
        headers : {"content-type" : "apllication/json : charset = UTF-8"},
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

//axios post
//axiosPost();
function axiosPost(){
    axios.post(url, data)
    .then(res => console.log(res.data))
}



//fetch get 
function fetchGet(){
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}

function axiosGet(){
    axios.get(url)
    .then(json => console.log(json.data))
}