var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  console.log(event.target);
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
      event.target.parentNode.remove();
  }, 500);

});

//pacientes.forEach(function(paciente){
  //paciente.addEventListener("dblclick", function(){
    //console.log("recebi double click!");
    //this.remove();
  //});
//});
