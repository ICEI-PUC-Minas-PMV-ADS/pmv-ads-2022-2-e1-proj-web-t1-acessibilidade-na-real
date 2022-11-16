<script type="text/javascript">
	
	//Esse código ainda não funciona!!!


	$("#cep").focusout(function(){
		//Início do Comando AJAX
		$.ajax({
			//O campo URL diz o caminho de onde virá os dados
			//É importante concatenar o valor digitado no CEP
			url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
			//Aqui você deve preencher o tipo de dados que será lido,
			//no caso, estamos lendo JSON.
			dataType: 'json',
			//SUCESS é referente a função que será executada caso
			//ele consiga ler a fonte de dados com sucesso.
			//O parâmetro dentro da função se refere ao nome da variável
			//que você vai dar para ler esse objeto.
			success: function(resposta){
				//Agora basta definir os valores que você deseja preencher
				//automaticamente nos campos acima.
				$("#logradouro").val(resposta.logradouro);
				$("#complemento").val(resposta.complemento);
				$("#bairro").val(resposta.bairro);
				$("#cidade").val(resposta.localidade);
				$("#uf").val(resposta.uf);
				//Vamos incluir para que o Número seja focado automaticamente
				//melhorando a experiência do usuário
				$("#numero").focus();
			}
		})
	});
</script>


function Checkfiles(){
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
}