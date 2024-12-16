// selected first paragraph and styled it
let go=document.getElementById("line1");
go.style.backgroundColor=("blue");

//create a function that styles the 2nd line
function changemore(){
    let am=document.getElementById("line2");
am.style.backgroundColor=("grey");
am.style.color=("black");
am.innerHTML=("I know now what the DOM is 🙌");
}

// selected the 2nd line and added an eventlistener
let more = document.getElementById("line2"); //selects the 2nd line
more.addEventListener("click",changemore); //addin an eventlistener to the 2nd line

//created a function for the 3rd line
function changemore1(){
    let is=document.getElementById("line3");
is.style.backgroundColor=("red");
is.style.color=("black");
is.innerHTML=("I know how to access/ select elements in a DOM🐒");
}

//selected the 3rd line and added an eventlistener
let more1=document.getElementById("line3");
more1.addEventListener("dblclick",changemore1);

 function changemore2(){
let me=document.getElementById("line4");
me.style.backgroundColor=("orange");
me.style.color=("black");
me.innerHTML=("I know  how to use the style methods to change the styles of an element in the DOM🐾");
 }


let more3=document.getElementById("line4");
more3.addEventListener("click",changemore2);
function changemore3(){
    let it=document.getElementById("line5");
it.style.backgroundColor=("green");
it.style.color=("black");
it.innerHTML=("I know how the styling properties differ in JS from CSS☑");
// let more4=document.getElementById("line5");

}

let more4=document.getElementById("line5");
more4.addEventListener("dblclick", changemore3);



function changemore5(){
    let to=document.getElementById("line6");
    to.style.backgroundColor=("black");
    to.style.color=("white");
    to.innerHTML=("Yes I did it!!! I manipulated the DOM and styled the elements🥰🥰🥰🥰🥰🥰");
}

let more5=document.getElementById("line6");
more5.addEventListener("dblclick", changemore5);
// let btn=document.querySelector("#button1");

// function changestyle(){
//     let pic=document.querySelector(".photo")
//     pic.style.display="block";
//     let butt=document.querySelector("#button2");
//     pic.style.display="none";
//     let buttt=document.querySelector("#button1");
//     buttt.style.display="block";
// }

//  btn.addEventListener("click",changestyle);
function openbutton(){
    let pic=document.getElementById("pic");
    pic.style.display="block";

}
let button=document.getElementById("button1");
button.addEventListener("click",openbutton);