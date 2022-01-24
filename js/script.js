document.addEventListener("click", count);

function count (event) {
    if (event.target.dataset.counter != undefined) {
        event.target.value++;
    } 
}

for (let i of document.querySelectorAll(`input`)) {
    i.style.padding = `5px`;
}

input.addEventListener("mousemove", function(e) {
    this.value = e.clientX + ":" + e.clientY;
})

paragraf.addEventListener("copy", function(e) {
    
    alert(`Копирование запрещено!`);
    e.preventDefault();
});

document.documentElement.addEventListener("copy", function(e) {
    e.preventDefault();
    alert(`Копирование запрещено!`);
})

document.querySelector(`.wraper`).addEventListener("click", function(e) {
    console.log(`Целевой элемент: ` + e.target.tagName)
});


document.querySelector(`.wraper`).addEventListener("mousedown", function(e) {
    e.preventDefault();
});

document.querySelector(`.wraper`).addEventListener("dblclick", function(e) {
    alert(`Doubleclick on element `+ e.target.tagName);
})

document.querySelector(`.wraper`).addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("Browser context menu was prevented. Which: " + e.which );
})

let book = {
    numberOfPages : 545,

    cover  : true,
    isTheAuthorAlive  : false, 
    isBestseller  : true,
    booksEditions  : 20000000,

};

for (let key in book) {
    if (typeof (book[key]) == `boolean` ) {
        console.log(key)
    }
}

let clone = {}
for (let key in book) {
    clone[key] = book[key];
}
clone.booksEditions = 173;
console.log(`book: `, book);

let clone2 = Object.assign({}, book);
clone2.booksEditions = 456;
console.log(`clone2 (object.assign): `, clone2);


console.log(`clone (for in): `, clone);


console.log(book === clone2)




