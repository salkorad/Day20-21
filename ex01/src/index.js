(function() {
    'use strict';
    var i,c;
 function init(){ 
    i=document.getElementById('keyboard').getElementsByTagName('button'); 
 
 for(c=0;c<i.length;c++) {
 
 if(i[c].type==='button') { 
  /* add an onclick handler to each of them  and set the function to call */
    i[c].addEventListener('onclick',makeClickHandler(c));
    }
   }
 
 
 }
 
 function makeClickHandler(c) {
    i[c].onclick=function() {
 
 if(i[c].id==='back') {
 /* remove last character from the input the type="text" element using regular expression */
    document.getElementById('text').value=
    document.getElementById('text').value.replace(/.$/,'');
  }
 else if(i[c].id==='space') {
    document.getElementById('text').value+= " ";
  }
  else if(i[c].id==='enter') {
    document.getElementById('text').value+= "\n";
  }
 /* find the text buttons */
 else {
    document.getElementById('text').value+=this.value.toLowerCase();
    }
   };
  }
 
    window.addEventListener?
    window.addEventListener('load',init,false):
    window.attachEvent('onload',init);
 })();
