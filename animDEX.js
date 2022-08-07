//  ATRALHOS
const seta = document.getElementById('seta')
const btn = document.getElementById('circulo_externo')
const tampa = document.getElementById('conteudo_frente')
const flip = document.getElementById('dex_outside_borda')
const zIndexC = document.getElementById('parte_cima_borda')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const tela = document.getElementById('tela')
const pokemon = document.getElementById('tela_imgPkm')

// FUNÇAO ABRIR DEX / FECHAR
function abrir_fechar_Dex() {

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
            tela.backgroundImagem = 'https://br.pinterest.com/pin/472033604686141620/'
            tela.style.backgroundColor = 'lavender'
            pokemon.style.display = 'block'
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
            pokemon.style.display = 'block'
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
}

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

btn.addEventListener("click", abrir_fechar_Dex)
seta.addEventListener("click", abrir_fechar_Dex)