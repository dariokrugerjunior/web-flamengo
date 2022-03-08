/* jQuery */
//$(): Usado em todas as funções que devem ser referenciadas no jQuery.
$(document).ready(function(){
    /// ready(): Associado a leitura do documento enquanto ele é carregado.
    $("input").blur(function(){
        /// blur(): Associado quando o input perde o foco.
     if($(this).val() == ""){
         /// usado para retornar o valor ou definir um valor do elemento
             $(this).css({"border" : "1px solid #F00"});
         }else{
            $(this).css({"border" : "1px solid #0000"});
            /// método define ou retorna uma ou mais propriedades de estilo para os elementos selecionados.
         }
    });
    $("#button").click(function(){
        ///aciona o evento click ou anexa uma função para ser executada quando ocorre um evento click
     var cont = 0;
     $("#formulario").each(function(){
        if($(this).val() == ""){
            $(this).css({"border" : "1px solid #F00"});
            cont++;
        }else{
            $(this).css({"border" : "1px solid #0000"});
        }
        });
     if(cont == 0)
         {
             $("#formulario").submit();
         }
    });
});
