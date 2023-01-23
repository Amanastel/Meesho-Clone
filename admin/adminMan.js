let main_section = document.querySelector(".right-div")
let global = [];
let allProduct = []

let menData = document.getElementById("menData")
let womenData = document.getElementById("womenData")
let anotherData = document.getElementById("anotherData")
let menPrice = document.getElementById("menPrice")
let allProPrice = document.getElementById("allProPrice")
let woMenPrice = document.getElementById("woMenPrice")
let nikePrice = document.getElementById("woMenPrice")
let hermesPrice = document.getElementById("hermesPrice")
let succiPrice = document.getElementById("succiPrice")
let gucciPrice = document.getElementById("gucciPrice")
let addidasPrice = document.getElementById("addidasPrice")
let bilackPrice = document.getElementById("bilackPrice")

let totelProData = document.getElementById("totelProData")


let form = document.getElementById("form-id");
let main_form = document.getElementById("main_form");
let product_id = document.getElementById("product_id");
let product_image = document.getElementById("product_image");
let product_name = document.getElementById("product_name");
let product_price = document.getElementById("product_price");
let product_rating = document.getElementById("product_rating");
let product_review = document.getElementById("product_review");
let add_product = document.getElementById("add_product");
let product_type = document.getElementById("product_type");
let product_type_label = document.getElementById("product_type_label");


form.style.display = "none"
product_type.style.display = "none"
product_type_label.style.display = "none"

let dataLocal = JSON.parse(localStorage.getItem("favourites")) || [];
// let url = "https://meesho.onrender.com/allData?&_limit=18" //

function fetchData() {
    fetch('https://meesho.onrender.com/men')
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
    data.forEach((ele) => {
        let div = document.createElement("div")
        div.setAttribute("class", "inner-div")

        let divImg = document.createElement("div")
        divImg.setAttribute("class", "inner-div-img")
        let img = document.createElement("img")
        img.setAttribute("src", ele.image)

        let title = document.createElement("p")
        title.innerText = `${ele.name.substring(0, 12)}...`;
        title.setAttribute("class", "title")

        let price = document.createElement("p")
        price.innerText = `₹${ele.price}`
        price.setAttribute("class", "price")


        let div2 = document.createElement("div")
        div2.setAttribute("class", "div2")

        let rating = document.createElement("div")
        rating.innerText = ele.rating
        rating.setAttribute("class", "rating")

        let reviews = document.createElement("p")
        reviews.innerText = `${ele.review}`
        reviews.setAttribute("class", "review")

        let del = document.createElement("button");
        del.innerText = "Delete";
        let edit = document.createElement("button");
        edit.innerText = "Edit";

        edit.addEventListener('click', () => {
            form.style.display = "block"
            product_type.style.display = "block"
            product_type_label.style.display = "block"
            product_id.value = ele.id
            product_name.value = ele.name
            product_price.value = ele.price
            product_image.value = ele.image
            product_type.value = ele.type
            product_rating.value = ele.rating
            product_review.value = ele.review
        })

        del.addEventListener("click", function () {
            // data.splice(index, 1);
            // localStorage.setItem("favourites", JSON.stringify(data));
            // displayproducts(data);
            deleteProduct(ele.id)

        })

        let delEdit = document.createElement("div")
        delEdit.setAttribute("class", "delEdit")

        delEdit.append(del, edit)
        div2.append(rating, reviews)
        divImg.append(img)
        div.append(divImg, title, price, div2, delEdit)

        main_section.append(div)
    });
    add_product.addEventListener("click", () => {
        form.style.display = "block"
        product_type.style.display = "block"
        product_type_label.style.display = "block"

    })

    main_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let obj = {
            id: main_form.product_id.value,
            name: main_form.product_name.value,
            image: main_form.product_image.value,
            price: main_form.product_price.value,
            type: main_form.product_type.value
        }
        if (main_form.priority.value == "add") {
            addProduct(obj)
        } else if (main_form.priority.value == "update") {
            updateProduct(obj)
        }
        // console.log(obj)
    })

    function addProduct(obj) {
        // console.log(JSON.stringify(obj))
        fetch(`https://meesho.onrender.com/men/`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                fetchData()
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    function updateProduct(obj) {
        // console.log('update')
        fetch(`https://meesho.onrender.com/men/${obj.id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                fetchData()
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function deleteProduct(id) {
        // console.log('update')
        fetch(`https://meesho.onrender.com/men/${id}`,
            {
                method: 'DELETE'

            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                fetchData()
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    // menDataApi('https://meesho.onrender.com/men')
    // woMenDataApi('https://meesho.onrender.com/women')
    // wanotherData('https://meesho.onrender.com/allData')
    let n = 0
    fetch('https://meesho.onrender.com/women')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            global = data;
            womenData.innerText = data.length

            data.forEach((el) => {
                n += +el.price
            })

            woMenPrice.innerText = '₹' + n

        })
    let m = 0
    fetch('https://meesho.onrender.com/men')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            global = data;
            menData.innerText = data.length

            data.forEach((el) => {
                m += +el.price
            })
            menPrice.innerText = '₹' + m
            anotherData.innerText = n
        })
    let all = 0
    fetch('https://meesho.onrender.com/allData')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            global = data;
            totelProData.innerText = data.length
            data.forEach((el) => {
                all += +el.price
            })
            allProPrice.innerText = '₹' + all

        })
}

window.addEventListener("load", () => {
    fetchData()
    // displayData()
    // displayData()
    // displayData();
})
let tot = document.getElementById("tot")
tot.addEventListener("click", () => {
    window.location.href = "admin.html";
})
let wom = document.getElementById("womenData")
wom.addEventListener("click", () => {
    window.location.href = "adminWo.html"
})