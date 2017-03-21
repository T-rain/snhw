document.getElementById('scroll-top').onclick = function(){
    window.scrollTo(0,0);
}




document.getElementsByClassName("pbgcolor")[0].onmouseover = function(){
  document.getElementsByClassName("pbgcolor")[0].className = "pbgcolor pbgcolorpink";
}

document.getElementsByClassName("pbgcolor")[1].onmouseover = function(){
  document.getElementsByClassName("pbgcolor")[1].className = "pbgcolor pbgcolorpink";
}

document.getElementsByClassName("pbgcolor")[2].onmouseover = function(){
  document.getElementsByClassName("pbgcolor")[2].className = "pbgcolor pbgcolorpink";
}

document.getElementsByClassName("pbgcolor")[0].onmouseout = function(){
  document.getElementsByClassName("pbgcolor")[0].className = "pbgcolor";
}

document.getElementsByClassName("pbgcolor")[1].onmouseout = function(){
  document.getElementsByClassName("pbgcolor")[1].className = "pbgcolor";
}

document.getElementsByClassName("pbgcolor")[2].onmouseout = function(){
  document.getElementsByClassName("pbgcolor")[2].className = "pbgcolor";
}

//var needToChangeTagArray=['p','h3','h1'];
// needToChangeTagArray.forEach(function(element) {
//     var divpbgHTMLcollectionLength =  document.getElementsByTagName(element).length;
//     for (var i = 0; i < divpbgHTMLcollectionLength; i++) {
//
//         document.getElementsByTagName(element)[i].onmouseover = function(ele){
//             ele.target.className = "pbgcolorpink";
//         }
//         document.getElementsByTagName(element)[i].onmouseout = function(ele){
//             ele.target.className = " ";
//         }
//     }
// });

var needToChangeIDSize=['x-small','medium','x-large'];

needToChangeIDSize.forEach(function(ele){
    document.getElementById(ele).onclick = function(){
        document.body.style.fontSize = ele;
    }

});
