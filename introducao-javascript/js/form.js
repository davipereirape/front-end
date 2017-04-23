
// Eventos, Formulário e criação de Eventos
titulo.addEventListener("click", function(){
  console.log("Olá, posso chamar uma função anonima! ");
});

function mostraMensagem()
{
  console.log("Olá, eu fui clicado!");
}
// FIM VALIDAÇÂO mostraMensagem

// Tratando formulário
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  if (erros.length > 0)
  {
    exibeMensagensErro(erros);
    console.log("Paciente inválido!");
    return;
  }

  adicionaPacianteNaTabela(paciente);

  form.reset();
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
})
// FIM

// FUNÇÔES
function obtemPacienteDoFormulario(form)
{
  // Objeto javascript
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente)
{
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe)
{
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente)
{
  var erros = [];

  if (paciente.nome.length == 0)
    erros.push("Campo nome é obrigatório!");

  if (!validaPeso(paciente.peso) || paciente.peso.length == 0)
    erros.push("Peso inválido!");

  if (!validaAltura(paciente.altura) || paciente.altura.length == 0)
    erros.push("Altura inválida!");

  if (paciente.gordura.length == 0)
    erros.push("A taxa de gordura é obrigatória!")

  return erros;
}

function exibeMensagensErro(erros)
{
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacianteNaTabela(paciente)
{
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
