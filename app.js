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