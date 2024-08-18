function helloWorld(){
    const input = document.querySelector('.texto');
    if(input.value){
        const p = document.querySelector('#paragrafo');
        p.innerHTML = `bem vindo a programação móvel ${input.value}`;
    }
}