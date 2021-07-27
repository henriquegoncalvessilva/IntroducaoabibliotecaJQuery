function consultaCEP() {
	
	$(".barra-progresso").show();

	var cep = document.getElementById("cep").value;

	var url = "https://viacep.com.br/ws/" + cep + "/json";

	$.ajax({

		url: url,
		type: "GET",
		success: function(response){
			console.log(response);

			$("#titulo_cep").html("CEP: " + response.cep);
			$("#logradouro").html(response.logradouro);
			$("#uf").html(response.uf);
			$("#localidade").html(response.localidade);
			$("#bairro").html(response.bairro);
			$(".cep").show();
			$(".barra-progresso").hide();
			image = response.logradouro;
			
			getImage(response.localidade);
			console.log(response.localidade);
			},
		error: function (request, status, error) {
        alert("O CEP informado não existe ou está incorreto. Tente novamente.");
        $(".barra-progresso").hide();

    }
		
	})




}

function getImage(image){

	var urlPhoto = "https://pixabay.com/api/?key=5901757-ed0bd12a7ec9a7930257f1839&q="+ image +"&image_type=photo&pretty=true"



	$.ajax({

		url: urlPhoto,
		type: "GET",
		success: function(responseImage){
			console.log(responseImage);

			$(".img-thumbnail").attr("src",responseImage.hits[0].largeImageURL);
		
			},
		error: function (request, status, error) {
        alert("O CEP informado não existe ou está incorreto. Tente novamente.");
        $(".barra-progresso").hide();

    }
		
	})
}

$(function(){

	$(".cep").hide();
	$(".barra-progresso").hide();

});
