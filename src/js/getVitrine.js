$(document).ready(function () {
    $.getJSON('../moto.json', function(data) {
        
        var produtos = '';
        $.each(data, function(index, element) {
            console.log(element)
            
            var count = Object.keys(element).length;
            console.log(count);
            
            var i;
            
            for (i = 1; i < count+1; i++) {
                produtos += 
                '<div class="produtos-card">'
                    + '<div class="produtos-desconto">'
                        + '<span>-30%</span>'
                    + '</div>'

                    + '<img src="'+element[i].image + '"' +'/>'
                    
                    + '<div class="produtos-text">'
                        + '<p class="produtos-nome">'+element[i].name+'</p>'
                        + '<p class="produtos-valorAntigo">De: R$ 2.000,00</p>'
                        + '<p class="produtos-preco">Por: R$'+element[i].price+' em até <b>12X</b> de <b>R$ 149,91</b></p>'
                    + '</div>'
                    + '<button class="btn btn-buy">COMPRAR</button>'
                + '</div>';

                $("#vitrineProdutos").html(produtos);
            }
        });
        
        
    });
})