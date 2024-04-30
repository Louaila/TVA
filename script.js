function calculateTVA() {
    const amountInput = document.getElementById('montant');
    const typeHT = document.getElementById('tva_ht');
    const rateSelect = document.getElementById('taux');
    const resultElement = document.getElementById('resultat');




    const montant = parseFloat(amountInput.value);
    const taux = parseFloat(rateSelect.value);

console.log(taux);
console.log(montant);


    if (!isNaN(montant) && montant >= 0) {
        let resultat = 0;

        if (typeHT.checked) {
            resultat = montant * (1 + taux / 100);
            resultElement.textContent = `TTC : ${resultat.toFixed(2)} €`;
        } else {
            resultat = montant / (1 + taux / 100);
            resultElement.textContent = `HT : ${resultat.toFixed(2)} €`;
        }
    } else {
        resultElement.textContent = 'Veuillez entrer un montant valide.';
    }
	console.log(resultElement.textContent);
}
