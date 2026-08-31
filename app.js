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