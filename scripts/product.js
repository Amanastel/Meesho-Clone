// let main_section = document.querySelector("#bottom")
// let global = [];
// let btn = document.getElementById("btnB")



// let addToCart = document.getElementById("cartBtn");
// let cartData = JSON.parse(localStorage.getItem("cart")) || [];

// let buyNow = document.getElementById("btn")
// buyNow.addEventListener("click", () => {
//     window.location.href = "checkout.html";
// });

// let url = "https://meesho.onrender.com/women"

// function fetchData(url) {
//     fetch(url)
//         .then((res) => {
//             return res.json()
//         })
//         .then((data) => {
//             global = data;
//             // console.log(global)
//             displayData(global)
//         })
// }
// // let card_daa=JSON.parse(localStorage.getItem("inner_div"))||[];

// function displayData(data) {
//     main_section.innerHTML = null

//     data.forEach((ele) => {
//         let div = document.createElement("div")
//         div.setAttribute("class", "inner-div")
//         // div.addEventListener("click",()=>{
//         //    card_daa=ele;
//         //    localStorage.setItem("inner_div",JSON.stringify(card_daa))
//         //    // console.log(ele);
//         //    window.location.href="product.html";
//         // })

//         let divImg = document.createElement("div")
//         divImg.setAttribute("class", "inner-div-img")
//         let img = document.createElement("img")
//         img.setAttribute("src", ele.image)


//         let title = document.createElement("p")
//         title.innerText = `${ele.name.substring(0, 15)}...`;
//         title.setAttribute("class", "title")

//         let price = document.createElement("p")
//         price.innerText = `₹${ele.price}`
//         price.setAttribute("class", "price")


//         let span = document.createElement("span")
//         span.innerHTML = document.createElement("p")
//         span.innerText = "onwards"
//         span.setAttribute("class", "span")

//         // price.append(span)

//         let Free = document.createElement("div")
//         Free.innerText = "Free Delivery"
//         Free.setAttribute("class", "free")

//         let div2 = document.createElement("div")
//         div2.setAttribute("class", "div2")

//         let rating = document.createElement("div")
//         rating.innerText = ele.rating
//         rating.setAttribute("class", "rating")

//         let reviews = document.createElement("p")
//         reviews.innerText = `${ele.review}`
//         reviews.setAttribute("class", "review")

//         // let addToeCart = 344
//         addToCart.addEventListener("click", () => {
//             let dub = JSON.parse(localStorage.getItem("cart"));
//             if (dub === null) dub = [];
//             let isAdleadyInCart = false;
//             for (let i = 0; i < dub.length; i++) {
//                 if (dub[i].id === ele.id) {
//                     isAdleadyInCart = true;
//                     break;
//                 };
//             }
//             if (isAdleadyInCart === true) {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops..',
//                     text: 'Product Already In The Cart',
//                     footer: '<a href="cart.html">Check The Cart</a>'
//                 })
//             }
//             else {
//                 dub.push({ ...element, quantity: 1 });
//                 localStorage.setItem("cart", JSON.stringify(dub))
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops..',
//                     text: 'Product Already In The Cart',
//                     footer: '<a href="cart.html">Check The Cart</a>'
//                 })
//             }


//             let isAdded = cartData.find((el) => el.name == ele.name);
//             if (isAdded) {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops..',
//                     text: 'Product Already In The Cart',
//                     footer: '<a href="cart.html">Check The Cart</a>'
//                 })
//             }
//             else {
//                 // console.log(ele)
//                 cartData.push({ ...ele, quantity: 1 });
//                 localStorage.setItem("cart", JSON.stringify(cartData));
//                 Swal.fire({
//                     position: 'top',
//                     icon: 'success',
//                     title: 'Product Added To The Cart',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             }
//         });

//         // div2.append(rating,reviews)
//         divImg.append(img)
//         div.append(divImg, title, price, Free, div2)
//         main_section.append(div)

//     });


// }


// window.addEventListener("load", () => {
//     fetchData(url)
//     //displayData();
// })


// let card_daa = JSON.parse(localStorage.getItem("inner_div")) || [];
// // let img=document.getElementById("image");
// // img.setAttribute("src",card_daa.image)
// // p.innner.text=card_daa.price;

// let item = document.getElementById("item_img");
// item.setAttribute("src", card_daa.image);

// let Name = document.createElement("p");
// Name.innerText = card_daa.name;

// let Price = document.createElement("p");
// Price.innerText = card_daa.price;

// let Review = document.createElement("p");
// Review.innerText = card_daa.review;

// let Rating = document.createElement("p");
// Rating.innerText = card_daa.rating;

