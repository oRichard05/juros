form = document.getElementById('form')
calc = document.getElementById('mudar')
mont = document.getElementById('montante')
jur = document.getElementById('juros')
limpar = document.getElementById('limp')
multar = document.getElementById('multa')
comp = true
juros = 0
montante = 0

limpar.addEventListener('click', () => {
    jur.innerHTML = ''
        
    mont.innerHTML = ''

})

calc.addEventListener('click', () => {
    if (comp == false) {
        comp = true
        calc.innerHTML = 'composto'
    }else {
        calc.innerHTML = 'simples'
        comp = false
    }

})
 
form.addEventListener('submit', (event) => {
    event.preventDefault()
    formD = new FormData(form)
    capital = parseFloat(formD.get('inicial'))
    taxa = parseFloat(formD.get('taxa')) / 100
    tempo = parseFloat(formD.get('tempo'))
    multa = parseFloat(formD.get('multa')) / 100

    if (multar.value == '') {
        multa = 0
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
    jur.innerHTML = `
        <p>${juros.toFixed(2)}<p>
    `
        
    mont.innerHTML = `
        <p>${montante.toFixed(2)}<p>
    `


})