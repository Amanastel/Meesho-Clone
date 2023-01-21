
let main_section = document.querySelector(".right-div")
let global = [];
let allProduct = []

let menData = document.getElementById("menData")
let womenData = document.getElementById("womenData")
let anotherData = document.getElementById("anotherData")
let menPrice = document.getElementById("menPrice")
let woMenPrice = document.getElementById("woMenPrice")
let nikePrice = document.getElementById("woMenPrice")
let hermesPrice = document.getElementById("hermesPrice")
let succiPrice = document.getElementById("succiPrice")
let gucciPrice = document.getElementById("gucciPrice")
let addidasPrice = document.getElementById("addidasPrice")
let bilackPrice = document.getElementById("bilackPrice")
let totelProData = document.getElementById("totelProData")


let url = "https://meesho.onrender.com/allData?&_limit=18" //

function fetchData(url) {
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            global = data;
            
            // console.log(global)
            // totLength = ...
            displayData(global)
        })
}
let card_daa = JSON.parse(localStorage.getItem("inner_div")) || [];

function displayData(data) {

    main_section.innerHTML = null
    let count = 0
    data.forEach((ele, index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "inner-div")
        // div.addEventListener("click", () => {
        //     card_daa = ele;
        //     localStorage.setItem("inner_div", JSON.stringify(card_daa))
        //     // console.log(ele);
        //     window.location.href = "product.html";
        // })
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

        // let span = document.createElement("span")
        // span.innerHTML = document.createElement("p")
        // span.innerText = "onwards"
        // span.setAttribute("class", "span")

        // price.append(span)

        // let Free = document.createElement("div")
        // Free.innerText = "Free Delivery"
        // Free.setAttribute("class", "free")

        let div2 = document.createElement("div")
        div2.setAttribute("class", "div2")

        let rating = document.createElement("div")
        rating.innerText = ele.rating
        rating.setAttribute("class", "rating")

        let reviews = document.createElement("p")
        reviews.innerText = `${ele.review}`
        reviews.setAttribute("class", "review")

        div2.append(rating, reviews)
        divImg.append(img)
        div.append(divImg, title, price, div2)

        main_section.append(div)

    });

    menDataApi('https://meesho.onrender.com/men')
    woMenDataApi('https://meesho.onrender.com/women')
    wanotherData('https://meesho.onrender.com/allData')

    function menDataApi(url) {
        menPrice.innerHTML = null
        let n = 0
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                count += data.length
                allProduct.push(data)
                // console.log(allProduct.flat().length)
                // count = allProduct.flat().length
                // console.log(count)
                menData.innerText = count
                data.forEach((el)=>{
                    n += +el.price
                })
                
                menPrice.innerText = '₹'+n
            
            })
    }
    function woMenDataApi(url) {
        woMenPrice.innerHTML = null
        let n = 0
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                count += data.length
                womenData.innerText = count
                
                data.forEach((el)=>{
                    n += +el.price
                })
                
                woMenPrice.innerText = '₹'+n
            })
            
    }
    function wanotherData(url) {
        anotherData.innerHTML = null
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                anotherData.innerText = data.length
            })
    }


}




window.addEventListener("load", () => {
    fetchData(url)
    // displayData();
})
