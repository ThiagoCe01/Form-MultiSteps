
document.getElementById('cep').addEventListener('blur', function(){
    let cep = this.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then (response =>response.json())
    .then(data =>{
        setTimeout((async) =>{
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        },   1000)
    } )
    .catch(erro => console.error('Erro:', erro));
    })


    // -------------------------------------------// 

    function mascaraCep(cepField) {
        let cep = cepField.value;
        cep = cep.replace(/\D/g, ""); // Remove tudo o que não é dígito
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2"); // Coloca hífen entre o quinto e o sexto dígitos
        cepField.value = cep; // Retorna o valor formatado para o campo de texto
      }



      /// ----------------------------------------- //
      function mascaraTelefone(telField) {
        let tel = telField.value;
        tel = tel.replace(/\D/g, ""); // Remove tudo o que não é dígito
        tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
        tel = tel.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen antes dos quatro últimos dígitos
        telField.value = tel; // Retorna o valor formatado para o campo de texto
      }