//  ATRALHOS
let seta = document.getElementById('seta')
let btn = document.getElementById('circulo_externo')
let tampa = document.getElementById('conteudo_frente')
let flip = document.getElementById('dex_outside_borda')
let zIndexC = document.getElementById('parte_cima_borda')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let tela = document.getElementById('tela')

// FUNÇAO ABRIR DEX / FECHAR
btn.addEventListener('click', function abrir_fechar_Dex() {

    // CORREÇAO DE BUG DA ABERTURA DA POKEDEX
    btn.removeEventListener('click', abrir_fechar_Dex)
    
    // ABRIR DEX
    if (tampa.className == 'fecharDex' || tampa.className == '') {

        tampa.style.zIndex = 4

        abrir = tampa.classList
        abrir.remove('fecharDex')
        abrir.add('abrirDex')

        setTimeout(() => {
            blue.style.backgroundColor = 'blue'
        }, 750)

        setTimeout(() => {
            green.style.backgroundColor = 'rgb(0, 255, 0)'
            flip.style.display = 'none'
        }, 2000)

        setTimeout(() => {
            yellow.style.backgroundColor = 'yellow'
            tela.style.backgroundColor = 'lavender'
        }, 4000)

        // FECHAR DEX    
    } else if (tampa.className == 'abrirDex'){  

        fechar = tampa.classList
        abrir.remove('abrirDex')
        fechar.add('fecharDex')

        blue.style.backgroundColor = 'black'

        let tela_img = document.getElementById('tela_imgPkm')
        tela_img.src = ''

        let name = document.getElementById('nome_pkm')
        name.innerHTML = ''

        let peso = document.getElementById('peso_pkm')
        let alt = document.getElementById('altura_pkm')
        peso.innerHTML = ''
        alt.innerHTML = ''

        let tipagem = document.getElementById('tipagem')
        tipagem.innerHTML = ''

        let ident = document.getElementById('identificacao')
        ident.innerHTML = ''

        
        setTimeout(() => {
            tela.style.backgroundColor = 'black'
            green.style.backgroundColor = 'black'
            flip.style.display = 'flex'
            tampa.style.zIndex = 2
        }, 2000)
    

        setTimeout(() => {
            yellow.style.backgroundColor = 'black'
        }, 3000)
    }

    // CORREÇAO DE BUG DA ABERTURA DA POKEDEX
    setTimeout(() => {
        btn.addEventListener('click', abrir_fechar_Dex)
    }, 3500)
    
})

// FUNÇOES PARA DESBUGAR A DEX
tampa.onmouseover = function desbugarBotao1() {
    zIndexC.style.zIndex = 3
}

btn.onmouseout = function desbugarBotao2() {
    zIndexC.style.zIndex = 1
}


// FUNÇAO ABRIR DEX / FECHAR


setTimeout(() => {
    let pokeball = document.getElementById('poke_gif')
        pokeball.className = 'pokeball_gif'
        pokeball.src = '../Imgs/pokeball_troca_gif.png'
}, 2400);

