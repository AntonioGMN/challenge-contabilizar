const validarEntradaDeDados = (lancamento) => {
	const { cpf, valor } = lancamento;
	if (cpf === null || valor == null) return "Posso favor, insira os dados";

	if (isNaN(cpf)) return "Erro: valor precisa ser um numero";
	if (valor > 15000) return "Erro: valor não pode ser maior que R$ 15.000,00";
	if (valor < -2000) return "Erro: valor não pode ser inferior que -R$ 2.000,00";
	if (isNaN(cpf)) return "Erro: CPF deve conter apenas caracteres numéricos";
	if (!valideCpf(cpf)) return "Erro: CPF invalido";

	return null;
};

const recuperarSaldosPorConta = (lancamentos) => {
	const lancamentosOrdenados = [];
	const CPFs = [];
	const hash = {};

	for (const lancamento of lancamentos) {
		const { cpf, valor } = lancamento;
		if (hash[cpf] == undefined) {
			hash[cpf] = { ...lancamento };
			CPFs.push(cpf);
		} else {
			let valorEstilisado = parseFloat(hash[cpf].valor) + valor;
			if (valorEstilisado % 1 != 0) valorEstilisado = valorEstilisado.toFixed(2);
			hash[cpf] = { ...hash[cpf], valor: valorEstilisado };
		}
	}

	for (const cpf of CPFs) {
		lancamentosOrdenados.push(hash[cpf]);
	}

	return lancamentosOrdenados;
};

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
	let maiorNumero = Number.NEGATIVE_INFINITY;
	let menorNumero = Number.POSITIVE_INFINITY;
	let maior, menor;

	for (const lancamento of lancamentos) {
		const { valor } = lancamento;
		if (lancamento.cpf == cpf) {
			if (menorNumero > valor) {
				menor = lancamento;
				menorNumero = valor;
			}
			if (maiorNumero < valor) {
				maior = lancamento;
				maiorNumero = valor;
			}
		}
	}

	if (menor === maior) return [menor];

	return [menor, maior];
};

const recuperarMaioresSaldos = (lancamentos) => {
	const saldos = recuperarSaldosPorConta(lancamentos);
	const lancamentosOrdenados = saldos.sort((a, b) => b.valor - a.valor);

	if (lancamentosOrdenados.length > 2) {
		return [
			lancamentosOrdenados[0],
			lancamentosOrdenados[1],
			lancamentosOrdenados[2],
		];
	}

	return lancamentosOrdenados;
};

const recuperarMaioresMedias = (lancamentos) => {
	const lancamentosOrdenados = [];
	const CPFs = [];
	const medias = {};
	const soma = {};
	const contador = {};

	for (const lancamento of lancamentos) {
		const { cpf, valor } = lancamento;
		if (medias[cpf] == undefined) {
			medias[cpf] = { ...lancamento };
			contador[cpf] = 1;
			soma[cpf] = valor;
			CPFs.push(cpf);
		} else {
			contador[cpf] += 1;
			soma[cpf] += valor;
			const media = soma[cpf] / contador[cpf];
			medias[cpf] = { ...medias[cpf], valor: media.toFixed(2) };
		}
	}

	for (const cpf of CPFs) {
		lancamentosOrdenados.push(medias[cpf]);
	}

	return recuperarMaioresSaldos(lancamentosOrdenados);
};
