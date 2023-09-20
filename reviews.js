console.log("in reviews.js"+sessionStorage.getItem("new rating"));

if(document.getElementById("content").innerHTML == null) {
    console.log("inside if");
    sessionStorage.setItem("overall rating", sessionStorage.getItem("new rating"));
}
else 
    sessionStorage.setItem("overall rating", (JSON.stringify(document.getElementById("content").innerHTML + sessionStorage.getItem("new rating"))).trim());

console.log("overall rating: "+sessionStorage.getItem("overall rating"));

const element = document.createElement("div");
element.appendChild(document.createTextNode(sessionStorage.getItem("overall rating")));

const overall = document.getElementById("content");
overall.appendChild(element);