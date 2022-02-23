/*function validaContato(){

    if(document.meuForm.nome.value==""){
        alert('Preencha o campo Nome.');
        document.meuForm.nome.focus();
        return false;
    }

    if(document.meuForm.telefone.value==""){
        alert('Preencha o campo Telefone.');
        document.meuForm.telefone.focus();
        return false;
    }

}*/

function validaContato(){

    var nome = document.meuForm.nome.value;
	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");

	if(!expRegNome.test(nome)){
		alert("Preencha o campo Nome corretamente!");
		document.meuForm.nome.focus();
		return false;
    }

    if(document.meuForm.email.value==""){
        alert('Preencha o campo E-mail.');
        document.meuForm.email.focus();
        return false;
    }
    
    var fone = document.meuForm.telefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if(!expRegFone.test(fone)){
		alert("Preencha o campo Telefone corretamente!");
		document.meuForm.telefone.focus();
		return false;
    }
    
    if(document.meuForm.calendario.value==""){
        alert('Preencha o campo Calendário.');
        document.meuForm.calendario.focus();
        return false;
    }

    if(document.meuForm.sexo.value==""){
        alert('Preencha o campo Sexo.');
        return false;
    }

    if(document.meuForm.checkbox.checked==false){
        alert('Preencha o campo Checkbox.');
        return false;
    }
}

function createButtonEnviar(){
    
    var elemento = document.getElementById("button");
    
    if(document.meuForm.checkbox.checked==true){
  
        var input = document.createElement("input");
        
        input.setAttribute("type", "submit");
        input.setAttribute("value", "Enviar");
        input.setAttribute("class", "button enviar"); 
        
        elemento.appendChild(input);
        
    }else{

        if (elemento.parentNode)
        elemento.removeChild(elemento.firstChild);
		
    }
}