// let Free_Delivery = document.createElement("p");
// Free_Delivery.innerText = card_daa.status;



// document.querySelector("#product").append(Name, Free_Delivery, Rating, Review, Price);

// let subName = document.createElement("p");
// subName.innerText = card_daa.name;

// let subPrice = document.createElement("p");
// subPrice.innerText = card_daa.price;

// let subReview = document.createElement("p");
// subReview.innerText = card_daa.review;

// let subRating = document.createElement("p");
// subRating.innerText = card_daa.rating;

// let subFree_Delivery = document.createElement("p");
// subFree_Delivery.innerText = card_daa.status;
// document.getElementById("subproduct").append(subName, subFree_Delivery, subRating, subReview, subPrice);



// fetch("https://meesho.onrender.com/women")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         global = data;
//         apiCall(global)
//     })
// function apiCall(data) {
//     console.log(data)
//     data.forEach((ele) => {
//         addToCart.addEventListener("click", () => {
//             // console.log(09)
//             let dub = JSON.parse(localStorage.getItem("cart"));
//             if (dub === null) dub = [];
//             let isAdleadyInCart = false;
//             for (let i = 0; i < dub.length; i++) {
//                 if (dub[i].id === ele.id) {
//                     isAdleadyInCart = true;
//                     break;
//                 };
//             }
//             if (isAdleadyInCart === true) {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops..',
//                     text: 'Product Already In The Cart',
//                     footer: '<a href="cart.html">Check The Cart</a>'
//                 })
//             }
//             else {
//                 dub.push({ ...ele, quantity: 1 });
//                 localStorage.setItem("cart", JSON.stringify(dub))
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops..',
//                     text: 'Product Already In The Cart',
//                     footer: '<a href="cart.html">Check The Cart</a>'
//                 })
//             }
//         });
//     })

// }

let main_section = document.querySelector("#bottom")
let global=[];
let btn = document.getElementById("btnB")

// let cartData = JSON.parse(localStorage.getItem("cart")) || [];





let addToCart = document.getElementById("cartBtn");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

let buyNow = document.getElementById("btn")
buyNow.addEventListener("click", () => {
    window.location.href = "checkout.html";
});

let url = "https://astel-api.vercel.app/women"

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
// let card_daa=JSON.parse(localStorage.getItem("inner_div"))||[];

function displayData(data){
main_section.innerHTML= null

data.forEach((ele) => {
let div = document.createElement("div")
div.setAttribute("class","inner-div")
// div.addEventListener("click",()=>{
//    card_daa=ele;
//    localStorage.setItem("inner_div",JSON.stringify(card_daa))
//    // console.log(ele);
//    window.location.href="product.html";
// })

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

addToCart.addEventListener("click", () => {
   let isAdded = cartData.find((el) => el.name == ele.name);
   if(isAdded) {
    Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Product Already In The Cart',
        footer: '<a href="cart.html">Check The Cart</a>'
      })
   }
   else {
    cartData.push({...ele,quantity:1});
    localStorage.setItem("cart", JSON.stringify(cartData));
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Product Added To The Cart',
        showConfirmButton: false,
        timer: 1500
      })
   }
});

// div2.append(rating,reviews)
divImg.append(img)
div.append(divImg,title,price,Free,div2)
main_section.append(div)

});


}


window.addEventListener("load",()=>{
    fetchData(url)
    //displayData();
})


let card_daa=JSON.parse(localStorage.getItem("inner_div"))||[];
// let img=document.getElementById("image");
// img.setAttribute("src",card_daa.image)
// p.innner.text=card_daa.price;

let item = document.getElementById("item_img");
item.setAttribute("src",card_daa.image);

let Name = document.createElement("p");
Name.innerText=card_daa.name;

let Price = document.createElement("p");
Price.innerText=card_daa.price;

let Review = document.createElement("p");
Review.innerText=card_daa.review;

let Rating = document.createElement("p");
Rating.innerText=card_daa.rating;

let Free_Delivery = document.createElement("p");
Free_Delivery.innerText=card_daa.status;


document.querySelector("#product").append(Name,Free_Delivery,Rating,Review,Price);

let subName = document.createElement("p");
subName.innerText=card_daa.name;

let subPrice = document.createElement("p");
subPrice.innerText=card_daa.price;

let subReview = document.createElement("p");
subReview.innerText=card_daa.review;

let subRating = document.createElement("p");
subRating.innerText=card_daa.rating;

let subFree_Delivery = document.createElement("p");
subFree_Delivery.innerText=card_daa.status;
document.getElementById("subproduct").append(subName,subFree_Delivery,subRating,subReview,subPrice);