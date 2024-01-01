function nivelDoJogador(vitorias, derrotas) {
    var nivel = "Ferro";
    var saldoVitorias = vitorias-derrotas; 

if (saldoVitorias < 10) {
     
 	console.log("O herói tem de saldo " + saldoVitorias + " vitorias");
 	console.log("Está no nível de " + nivel);
	}
}

   nivelDoJogador(7, 1);