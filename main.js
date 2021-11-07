var ButtonClicks = [];
function Arrays(variable) {
  ButtonClicks.push(variable);
}
function Output(thing) {
  let put = document.getElementById("container");
  document.getElementById("container").style.fontSize = "170%";
  put.innerHTML += thing;
}
function bracket1() {
  Output('(');
  Arrays('(');
}
function bracket2() {
  Output(')');
  Arrays(')');
}
function Del() {//istrina viska, kas buvo irasyta i div ir is masyvo
  document.getElementById("container").innerHTML = ""; 
  ButtonClicks = []; 
}
function AnyRoot() {//traukia pasirinkto laipsnio sakni
  Output('√');
  Arrays('**(1/');
  var next = ButtonClicks.length;
  Arrays(ButtonClicks[next-2].toString()+')');
}
function Degree() {//kelia pasirinktu laipsniu
  Output('^');
  Arrays('**');
}
function Percent() { //skaiciuoja procentus
  Output('%');
  Arrays('/100');
}
function Factorial() { //skaiciuoja faktoriala
  Output('!');
  let m = ButtonClicks.length;
  for(let i=ButtonClicks[m-1]-1; i>0; i--)
  {
    Arrays('*');
    Arrays(i.toString());
  }
}
function SquareRoot() { //traukia kvadratine sakni
  Output('√');
  Arrays('**(1/2)');
}
function Squared() { //kelia kvadratu
  Output('²');
  Arrays('**2');
}
function PI() { //pi yra 3.14 (daugina is pi)
  Output('π');
  Arrays('3.14');
}
function Divide() { //dalyba
  Output('/');
  Arrays('/');
}
function Function7() {
  Output('7');
  Arrays('7');
}
function Function8() {
  Output('8');
  Arrays('8');
}
function Function9() {
  Output('9');
  Arrays('9');
}
function Multiply() { //daugyba
  Output('*');
  Arrays('*');
}
function Function4() {
  Output('4');
  Arrays('4');
}
function Function5() {
  Output('5');
  Arrays('5');
}
function Function6() {
  Output('6');
  Arrays('6');
}
function Subtract() { //atimtis
  Output('-');
  Arrays('-');
}
function Function1() {
  Output('1');
  Arrays('1');
}
function Function2() {
  Output('2');
  Arrays('2');
}
function Function3() {
  Output('3');
  Arrays('3');
} 
function Add() { //sudetis
  Output('+');
  Arrays('+');
}
function Function0() {
  Output('0');
  Arrays('0');
}    
function Comma() {
  Output(',');
  Arrays('.');
}
function Equal() { 
  Output('=');
}
function Equation() {// nuo cia prasideda suvestos lygties sprendimas
  for(let i=0; i<ButtonClicks.length-1; i++) {
    if(ButtonClicks[i] == '**(1/2)')
    {
      var a = ButtonClicks[i+1];
      ButtonClicks[i+1]=ButtonClicks[i];
      ButtonClicks[i]=a;
    }
  }
  for(let i=0; i<ButtonClicks.length-1; i++) {
    if(ButtonClicks[i] == '**(1/') {
      var a = ButtonClicks[i+1];
      var b = ButtonClicks[i+2];
      ButtonClicks[i+1]=ButtonClicks[i];
      ButtonClicks[i]=b;
      ButtonClicks[i+2]=a;
    }
  }
  var x = ButtonClicks.join("");
  console.log(x);
  if(isNaN(eval(x))){
    alert("Atsakymo išvesti neįmanoma, nes jis nėra skaičius.\nRašykite naują lygtį.");
    FunctionDel();
  }
  else if (isFinite(eval(x))){
    Output(eval(x));
  }  
  else {
    alert("Atsakymo išvesti neįmanoma, nes jis yra begalinis.\nRašykite naują lygtį.");
    FunctionDel();
  }
}