var tempo = 1.5e3;
$('#myAlert').hide();

function countdown() {
    if ((tempo - 1) >= -1) {

        // Pega a parte inteira dos minutos
        var min = parseInt(tempo / 60);
        // Calcula os segundos restantes
        var seg = tempo % 60;

        // Formata o número menor que dez, ex: 08, 07, ...
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (seg <= 9) {
            seg = "0" + seg;
        }

        // Cria a variável para formatar no estilo hora/cronômetro
        horaImprimivel = + min + ':' + seg;
        //JQuery pra setar o valor
        $("#timer").html(horaImprimivel);

        // Define que a função será executada novamente em 1000ms = 1 segundo
        setTimeout('countdown()', 1000);

        // diminui o tempo
        tempo--;

        // Quando o contador chegar a zero faz esta ação
    } 
    else {
        $('#myAlert').show().fadeout(5000);
    }

}

// Chama a função ao carregar a tela
