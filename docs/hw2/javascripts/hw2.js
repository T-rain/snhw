//scrollToTop
document.getElementById('scroll-top').onclick = function(){
    window.scrollTo(0,0);
}

//add background-color on reading paragraph
var getEleAndIter = function(cb){
  var needToChangeTagArray=['p','h3','h1'];
  needToChangeTagArray.forEach(function(element) {
      var divpbgHTMLcollectionLength =  document.getElementsByTagName(element).length;
      for (var i = 0; i < divpbgHTMLcollectionLength; i++) {
          cb(element,i);
      }
  });

}

getEleAndIter(function(element,i){
    document.getElementsByTagName(element)[i].onmouseover = function(){
      document.getElementsByTagName(element)[i].className += " pbgcolorpink";
    }

    document.getElementsByTagName(element)[i].onmouseout = function(){
        var classNameString = document.getElementsByTagName(element)[i].className;
        var index = classNameString.indexOf("pbgcolorpink");
        var changeName = classNameString.substring(0,index);
        document.getElementsByTagName(element)[i].className = changeName;
    }
});

//change font-size
var needToChangeIDSize=['x-small','medium','x-large'];

needToChangeIDSize.forEach(function(ele){
    document.getElementById(ele).onclick = function(){
        document.body.style.fontSize = ele;
    }

});
