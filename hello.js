function hellowWord(){
    const input = document.querySelector('.texto');
    const p = document.querySelector('#paragrafo');
    p.innerHTML = `bem vindo a programação móvel ${input.value}`;
}