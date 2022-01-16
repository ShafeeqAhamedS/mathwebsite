# Web Page for Mathematical Calculations

## AIM:

To design a static website with validation to perform mathematical calculations in client side.

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML and CSS.

### Step 3:

Write javascript to perform the calculations.

### Step 4:

Include regularexpression based input validation.

### Step 5:

Validate the layout in various browsers.

### Step 6:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## PROGRAM :
### HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/layout.css" />
    <title>Mathematical calculations</title>
</head>


<body>
    <div class="container">
        <div class="content">
            <h1 class="text">Volume Of a Sphere</h1>
            <form>
                <div class="formelement"><label for="radiusEdit">Radius (R):</label>
                    <input type="text" id="radiusEdit" value="0"/>
                    <lable for="radiusEdit">Meter</lable>
                </div>
                <br>
                <div class="formelement">
                    <label for="bEdit">Precision:</label>
                    <input type="text" id="bEdit" value="0"/><br><br>   
                    <div class="form">
                    <lable for="bEdit">(Precision value must be 3)</lable>
                </div>
                </div>
                <br>
                <div class="formelement">
                    <input type="button" value="Calculate area" id="areaButton"/>
                </div>
                <br>
                <div class="formelement">
                    <label for="areaEdit">Volume:</label>
                    <input type="text" id="areaEdit" value="0" readonly />
                    <label for="areaEdit">Meter<sup> 3</sup></label>
                </div>
                <br><br>
                <hr size="20" color="#2d6a4f"> 
                <div class="body"></div>
                <div class="container">
                    <div class="content">
                        <h1>Volume Of a Pyramid</h1>
                        <form>
                            <div class=formelement>
                                <lable for="aedit">Base Area(a):</lable>
                                <input type="text" id="aedit" value="0"/>
                                <lable for="aedit">Meter</lable>
                            </div><br>
                            <div class=formelement>
                                <lable for="bedit">Base Width (w):</lable>
                                <input type="text" id="bedit" value="0"/>
                                <lable for="bedit">Meter</lable>
                            </div><br>
                            <div class=formelement>
                                <input type="button" value="Calculate" id="addbutton"/>
                            </div><br>
                            <div class=formelement>
                                <lable for="cedit">Volume :</lable>
                                <input type="text" id="cedit" readonly="0"/>
                                <lable for="cedit">Meter<sup> 3</sup></lable>
                            </div><br><br>
                            <div class="footer">
                                 Developed by S.Shafeeq Ahamed
                              </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    </div>
        </div>
    </div>
    <script src="JS/calculation.js"></script>
</body>
</html>
```

### CSS Code:
```
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif,Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  body {
    background-color: #d8f3dc;
  }
  .container {
    width: 1080px;
    padding-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .content {
    display: block;
    width: 100%;
    background-color: #74c69d;
    min-height: 300px;
    margin-top: 10px;
    
  }
  h1{
      text-align: center;
      padding-top: 20px;
      color: rgb(36, 37, 37);
  }
  hr{
    color: rebeccapurple;
  }
  .formelement{
      text-align: center;
      font-size:xx-large;
      margin-top: 5px;
      margin-bottom: 5px;
      
  }
  .footer {
    display: block;
    width: 100%;
    height: 30px;
    background-color: #2d6a4f;
    text-align: center;
    font-size: larger;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFFFFF;
    margin-bottom: -10%;
  }
  .form{
      font-size: 25px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
```

### JavaScript Code:
```
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
```
## OUTPUT:

![output](./img/output.png)

## Result:

Thus a website is designed to perform mathematical calculations in the client side.
