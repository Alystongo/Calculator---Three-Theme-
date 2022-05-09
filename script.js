$(document).ready(function (){
	
	var valor1, valor2, operation;
	
	$("input[name=btn]").click(function(){
		$('#visu').val($("#visu").val() + $(this).val());
	});
	
	$("#btnRe").click(function(){
		$("#visu").val(" ");
	});
	
	$("input[name=btnDel]").click(function(){
		var len = $("#visu").val().length;
		var valor = $("#visu").val();
		
		valor = valor.replace(valor.charAt(len - 1), "");
		$("#visu").val(valor);
	});
	
	$("input[name=btnMas]").click(function(){
		if($("#visu").val() != ' '){
			valor1 = parseFloat($("#visu").val());
			$("#visu").val(" ");
			$("#op").text($(this).val());
			operation = "soma";
		
		} else {
			alert("Informe algum valor");
		}
	});
	
	
	$("input[name=btnMen]").click(function(){
		if($("#visu").val() != ' '){
			valor1 = parseFloat($("#visu").val());
			$("#visu").val(" ");
			$("#op").text($(this).val());
			operation = "subtrair";
	
		} else {
			alert("Informe algum valor");
		}
	});
	
	
	$("input[name=btnMult]").click(function(){
		if($("#visu").val() != ' '){
			valor1 = parseFloat($("#visu").val());
			$("#visu").val(" ");
			$("#op").text($(this).val());
			operation = "multiplicar";
	
		} else {
			alert("Informe algum valor");
		}
	});
	
	
	$("input[name=btnDiv]").click(function(){
		if($("#visu").val() != ' '){
			valor1 = parseFloat($("#visu").val());
			$("#visu").val(" ");
			$("#op").text($(this).val());
			operation = "dividir";
	
		} else {
			alert("Informe algum valor");
		}
	});
	
	$("#btnIg").click(function(){
		if($("#visu").val() != ' '){
			valor2 = parseFloat($("#visu").val());
			
			
			if(operation == "soma"){
				$("#op").text(" ");
				$("#visu").val(valor1 + valor2);
			}
			else if(operation == "subtrair"){
				$("#op").text(" ");
				$("#visu").val(valor1 - valor2);
			}
			else if(operation == "multiplicar"){
				$("#op").text(" ");
				$("#visu").val(valor1 * valor2);
			}
			else if(operation == "dividir"){
				$("#op").text(" ");
				$("#visu").val(valor1 / valor2);
			}
		} else {
			alert("Informe um valor para adquirir o resultado da operação");
		}
	});
	
	
});