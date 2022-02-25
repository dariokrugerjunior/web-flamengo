function validaContato(){

	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");

	if(!expRegNome.test(document.meuForm.nome.value)){
		alert("Preencha o campo Nome corretamente!");
		document.meuForm.nome.focus();
		return false;
    }

    if(!document.meuForm.email.value){
        alert('Preencha o campo E-mail.');
        document.meuForm.email.focus();
        return false;
    }
    
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if(!expRegFone.test(document.meuForm.telefone.value)){
		alert("Preencha o campo Telefone corretamente!");
		document.meuForm.telefone.focus();
		return false;
    }

    var expRegCpf = new RegExp("[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}");
    if(!expRegCpf.test(document.meuForm.cpf.value)){
        alert("Preencha o campo Cpf corretamente!");
        document.meuForm.cpf.focus();
        return false;
    }

    
    if(!document.meuForm.nascimento.value){
        alert('Preencha o campo Nascimento.');
        document.meuForm.nascimento.focus();
        return false;
    }

    const dataAtual = new Date();
    const nascimento = new Date(document.meuForm.nascimento.value)
    if(nascimento > dataAtual){
        alert('Seu nacimento é maior que a data atual');
        return false
    }

    if(!document.meuForm.sexo.value){
        alert('Preencha o campo Sexo.');
        return false;
    }
}