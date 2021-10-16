// FUNÇAO API + IMAGEM
function start(pokemon = '', url_img_link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    axios.get(url)
        .then(resp => {
            let data = resp.data
            let sprite = data.sprites.front_default
            let spriteShiny = data.sprites.front_shiny
            url_img_link = url_img_link



            // SETANDO ID
            this.id = data.id
            let ident = document.getElementById('identificacao')
            ident.innerHTML = `#${id}`

            // SETANDO IMAGEM
            url_img = `${url_img_link}${id}.png`
            let tela_img = document.getElementById('tela_imgPkm')
            tela_img.src = url_img

            // SETANDO NOME
            let nome = pokemon
            let nomeC = nome[0].toUpperCase() + nome.substr(1)
            let name = document.getElementById('nome_pkm')
            name.innerHTML = `Name: ${nomeC}`

            //SETANDO PESO E ALTURA
            let altura = data.height
            let kg = data.weight
            let peso = document.getElementById('peso_pkm')
            let alt = document.getElementById('altura_pkm')
            peso.innerHTML = `Weight: ${kg}`
            alt.innerHTML = `Height: ${altura}`

            //SETANDO TIPAGEM
            let tipo = data.types
            let tipo1 = data.types[0].type.name
            let tipo_1 = tipo1[0].toUpperCase() + tipo1.substr(1)
            if (tipo[1] === undefined) {
                let tipo2 = tipo[1] = ''
                this.tipo_2 = tipo2
            } else {
                let tipo2 = tipo[1].type.name = tipo[1].type.name
                this.tipo_2 = tipo2[0].toUpperCase() + tipo2.substr(1)
            }
            let tipagem = document.getElementById('tipagem')
            tipagem.innerHTML = `Tipagem: ${tipo_1} / ${tipo_2}`



        })

        .catch(e => console.log('Processando dados da Pokedex...'))
}

// FUNÇAO BUSCAR POKEMON
function setando_nomes(valorT = 151, valorI = 0) {
    let url2 = `https://pokeapi.co/api/v2/pokemon?offset=${valorI}&limit=${valorT}`
    axios.get(url2)
        .then(resp => {
            data2 = resp.data.results

            data2.forEach(e => {
                let container_pokemons = document.getElementById('container_pokemons')
                let nomeP = e.name

                let div = document.createElement('div')
                div.className = 'container_names'
                div.id = nomeP

                let button = document.createElement('button')
                button.className = 'pokenames'
                let valor_btn = button.value = nomeP
                let nomeP2 = nomeP[0].toUpperCase() + nomeP.substr(1)
                button.innerHTML = `${nomeP2}`
                button.style.cursor = 'pointer'

                container_pokemons.append(div)
                div.append(button)

                div.onclick = function buscar(e) {
                    e.preventDefault()
                    let resultados = valor_btn
                    start(resultados)

                    // FUNÇAO SHINY
                    let sprite_change = document.getElementById('mudar_sprites')
                    sprite_change.value = resultados
                    sprite_change.addEventListener('click', e => {
                        e.preventDefault()

                        if (sprite_change.className == '') {
                            urlS = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`
                            sprite_change.innerHTML = 'SHINY VERSION'
                            start(sprite_change.value, urlS)
                        }
                    })
                }

            })
            let busca = document.getElementById('busca')
            busca.addEventListener('keydown', e => e.keyCode == 13 ? e.preventDefault() : null)

            filtrar = (event) => {
                const div = document.getElementById("container_pokemons")

                const pokemons = document.getElementsByClassName('container_names')

                namefilter = data2.filter(e => {
                    return e.name.startsWith(event.value.toLowerCase())
                })

                const container_pokemons = document.getElementById("container_pokemons")
                container_pokemons.innerHTML = ''
                container_pokemons.children.innerHTML = ""
                namefilter.forEach(e => {


                    let div = document.createElement('div')
                    div.className = 'container_filter'
                    div.style.display = 'flex'

                    container_pokemons.appendChild(div)



                    let name = e.name[0].toUpperCase() + e.name.substr(1)
                    let button = document.createElement("button")
                    button.style.cursor = 'pointer'
                    button.className = 'pokenames'
                    button.innerText = name
                    let btn_value = button.value = e.name


                    div.append(button)

                    div.onclick = function buscar(e) {
                        e.preventDefault()
                        let resultados = btn_value
                        start(resultados)

                        // FUNÇAO SHINY
                        let sprite_change = document.getElementById('mudar_sprites')
                        sprite_change.value = resultados
                        sprite_change.addEventListener('click', e => {
                            e.preventDefault()

                            if (sprite_change.className == '') {
                                urlS = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`
                                sprite_change.innerHTML = 'SHINY VERSION'
                                start(sprite_change.value, urlS)
                            }
                        })
                    }

                })
            }

        })
}
setando_nomes()


