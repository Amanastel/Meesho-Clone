import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronic.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"




let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")


document.getElementById("closeSearch").addEventListener("click", () => {
    inputSearchEl.value = "";
    document.getElementById("closeSearch").style.display = "none";
});


inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl)
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./images/HomePage/NavBar/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})

/*function reuble*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}






/****womenEthic */
renderSubMenu("womenEthic", WomenEthnic)

/****WomenWestern */
renderSubMenu("womenWestern", WomenWestern)

//Men 
renderSubMenu("men", Men)

/***kids */
renderSubMenu("kids", Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen", HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth", BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWarId", BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId", Electronics)















