function ex1() {
    const input = document.getElementById('inp_ex1');
    const h3 = document.getElementById('h3_ex1');
    h3.innerHTML = input.value;
};

function ex2() {
    const inputA = Number(document.getElementById('inpA_ex2').value);
    const inputB = Number(document.getElementById('inpB_ex2').value);
    const h3 = document.getElementById('h3_ex2');
    h3.innerHTML = inputA + inputB;
};

function ex3() {
    const inputA = Number(document.getElementById('inpA_ex3').value);
    const inputB = Number(document.getElementById('inpB_ex3').value);
    const inputC = Number(document.getElementById('inpC_ex3').value);
    const inputD = Number(document.getElementById('inpD_ex3').value);
    const h3 = document.getElementById('h3_ex3');
    const media = (inputA + inputB + inputC + inputD)/4;
    let status = '';
    if (media < 7) {
        status = 'reprovado';
    } else {
        status = 'aprovado';
    };
    const string = `Média: ${media} | Situação: ${status}!`;
    h3.innerHTML = string;
};

function ex5() {
    const numero = Number(document.getElementById('inp_ex5').value);
    const h3 = document.getElementById('h3_ex5');
    let tabuada = '';
    for (let i = 0; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    };
    h3.innerHTML = tabuada;
};

function ex6() {
    const h3 = document.getElementById('h3_ex6');
    let maior = -1;
    let valor = 0;
    while (true) {
        valor = Number(prompt('Digite um valor positivo (-1 para parar):'));
        if (valor === -1) break;
        if (valor > maior) {
            maior = valor;
        };
    };
    h3.innerHTML = `Maior valor: ${maior}`;
};

function ex7() {
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const h3 = document.getElementById('h3_ex7');
    let impares = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 !== 0) {
            impares.push(vetor[i]);
        };
    };
    h3.innerHTML = `Ímpares: ${impares.join(', ')}`;
};

function ex8() {
    const input = document.getElementById('inp_ex8');
    const h3 = document.getElementById('h3_ex8');
    const invertido = input.value.split('').reverse().join('');
    h3.innerHTML = invertido;
};

function ex9() {
    const salarioMinimo = 1621;
    const funcionarios = [];
    for (let i = 0; i < 5; i++) {
        const nome = prompt(`Funcionário ${i + 1} - Nome:`);
        const idade = Number(prompt(`Funcionário ${i + 1} - Idade:`));
        const sexo = prompt(`Funcionário ${i + 1} - Sexo:`);
        const salario = Number(prompt(`Funcionário ${i + 1} - Salário:`));
        funcionarios.push({ nome, idade, sexo, salario });
    };
    let resultado = '';
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > salarioMinimo) {
            resultado += `${funcionarios[i].nome} - R$ ${funcionarios[i].salario}<br>`;
        };
    };
    document.getElementById('h3_ex9').innerHTML = resultado;
};

function somar(a, b) {
    return a + b;
};

function subtrair(a, b) {
    return a - b;
};

function multiplicar(a, b) {
    return a * b;
};

function dividir(a, b) {
    return a / b;
};

function ex10(operacao) {
    const inputA = Number(document.getElementById('inpA_ex10').value);
    const inputB = Number(document.getElementById('inpB_ex10').value);
    const h3 = document.getElementById('h3_ex10');
    let resultado = 0;
    if (operacao === 'soma') {
        resultado = somar(inputA, inputB);
    } else if (operacao === 'subtracao') {
        resultado = subtrair(inputA, inputB);
    } else if (operacao === 'multiplicacao') {
        resultado = multiplicar(inputA, inputB);
    } else if (operacao === 'divisao') {
        resultado = dividir(inputA, inputB);
    };
    h3.innerHTML = resultado;
};