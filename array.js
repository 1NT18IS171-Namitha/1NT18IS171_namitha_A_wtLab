function reverseArr(input)
{
    var ret = new Array;
    for(var i=input.length-1;i>=0;i--)
    {
        ret.push(input[i]);
    }
    return ret;
}
var a=[1,3,8,7]
var b=reverseArr(a);
console.log(b)