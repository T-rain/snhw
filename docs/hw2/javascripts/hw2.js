document.getElementById('scroll-top').onclick = function(){
    window.scrollTo(0,0);
}

var needToChangeTagArray=['p','h3','h1'];
needToChangeTagArray.forEach(function(element) {
    var divpbgHTMLcollectionLength =  document.getElementsByTagName(element).length;
    for (var i = 0; i < divpbgHTMLcollectionLength; i++) {

        document.getElementsByTagName(element)[i].onmouseover = function(ele){
            ele.target.className = "pbgcolorpink";
        }
        document.getElementsByTagName(element)[i].onmouseout = function(ele){
            ele.target.className = " ";
        }
    }
});

var needToChangeIDSize=['x-small','medium','x-large'];

needToChangeIDSize.forEach(function(ele){
    document.getElementById(ele).onclick = function(){
        document.body.style.fontSize = ele;
    }

});
