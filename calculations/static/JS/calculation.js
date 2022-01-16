var button;
button = document.querySelector("#areaButton");
button.addEventListener("click",function(){
    var aText,bText,cText;
    var aVal,bVal,cVal;
    var sum1
    var radiusEdit,reg,res;
    sum1=document.querySelector("#radiusEdit");
    radiusEdit = sum1.value;
    reg = new RegExp("^[1-9]+[0-9]*$");
    res = radiusEdit.match(reg);
    if(res==null)
    {
        alert("Please Enter a valid Value in 'Radius (R)' ");
    }
    
    var sum
    var bEdit,reg,res;
    sum=document.querySelector("#bEdit");
    bEdit = sum.value;
    reg = new RegExp("^[3]+[3]*$");
    res = bEdit.match(reg);
    if(res==null)
    {
        alert("Please Enter a valid 'Precision' Value");
    }
    
    
    try{
    aText=document.querySelector("#radiusEdit");
    bText=document.querySelector("#bEdit");
    cText=document.querySelector("#areaEdit");

    aVal = parseInt(aText.value);
    bVal = parseInt(bText.value)
    cVal = 1.33333*(22/7)*aVal*aVal*aVal;
    cText.value = ""+cVal.toFixed(bVal);
    }catch(e1){
        
    }
    


});

var button;

button=document.querySelector("#addbutton");
button.addEventListener("click",function(){

var atext,btext,ctext;
var aval,bval,cval
var sum2
    var aedit,reg,res;
    sum2=document.querySelector("#aedit");
    aedit = sum2.value;
    reg = new RegExp("^[1-9]+[0-9]*$");
    res = aedit.match(reg);
    if(res==null)
    {
        alert("Please Enter a valid Value in 'Radius (R)' ");
    }
    
    var sum3
    var bedit,reg,res;
    sum3=document.querySelector("#bedit");
    bedit = sum3.value;
    reg = new RegExp("^[1-9]+[0-9]*$");
    res = bedit.match(reg);
    if(res==null)
    {
        alert("Please Enter a valid Value in 'Height (H)' ");
    }
   
atext=document.querySelector("#aedit");
btext=document.querySelector("#bedit");
ctext=document.querySelector("#cedit");

aval=parseInt(atext.value);
bval=parseInt(btext.value);
cval=aval*bval*0.3333;
ctext.value=""+cval;

});