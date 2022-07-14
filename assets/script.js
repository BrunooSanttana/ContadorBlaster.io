function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados para contagem!")
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            // CONTAGEM CRESCENTE 
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}... `
            }
        } else {
            // CONTAGEM DECRESCENTE 
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}... `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}