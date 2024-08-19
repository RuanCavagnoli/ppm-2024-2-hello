function helloWorld(){
    const input = document.querySelector('.texto');
    const section = document.querySelector('section')
    if(input.value){
        const p = document.createElement('p');
        p.innerHTML = `bem vindo a programação móvel ${input.value}`;
        section.appendChild(p);
        limpaInput();
    }
}


function limpaInput(){
    const input = document.querySelector('.texto');
    input.value = '';
}

