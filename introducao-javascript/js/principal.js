console.log("Olá Mundo."); // Exibe uma mensagem no console do navegador. Para abrir, teclar f12 para modo inspect do navegador.
console.log(document); // Exibe todo código escrito na página.
console.log(document.querySelector("h1")); // Pesquisa pelo conteúdo da tag h1 da página.

// Manipulando o valor da tag h1
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Davi Nutrição";
// Fim

// Boas práticas
// O querySelector nos fornece várias formas de pesquisar o conteúdo de uma tag, uma delas é através do class atraido à tag.
titulo = document.querySelector(".titulo"); // pesquisando pela classe, garante que se a tag for alterada para h2, ainda assim, acharemos.
console.log(titulo);
// FIM

// Variáveis e Operadores
// Através do . procuramos por classe e através da # procuramos por id das tags
var primeiroPaciente = document.querySelector("#primeiro-paciente");
console.log(primeiroPaciente); // tr

var tdPeso = primeiroPaciente.querySelector(".info-peso");
console.log(tdPeso); // td
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = primeiroPaciente.querySelector(".info-altura");
console.log(tdAltura);
var altura = tdAltura.textContent;
console.log(altura);

var pesoValido = true;
var alturaValida = true;

var tdIMC = primeiroPaciente.querySelector(".info-imc");

// Operadores lógicos
if (peso <= 0  || peso > 1000)
{
  console.log("Peso inválido!");
  pesoValido = false;
  tdIMC.textContent = "Peso inválido!";
}

if (altura <= 0  || altura > 3.00)
{
  console.log("Altura inválida!");
  alturaValida = false;
  tdIMC.textContent = "Altura inválida!"
}

if (pesoValido && alturaValida)
{
  tdIMC.textContent = peso / (altura * altura);
}
// FIM

// Arrays, Loop e Estilos
var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++ )
{
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var pesoValido = true;
  var alturaValida = true;

  var tdIMC = paciente.querySelector(".info-imc");

  // Operadores lógicos
  if (peso <= 0  || peso > 1000)
  {
    pesoValido = false;
    tdIMC.textContent = "Peso inválido!";
    paciente.style.backgroundColor = "lightcoral"; // alterando a cor de fundo da tr na mão.
  }

  if (altura <= 0  || altura > 3.00)
  {
    alturaValida = false;
    tdIMC.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido");  // utilizando classe css para alterar a cor, atribuindo class à tr.
  }

  if (pesoValido && alturaValida)
  {
    tdIMC.textContent = (peso / (altura * altura)).toFixed(2);
  }
}
// FIMM
