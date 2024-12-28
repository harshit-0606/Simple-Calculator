let string = ""
let buttons = document.querySelectorAll(".button");
// jin jin ki class button hai unhe access kar lega one by one

//in buttons ka ek array banao pir unpe for each loop laga

Array.from(buttons).forEach((b) => {
  b.addEventListener('click', (e) => {
    //console.log(e.target.innertext)
    if(e.target.innerText == "="){
      string = eval(string);
      console.log(string);
     document.querySelector(`input`).value = string; //final value show kaega input me
    }
     else if(e.target.innerText == "C"){
        string = "";
       document.querySelector(`input`).value = string;
       
       
      }
   else { console.log(e.target.innrtText);
    string = string + e.target.innerText;
    console.log(string);
    document.querySelector(`input`).value = string; // value ko show karega input me
        }
  });
});