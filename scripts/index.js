// sorting
let select=document.querySelector("#selectText");
let real=document.querySelector("#as_same");
let New=document.querySelector("#new");
let high=document.querySelector("#H_L");
let low=document.querySelector("#L_H");
let star=document.querySelector("#rat");
let per=document.querySelector("#percentage");



let main_section = document.querySelector(".right-div")
let global=[];



let url = "https://astel-api.vercel.app/alldata"

function fetchData(url){
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    global=data;
    console.log(global)
    displayData(global)
})
}



function displayData(data){
main_section.innerHTML= null

data.forEach((ele) => {
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
rating.innerText = ele.rating
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
    fetchData(url)
    // displayData();
})


high.addEventListener("click",function(){
     let sorting = global.sort((a,b)=>{
        return b.price - a.price;
     })
     console.log(sorting);
     displayData(sorting);
})

low.addEventListener("click",function(){
    let ltoh = global.sort((a,b)=>{
       return a.price - b.price;
    })
    console.log(ltoh);
    displayData(ltoh);
})

star.addEventListener("click",function(){
    let Rate = global.sort((a,b)=>{
        return b.rating - a.rating;
    })
    console.log(Rate);
    displayData(Rate);
})

let men = document.getElementById("menp");
men.addEventListener("click",()=>{
    fetchData("https://astel-api.vercel.app/men")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    global=data;
    //console.log(global)
    // displayData(global)
})
})

let women = document.getElementById("womenp");
women.addEventListener("click",()=>{
    fetchData("https://astel-api.vercel.app/women")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    global=data;
    //console.log(global)
    // displayData(global)
})
})

