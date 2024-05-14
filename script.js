document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

   
    var veiculo = document.getElementById("veiculo").value;
    var km = document.getElementById("km").value;
    var nivelCombustivel = Array.from(document.querySelectorAll('input[name="nivelCombustivel"]:checked')).map(function(el) {
      return el.value;
    }).join(', '); // Une os valores em uma string separada por vírgula
    var data = document.getElementById("data").value;
    var obs = document.getElementById("obs").value;

    if (veiculo.trim() === '' || km.trim() === '' || nivelCombustivel.trim() === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return; 
    }

    // Formatar a data no formato "dia/mês/ano"
    data = formatarData(data);

    // Adiciona os valores à tabela
    var tabela = document.getElementById("tabelaVeiculos").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var colunaVeiculo = novaLinha.insertCell(0);
    var colunaKm = novaLinha.insertCell(1);
    var colunaNivelCombustivel = novaLinha.insertCell(2);
    var colunaData = novaLinha.insertCell(3);
    var colunaObs = novaLinha.insertCell(4);

    colunaVeiculo.innerHTML = veiculo;
    colunaKm.innerHTML = km;
    colunaNivelCombustivel.innerHTML = nivelCombustivel;
    colunaData.innerHTML = data;
    colunaObs.innerHTML = obs;
  
    document.getElementById("veiculo").value = "";
    document.getElementById("km").value = "";
    document.getElementById("obs").value = "";

    var checkboxes = document.querySelectorAll('input[name="nivelCombustivel"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });

    document.getElementById("formVeiculo").submit();
  });
});

// Função para formatar a data no formato "dia/mês/ano"
function formatarData(data) {
  const dataObj = new Date(data);
  const dia = dataObj.getUTCDate().toString().padStart(2, '0');
  const mes = (dataObj.getUTCMonth() + 1).toString().padStart(2, '0'); // Adiciona +1 ao mês pois o mês começa em 0
  const ano = dataObj.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
