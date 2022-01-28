"use strict";

/* ---ВКЛАДКИ БЛОКА CATALOG--- */
let catalog = document.querySelector(".catalog");
let catalogMenu = catalog.querySelector(".catalog__menu");
catalogMenu.addEventListener("click", function (event) {
    /* if (event.target.tagName == `A`) { */
        let tabs = catalogMenu.querySelectorAll(".catalog__tab");
        for (let tab of tabs) {
            tab.classList.remove("tab-active");
        }
        event.target.closest(".catalog__tab").classList.add("tab-active");

        let productCategory = event.target.dataset.productCategory;
        let products = Array.from(catalog.querySelectorAll(".product"));
        for (let product of products) {
            if (product.dataset.productType != productCategory && productCategory != "all") {
                product.closest(".catalog__item").hidden = true;
                continue;
            }
            product.closest(".catalog__item").hidden = false;
        }
        event.preventDefault();
    /* } */
});


/* ---SIDE-MENU--- */

/* let menuBurger = document.querySelector(".menu__burger");
menuBurger.addEventListener("click", function (event) {
        let burgerItems = Array.from(menuBurger.children);
        let sidebar = document.querySelector(".sidebar");
        if (sidebar.hidden) {
            burgerItems[0].hidden = true;
            burgerItems[1].classList.add(`x-mark`);
            burgerItems[2].classList.add(`x-mark2`);
            burgerItems[3].hidden = true;
            sidebar.hidden = false;
        } else {
            burgerItems[0].hidden = false;
            burgerItems[1].classList.remove(`x-mark`);
            burgerItems[2].classList.remove(`x-mark2`);
            burgerItems[3].hidden = false;
            sidebar.hidden = true;
        }
        event.stopPropagation();
}) */


/* let click = new Event("click");
document.documentElement.addEventListener("click", function(e) {
    let sidebar = document.querySelector(".sidebar");
    if(!sidebar.hidden) {    
        menuBurger.dispatchEvent(click);
    }
}) */
/* document.documentElement.addEventListener("click", function (e) {
    console.log(`target: `, e.target);
}) */




document.querySelector('.burger').addEventListener('click', function (event) {
    document.querySelector('.burger span').classList.toggle('active');
    let sidebar = document.querySelector(".sidebar");
    sidebar.hidden = !sidebar.hidden;
    event.stopPropagation();
})


let click = new Event("click");
document.documentElement.addEventListener("click", function (e) {
    let sidebar = document.querySelector(".sidebar");
    if (!sidebar.hidden) {
        document.querySelector('.burger').dispatchEvent(click);
    }
})