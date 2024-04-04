// Seleções
const h1Animation = document.querySelectorAll("[id='h1']")

const pAnimation = document.querySelectorAll("[id='p']")

const imgAnimation = document.querySelectorAll("[class='products-image']")

const btnAnimation = document.querySelectorAll("[class='encomend-btn']")

const divAnimation = document.querySelectorAll("[id='animation']")

const productImage = document.querySelectorAll("[class='products-image']")

const body = window.screen.width
console.log(body)


if(body < 450){

    h1Animation.forEach((element) => {
        element.setAttribute("data-aos" , "")
    })
    
    pAnimation.forEach((element) => {
        element.setAttribute("data-aos" , "")
    })
    
    imgAnimation.forEach((element) => {
        element.setAttribute("data-aos" , "")
    })
    
    btnAnimation.forEach((element) => {
        element.setAttribute("data-aos" , "")
    })
    
    divAnimation.forEach((element) => {
        element.setAttribute("data-aos" , "")
    })

    productImage.forEach((element) => {
        element.setAttribute("class" , "products-image disabled")
    })
}else{
    null
}
