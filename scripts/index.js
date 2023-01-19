let main_section = document.querySelector(".right-div")


let url = "https://astel-api.vercel.app/alldata?_limit=100&page=1"
function fetchData(){
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    displayData(data)
})
}



function displayData(data){
// main_section.innerHTML= ""

data.forEach(ele => {
let div = document.createElement("div")
div.setAttribute("class","inner-div")

let divImg = document.createElement("div")
divImg.setAttribute("class","inner-div-img")
let img = document.createElement("img")
img.setAttribute("src",ele.image)


let title = document.createElement("p")
title.innerText = `${ele.name.substring(0,15)}...`;
title.setAttribute("class","title")

let price = document.createElement("p")
price.innerText = `₹${ele.price}`
price.setAttribute("class","price")

let span = document.createElement("span")
span.innerHTML = document.createElement("p")
span.innerText = "onwards"
span.setAttribute("class","span")

price.append(span)

let Free = document.createElement("div")
Free.innerText = "Free Delivery"
Free.setAttribute("class","free")

let div2 = document.createElement("div")
div2.setAttribute("class","div2")

let rating = document.createElement("div")
rating.innerText = ele.rating+' ★'
rating.setAttribute("class","rating")

let reviews = document.createElement("p")
reviews.innerText = `${ele.review}`
reviews.setAttribute("class","review")

div2.append(rating,reviews)
divImg.append(img)
div.append(divImg,title,price,Free,div2)

main_section.append(div)

});


}


window.addEventListener("load",()=>{
    fetchData()
})