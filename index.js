function operacaoComCarros() {
  // Simulação de uma operação que pode lançar uma exceção.
  // Vamos lançar uma exceção se o número de carros for negativo.
  const numeroDeCarros = -1;

  try {
    if (numeroDeCarros < 0) {
      throw new Error("Número de carros não pode ser negativo.");
    }

    // Simulação de alguma operação com carros.
    console.log("Operação com carros realizada com sucesso!");
  } catch (erro) {
    console.error("Erro:", erro.message);
  } finally {
    console.log("Este bloco sempre é executado, independentemente de exceções.");
  }
}

// Chamando a função