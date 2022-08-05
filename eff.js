// Header

let tabs_1 =document.querySelectorAll(".parts > div");
let tabsarray_1 = Array.from(tabs_1);
let divs_1 =document.querySelectorAll(".parts_2 > div");
let divsarray_1 = Array.from(divs_1);

console.log(divsarray_1);

tabsarray_1.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        console.log(ele)
        tabsarray_1.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsarray_1.forEach((div) => {
            div.style.display ="none";
        });
        document.querySelector(e.currentTarget.dataset.con).style.display = "flex"
    });
});

//planets

let tabs =document.querySelectorAll(".destination .kinds > div");
let tabsarray = Array.from(tabs);
let divs =document.querySelectorAll(".destination .kind_2 > div");
let divsarray = Array.from(divs);

console.log(divsarray);

tabsarray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        console.log(ele)
        tabsarray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsarray.forEach((div) => {
            div.style.display ="none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
    });
});
