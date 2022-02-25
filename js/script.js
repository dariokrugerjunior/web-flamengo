/* jQuery */
$(document).ready(function(){
    $("input").blur(function(){
     if($(this).val() == ""){
             $(this).css({"border" : "1px solid #F00"});
         }else{
            $(this).css({"border" : "1px solid #0000"});
         }
    });
    $("#button").click(function(){
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
