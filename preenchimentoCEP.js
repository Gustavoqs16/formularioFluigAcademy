$("#cep").blur(function(){
	$.getJSON("//viacep.com.br/ws/"+ $("#cep").val()+ "/json/", function(dados) {
		$("#inputLogradouro").val(dados.logradouro);
		$("#inputBairro").val(dados.bairro);
		$("#inputCidade").val(dados.localidade);
		$("#inputUf").val(dados.uf);
	})
});