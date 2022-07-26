function info() {

  var name=document.getElementById('fn').value;
  var lname=document.getElementById('ln').value;
  var age=document.getElementById('age').value;
  var gm=document.getElementById('gm');
  var gf=document.getElementById('gf');
  var gender="";
  if(gm.checked==true)
  {
    gender="male";
  }
  else if(gf.checked==true)
  {
    gender="female";
  }
  var num=document.getElementById('num').value;
  var emai=document.getElementById('em').value;
  var psw1=document.getElementById('psw1').value;
  var psw2=document.getElementById('psw2').value;
  var out="";
  if(psw1 == psw2)
  {
    out="Your account is created";
  }
  else
  {
       out="Your entered password is mismatched";
  }
  alert("Your Deatils are: ");
  alert("your full name"+" : "+name+" "+lname+"\n"+"Your age is "+" : "+age+"\n"+"Your gender "+" : "+gender+"\n"+"your mobile nuimber is"+" : "+num+"\n"+"Your Email id "+" : "+emai+"\n"+out );
}
