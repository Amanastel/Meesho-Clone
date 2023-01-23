// sorting
let select = document.querySelector("#selectText");
let real = document.querySelector("#as_same");
let New = document.querySelector("#new");
let high = document.querySelector("#H_L");
let low = document.querySelector("#L_H");
let star = document.querySelector("#rat");
let per = document.querySelector("#percentage");



let main_section = document.querySelector(".right-div")
let global = [];



let url = "https://meesho.onrender.com/jewelry"

function fetchData(url) {
   fetch(url)
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         global = data;
         console.log(global)
         displayData(global)
      })
}
let card_daa = JSON.parse(localStorage.getItem("inner_div")) || [];

function displayData(data) {
   main_section.innerHTML = null

   data.forEach((ele) => {
      let div = document.createElement("div")
      div.setAttribute("class", "inner-div")
      div.addEventListener("click", () => {
         card_daa = ele;
         localStorage.setItem("inner_div", JSON.stringify(card_daa))
         // console.log(ele);
         window.location.href = "product.html";
      })

      let divImg = document.createElement("div")
      divImg.setAttribute("class", "inner-div-img")
      let img = document.createElement("img")
      img.setAttribute("src", ele.image)


      let title = document.createElement("p")
      title.innerText = `${ele.name.substring(0, 15)}...`;
      title.setAttribute("class", "title")

      let price = document.createElement("p")
      price.innerText = `₹${ele.price}`
      price.setAttribute("class", "price")

      let span = document.createElement("span")
      span.innerHTML = document.createElement("p")
      span.innerText = "onwards"
      span.setAttribute("class", "span")

      price.append(span)

      let Free = document.createElement("div")
      Free.innerText = "Free Delivery"
      Free.setAttribute("class", "free")

      let div2 = document.createElement("div")
      div2.setAttribute("class", "div2")

      let rating = document.createElement("div")
      rating.innerText = `${ele.rating}`
      rating.setAttribute("class", "rating")

      let reviews = document.createElement("p")
      reviews.innerText = `${ele.review}`
      reviews.setAttribute("class", "review")

      div2.append(rating, reviews)
      divImg.append(img)
      div.append(divImg, title, price, Free, div2)

      main_section.append(div)

   });


}


window.addEventListener("load", () => {
   fetchData(url)
   // displayData();
})


high.addEventListener("click", function () {
   let sorting = global.sort((a, b) => {
      return b.price - a.price;
   })
   console.log(sorting);
   displayData(sorting);
})

low.addEventListener("click", function () {
   let ltoh = global.sort((a, b) => {
      return a.price - b.price;
   })
   console.log(ltoh);
   displayData(ltoh);
})

star.addEventListener("click", function () {
   let Rate = global.sort((a, b) => {
      return b.rating - a.rating;
   })
   console.log(Rate);
   displayData(Rate);
})

let men = document.getElementById("menp");
men.addEventListener("click", () => {
   fetchData("https://meesho.onrender.com/men")
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         global = data;
         //console.log(global)
         // displayData(global)
      })
})

let women = document.getElementById("womenp");
women.addEventListener("click", () => {
   fetchData("https://meesho.onrender.com/women")
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         global = data;
         //console.log(global)
         // displayData(global)
      })
})


let priceone = document.getElementById("priceone");
priceone.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 149;
   })
   displayData(newData)
})

let pricetwo = document.getElementById("pricetwo");
pricetwo.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 249;
   })
   displayData(newData)
})

let pricethree = document.getElementById("pricethree");
pricethree.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 359;
   })
   displayData(newData)
})


let pricefour = document.getElementById("pricefour");
pricefour.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 459;
   })
   displayData(newData)
})


let pricefive = document.getElementById("pricefive");
pricefive.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 559;
   })
   displayData(newData)
})

let pricesix = document.getElementById("pricesix");
pricesix.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 659;
   })
   displayData(newData)
})

let priceseven = document.getElementById("priceseven");
priceseven.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 759;
   })
   displayData(newData)
})

let priceeight = document.getElementById("priceeight");
priceeight.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 859;
   })
   displayData(newData)
})

let pricenine = document.getElementById("pricenine");
pricenine.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.price <= 959 && ele.price >= 859;
   })
   displayData(newData)
})

let rateone = document.getElementById("rateone");
rateone.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.rating >= 2.0;
   })
   displayData(newData)
})

let ratetwo = document.getElementById("ratetwo");
ratetwo.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.rating >= 3.0;
   })
   displayData(newData)
})

let ratethree = document.getElementById("ratethree");
ratethree.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.rating >= 3.5;
   })
   displayData(newData)
})

let ratefour = document.getElementById("ratefour");
ratefour.addEventListener("click", () => {
   let newData = global.filter((ele, inex) => {
      return ele.rating >= 4.0;
   })
   displayData(newData)
})

// let MT=document.getElementById("M-T");
// MT.addEventListener("click",()=>{
//    let newData=global.filter((ele,inex)=>{
//         return ele.rating===M-Trusted;
//    })
//    displayData(newData)
// })



