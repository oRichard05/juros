form = document.getElementById('form')
mont = document.getElementById('montante')
jur = document.getElementById('juros')
limpar = document.getElementById('limp')
multar = document.getElementById('multa')

taxaSelec = document.getElementById('op-taxa')
tempSelec = document.getElementById('op-time')

btn_composto = document.getElementById('composto')
btn_simples = document.getElementById('simples')


comp = false
juros = 0
montante = 0

limpar.addEventListener('click', () => {
    jur.innerHTML = ''
        
    mont.innerHTML = ''

})

function alterar () {
    comp = true
    btn_composto.classList.remove('mudar')
    btn_composto.classList.add('selected')

    btn_simples.classList.remove('selected')
    btn_simples.classList.add('mudar')
}

function alterarc () {
    comp = false
    btn_composto.classList.remove('selected')
    btn_composto.classList.add('mudar')

    btn_simples.classList.remove('mudar')
    btn_simples.classList.add('selected')
}

 
form.addEventListener('submit', (event) => {
    event.preventDefault()
    formD = new FormData(form)
    capital = parseFloat(formD.get('capital'))
    taxa = parseFloat(formD.get('taxa')) / 100
    tempo = parseFloat(formD.get('tempo'))
    multa = parseFloat(formD.get('multa')) / 100

    if (multar.value == '') {
        multa = 0
    }

    if (taxaSelec.value == 'mensal' && tempSelec.value == 'anual') {
        tempo = tempo / 12
    }
    else if (taxaSelec.value == 'anual' && tempSelec.value == 'mensal') {
        taxa = taxa / 12
    }

    if (comp == false) {
        juros = capital * taxa * tempo
        juros = juros + capital * multa 
        montante = juros + capital
    }else {
        montante = capital * (taxa + 1) ** tempo
        juros = montante - capital
        juros = juros + capital * multa
        montante = montante + capital * multa
    }

    console.log(juros)
    console.log(montante)

    mont.innerHTML = montante.toFixed(2)

    jur.innerHTML = juros.toFixed(2)


})