 function moja(){
 window.alert("Ovaj sajt je van nase juresdikcije"); }

 
 function prosiri(name, trigger)
 {   
    var Zelj = document.getElementById(name);
    var uradi = document.getElementById(trigger);
    var tekst = document.createTextNode( ` aswfnqas wofhasha whawo udhfjawf 
    sfasfasf fasdfasfe gfraeg resgres 
    afaewfaewf faefaew fawefaewf ewfaewfwafe
    feaew fawef awefa wefawe braebhraege
    `);
    
if(uradi.textContent == "Proširi"){
  
  Zelj.textContent += tekst.textContent;
  
    uradi.textContent ="Smanji"; }
    else if(uradi.textContent == "Smanji"){
     const novo =  Zelj.textContent.split(`  `);
     Zelj.textContent = novo[0]; 
      uradi.textContent = "Proširi";
    }
    else console.log("nesto je trulo u tvom kodu");
    
}