
function callAPI(){
    let post = await 
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(result => result.json())

   
    console.log(post.userId);
    console.log("fetch 호출");

}

