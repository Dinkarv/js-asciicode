var initialstr = 'Vrphwklqj phdqlqjixo'
str = initialstr.split('')

for(var i=0; i<=str.length-1; i++){
  if(str[i]==str[i].toUpperCase()){
    var code = str[i].charCodeAt(0);

    if(code==88){
      code = 65
    }else if(code==89){
      code = 66
    }else if(code == 90){
      code = 67
    }else{
    code=code+3;
    }
    var char = String.fromCharCode(code);
    str[i]=char;
  }else if(str[i]==str[i].toLowerCase()){
    var code = str[i].charCodeAt(0);
    //console.log(code)
    if(code==120){
      code = 97
    }else if(code==121){
      code = 98
    }else if(code == 122){
      code = 99
    }else{
    code=code+3;
    }
    var char = String.fromCharCode(code);
    str[i]=char;
  }
}

str1 = str.join('');
document.getElementById('startString').innerHTML = "Initial String is :"+initialstr;
document.getElementById('finalString').innerHTML = "Final Answer is: "+str1
document.getElementById('description').innerHTML = 
"Task : To change each character to another by replacing with ASCII character+2"
//console.log(str); //Yuskznotm#skgtotmlar

