document.addEventListener('DOMContentLoaded', function(){
    // [] faz com que tu possa procurar por um atributo
    const botoes = this.querySelectorAll('[data-tab-button]')
    
    // const heroSection = this.querySelector('.hero');
    // const header = this.querySelector('.header')
    // const heroHeight = heroSection.clientHeight;

    // console.log(botoes)
    // console.log(heroHeight);

    // window.addEventListener('scroll', function(){
    //     //Captura a altura da página 
    //     const posicaoAtual = this.scrollY;

    //     if (posicaoAtual < heroHeight) {
    //         encobreHeader(header);
    //         console.log('menor')
    //     }
    //     else{
    //         mostraHeader(header);
    //         console.log('maior')
    //     }
    // })

    // Seção de atraççoes, configuração das abas
    botoes.forEach(function(botao){
        botao.addEventListener('click', function(b){
            // É necessario acessar o target primeiro, senao fica como indefinido
            // b.target.dataset.tabButton devolve o nome do parametro contido em data-tab-button
            // b não é o botão em si, mas sim o evento disparado pelo clique do botao, que tem vários parêmetros, tal como o target
            // esse sendo o objeto que disparou o evento
            apagaBordaBotoes()
            b.target.classList.add('characters__tabs__button--is-active')
            const tabNome = b.target.dataset.tabButton;
            console.log(tabNome)
            const tab = document.querySelector(`[data-tab-id=${tabNome}]`)
            apagaAbas()
            tab.classList.add('characters__display--is-active')
        })
    })
})


function apagaAbas(){
    const abas = document.querySelectorAll('[data-tab-id]')
    abas.forEach(function(aba){
        aba.classList.remove('characters__display--is-active')
    })
}

function apagaBordaBotoes(){
    const botoes = document.querySelectorAll('[data-tab-button]')
    botoes.forEach(function(botao){
        botao.classList.remove('characters__tabs__button--is-active')
    })
}

// function encobreHeader(header){
//     header.classList.add('header--is-hidden')
// }

// function mostraHeader(header){
//     header.classList.remove('header--is-hidden')
// }