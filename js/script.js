
// exibir/ocultar o menu
function dropqmsomos() {
    var dropdown = document.getElementById("drop");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  // fechar qdo clicar fora
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("conteudo");
      for (var i = 0; i < dropdowns.length; i++) {
        var abrirDrop = dropdowns[i];
        if (abrirDrop.style.display === "block") {
            abrirDrop.style.display = "none";
        }
      }
    }
  }

  function mostrarMensagem() {
    // essa funçao pega todos os elementos colocados no formulario e os armazena em cada variavel, concatenando-os (o nome foi declarado no html)
    // o 0 no indice pega so o primeiro elemento de cada
    var nome = document.getElementsByName("nome")[0].value;
    var sobrenome = document.getElementsByName("sobrenome")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var telefone = document.getElementsByName("telefone")[0].value;

    // aqui a funçao vai construir a confirmaçao dos dados
    var mensagem = "Confirmação:\n\n";
    mensagem += "Nome: " + nome + " " + sobrenome + "\n";
    mensagem += "E-mail: " + email + "\n";
    mensagem += "Telefone: " + telefone + "\n";

    // usei alert p mostrar confirmaçao numa caixa de dialogo
    alert("Recebemos seus dados!");
    alert(mensagem);

    // aqui se retornar false, isso impede q o formulario seja enviado pra lugar nenhum, e a pagina nao recarrega
    return false;
}

  // Função para abrir e fechar o menu dropdown
// function dropserv() {
//     var dropdown = document.getElementById("dropdownservicos");
//     dropdown.classList.toggle("show");
//   }
  
