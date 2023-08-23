const request = new XMLHttpRequest()
request.onreadystatechange = function(){
    if(request.status===200 && request.readyState == 4){
        const response = this.responseText
        response.forEach((review))
    }
}
request.open("GET","https://jsonplaceholder.typicode.com/comments")
request.send()

const content = document.getElementById("content")




