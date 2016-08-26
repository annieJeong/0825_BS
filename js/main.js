/**
 * Created by kosta on 2016-08-24.
 */
function changefont(){
    document.getElementById("demo").style.fontSize="40px";
    window.alert("hello, world!");
    document.write("<h1>document.write 실행</h1>");
    console.log('hello world');
}
function doCalc(){
    //text box에 적힌 value가져오기
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    //두 수를 더한 결과. 현재 변수는 string
    //string >> integer
    var result = parseInt(num1) + parseInt(num2);

    //result -> span tag
    document.getElementById("result").innerHTML = result;


}

function CtoF(){
    var numC = document.getElementById("numC").value;
    var num1 = parseInt(numC);
    var result = ( num1 * 1.8 )+32;

    document.getElementById("result").innerHTML = result;
}

function feeCheck(){
    var NumAdult = parseInt(document.getElementById("sel1").value);
    var NumChild = parseInt(document.getElementById("sel2").value);
    var NumBaby = parseInt(document.getElementById("sel3").value);

    var radio = document.getElementsByName("check");

    if (radio[0].checked == true){
        var radioFee = 932000;
        var chkFee = (radioFee*(NumAdult+NumChild)) + ((radioFee*0.2)*NumBaby);
       // var Fee = (1000000 * NumAdult) + (800000 * NumChild) + (500000 * NumBaby);
    }else if (radio[1].checked == true){
        var radioFee = 525000;
        var chkFee = (radioFee*(NumAdult+NumChild)) + ((radioFee*0.2)*NumBaby);
    }else if (radio[2].checked == true){
        var radioFee = 1103350;
        var chkFee = (radioFee*(NumAdult+NumChild)) + ((radioFee*0.2)*NumBaby);
    }
    var tax = chkFee * 1.05;
    document.getElementById("result").innerHTML = tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function pushRadio(){
    var radio = document.getElementsByName("check");
    if (radio[0].checked){
        var radioFee = 932000;
    }else if (radio[1].checked){
        var radioFee = 525000;
    }else if (radio[2].checked){
        var radioFee = 1103350;
    }else {
        var radioFee="Check Please";
    }
    console.log(radioFee);
    document.getElementById("fee").innerHTML = radioFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
function exvar(){
    var a= 5;
    var b = 'acb';
    var c = new Date();
    var d = [1,2,3,4,5];
    var obj = {
        a : "1",
        b : "2",
        c : "3"
    }; //javascript object notation --> JSON
    var aa = {
        av: "tt",
        bv: 10.6,
        cv: [1,2,3,4,5],
        drive: function(){
            return 10;
            console.log("function in var")
        }
    }
    var type = aa.drive();
    console.log(type);
}*/

function doValidate(){
    var passwd = document.getElementById("pwd").value;

    //1. very strong 8자이상 숫자 문자 특수문자
    //2. strong 8자이상 숫자 문자
    //3. weak 8자 이상 숫자
    //4. very weak 8자 미만
var result ="";
    if ( passwd.length < 8){
        result =  "very weak";
    }else{
        if(isNumber(passwd)){
            result= "weak";
        }

    }

    document.getElementById("result").innerHTML=result;
}

function isNumber(param){
    var toInt = parseInt(param);
    if(toInt !== NaN && toInt > 9999999){
        return true;
    }else{
        return false;
    }
}

//1-6 정수
function getDiceNumber(){
    var r = Math.floor(Math.random()*6+1);
}