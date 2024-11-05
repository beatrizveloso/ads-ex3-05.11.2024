function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').textContent = "Por favor, insira todas as notas corretamente.";
        return;
    }
    
    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;
    
    const mediaFinal = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
    
    document.getElementById('resultado').textContent = "A média final do aluno é: " + mediaFinal.toFixed(2);
}