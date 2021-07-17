let m="shree" ;
function cat(a){
  return function(b){
    return function(c){
      return a+b+c+m;
    }
  }
    
}

console.log("Output= ");
console.log(cat('na')('mit')('ha'))


let r ;
function disp(){
    let msg = "tadaa";
    r = msg;
    return function (){
        msg = msg+" "+"hello";
        return msg;
    }
    
}
console.log(r);
console.log(disp()());
console.log(r);