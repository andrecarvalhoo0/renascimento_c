function apareceMensagem() {
    alert("HOHOHO VOCÊ CLICOU NO BOTÃO DO BOLSO****");
}
let varr = document.querySelector(".button");
varr.addEventListener("click", apareceMensagem);


function apareceOuNao() {
    let div = document.querySelector(".none");
    let feiozin = document.querySelector(".feio");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir2 = document.querySelector(".vermais");
        abrir2.innerHTML = "Ver mais";
        feiozin = document.querySelector(".feio");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir2 = document.querySelector(".vermais");
        abrir2.innerHTML = "Ver menos";
        feiozin = document.querySelector(".feio");
        feiozin.style.display = "block";
    }
}
let abrir = document.querySelector(".vermais");
abrir.addEventListener("click", apareceOuNao);


function apareceOuNao2() {
    let div = document.querySelector(".none2");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir3 = document.querySelector(".vermais2");
        abrir3.innerHTML = "Ver mais";
        let feiozin = document.querySelector(".feio");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir3 = document.querySelector(".vermais2");
        abrir3.innerHTML = "Ver menos";
        let feiozin = document.querySelector(".feio");
        feiozin.style.display = "block";
    }
}
let abrir2 = document.querySelector(".vermais2");
abrir2.addEventListener("click", apareceOuNao2);


function apareceOuNao3() {
    let div = document.querySelector(".none3");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir4 = document.querySelector(".vermais3");
        abrir4.innerHTML = "Ver mais";
        let feiozin = document.querySelector(".feio2");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir4 = document.querySelector(".vermais3");
        abrir4.innerHTML = "Ver menos";
        let feiozin = document.querySelector(".feio2");
        feiozin.style.display = "block";
    }
}
let abrir3 = document.querySelector(".vermais3");
abrir3.addEventListener("click", apareceOuNao3);


function apareceOuNao4() {
    let div = document.querySelector(".none4");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir5 = document.querySelector(".vermais4");
        abrir5.innerHTML = "Ver mais";
        let feiozin = document.querySelector(".feio2");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir5 = document.querySelector(".vermais4");
        abrir5.innerHTML = "Ver menos";
        let feiozin = document.querySelector(".feio2");
        feiozin.style.display = "block";
    }
}
let abrir4 = document.querySelector(".vermais4");
abrir4.addEventListener("click", apareceOuNao4);


function apareceOuNao5() {
    let div = document.querySelector(".none5");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir6 = document.querySelector(".vermais5");
        abrir6.innerHTML = "Ver mais";
        let feiozin = document.querySelector(".feio3");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir6 = document.querySelector(".vermais5");
        abrir6.innerHTML = "Ver menos";
        let feiozin = document.querySelector(".feio3");
        feiozin.style.display = "block";
    }
}
let abrir5 = document.querySelector(".vermais5");
abrir5.addEventListener("click", apareceOuNao5);


function apareceOuNao6() {
    let div = document.querySelector(".none6");
    if (div.style.display === "block") {
        div.style.display = "none";
        let abrir7 = document.querySelector(".vermais6");
        abrir7.innerHTML = "Ver mais";
        let feiozin = document.querySelector(".feio3");
        feiozin.style.display = "none";
    } else {
        div.style.display = "block";
        let abrir7 = document.querySelector(".vermais6");
        abrir7.innerHTML = "Ver menos";
        let feiozin = document.querySelector(".feio3");
        feiozin.style.display = "block";
    }
}
let abrir6 = document.querySelector(".vermais6");
abrir6.addEventListener("click", apareceOuNao6);