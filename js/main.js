var color= "white";


function inversion(){
// capturar valores del fomrulario
    let cNombre = document.getElementById("nombres") .value;
    let Telefono = document.getElementById("telefono") .value;
    let Email = document.getElementById("email") .value;
    let cMonto = document.getElementById("inversion") .value;
    let cTiempo = document.getElementById("tiempo") .value;
// capturar los contenedores 
    let contPre  = document.querySelector(".pre-simulation");
    let contPost  = document.querySelector(".post-simulation");
    let sNombres = document.getElementById("nombres-show");
    let sCorreo = document.getElementById("email-show");
    let sInteres = document.getElementById("interes-show");
    let sTiempo = document.getElementById("tiempo-show");
    let sTotal = document.getElementById("total-show");
    let sGanancia = document.getElementById("ganancia-show");
// cambiar los espacios
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");
// capturar los span y poner un valor predeterminado
    sNombres.innerHTML=(cNombre);
    sCorreo.innerHTML=(Email);

    switch (cTiempo) {
    case '1':
      sTiempo.innerText="12 MESES";
      sInteres.innerText="0.8%";

      totl=(cMonto*0.008);
      resul=parseFloat(totl)+parseFloat(cMonto);

      sTotal.innerHTML=(resul*12);
      sGanancia.innerHTML=(totl*12);

      break;
    case '2':
      sTiempo.innerText="24 MESES";
      sInteres.innerText="1.3%";

      
      totl2=((cMonto*1.3)/100);
      resul=parseFloat(totl2)+parseFloat(cMonto);

      sTotal.innerHTML=((resul*24));
      sGanancia.innerHTML=(totl2*24);

      break;
    case '3':
       sTiempo.innerText="36 MESES";
       sInteres.innerText="1.7%";

       
      totl3=((cMonto*1.7)/100);
      resul=parseFloat(totl3)+parseFloat(cMonto);

      sTotal.innerHTML=(resul)*36;
      sGanancia.innerHTML=(totl3*36);

       break;
    }


   









}