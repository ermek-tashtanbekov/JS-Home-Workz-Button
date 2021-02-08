let h1 = document.createElement('h1');
h1.innerText = 0;
document.body.before(h1);
let num = 0;
/////////////////////////
// let ul = document.createElement('ul');
// for(let i = 1; i <= 5; i++){
//     let li = document.createElement('li');
//     let button = document.createElement('button');
//     button.id = "#example";
//     button.innerText = "Example" + i;
//     li.append(button);
//     ul.append(li);
// }
// document.body.before(ul);
//////////////
let one = document.querySelector('.butn1');
one.innerText = "+";
one.addEventListener('click', function(){
    num ++;
    h1.innerText = num
});

let two = document.querySelector('.butn2');
two.innerText = '-';
two.addEventListener('click', function(){
    num --;
    h1.innerText = num;
});


let margtop = document.querySelector('.butn3');
margtop.innerText = "MarginTop";
margtop.addEventListener('click', function(){
    num ++;
    h1.style.marginTop = num + "5px"
});

let marginbutton = document.querySelector('.butn4');
marginbutton.innerText = "marginButton";
marginbutton.addEventListener('click', function(){
    num --;
    h1.style.marginBottom = num + "5px"
})







