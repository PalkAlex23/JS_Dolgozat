export function szovegesKimenet(lista) {
    const tartalomELEM = document.querySelector(".tartalom")
    let txt = "";
    for (let i = 0; i < lista.length; i++) {
        txt += `<div class="elem">
        <p>Neve: ${lista[i].nev}</p>
        <p>Kutyafajta: ${lista[i].fajta}</p>
        <p>Életkora: ${lista[i].kor}</p>
        </div>`
    }
    tartalomELEM.innerHTML += txt;
}

export function hatterValtozas() {
    const tartalomELEMEK = document.querySelectorAll(".elem")
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK[i].addEventListener("mouseover", function() {
            tartalomELEMEK[i].classList.add("kiv")
        })
    }
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK[i].addEventListener("mouseout", function() {
            tartalomELEMEK[i].classList.remove("kiv")
        })
    }
}

export function kivalasztas() {
    const KIVALASZTOTTAK = []
    const tartalomELEMEK = document.querySelectorAll(".elem p")
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK[i].addEventListener("click", function() {
            const kivalasztottELEM = document.querySelector(".kivalasztott")
            for (let index = 0; index < KIVALASZTOTTAK.length; index++) {
                if (tartalomELEMEK[i] === KIVALASZTOTTAK[index]) {
                    kivalasztottELEM.innerHTML += ""
                }
            }
            let txt = `<ul>
                <li>${tartalomELEMEK[i].innerHTML}</li>
            </ul>`
            kivalasztottELEM.innerHTML += txt
            KIVALASZTOTTAK.push(tartalomELEMEK[i].innerHTML)
            console.log(KIVALASZTOTTAK)
        })
    }
    console.log(KIVALASZTOTTAK)
}