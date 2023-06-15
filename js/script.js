form = document.getElementById('form')
mont = document.getElementById('montante')
jur = document.getElementById('juros')
limpar = document.getElementById('limp')
multar = document.getElementById('multa')

taxaSelec = document.getElementById('op-taxa')
tempSelec = document.getElementById('op-time')

comp = true
juros = 0
montante = 0

limpar.addEventListener('click', () => {
    jur.innerHTML = ''
        
    mont.innerHTML = ''

})

function alterarC () {
    comp = true
}

function alterarS () {
    comp = false
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

    mont.innerHTML = `
        <p>valor total final<p>
        <p>R$${montante.toFixed(2)}<p>
    `

    jur.innerHTML = `
        <p>total em juros<p>
        <p>R$${juros.toFixed(2)}<p>
    `


})