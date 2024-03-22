export function szovegesKimenet(lista) {
    const tartalomELEM = $(".tartalom")
    let txt = "";
    for (let i = 0; i < lista.length; i++) {
        txt += `<div class="elem">
        <p>Neve: ${lista[i].nev}</p>
        <p>Kutyafajta: ${lista[i].fajta}</p>
        <p>Életkora: ${lista[i].kor}</p>
        </div>`
    }
    tartalomELEM.html(txt);
}

export function hatterValtozas() {
    const tartalomELEMEK = $(".elem")
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK.eq(i).on("mouseenter", function() {
            tartalomELEMEK.eq(i).addClass("kiv")
        })
    }
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK.eq(i).on("mouseleave", function() {
            tartalomELEMEK.eq(i).removeClass("kiv")
        })
    }
}

export function kivalasztas() {
    const KIVALASZTOTTAK = []
    let txt = ""
    const tartalomELEMEK = $(".elem p")
        tartalomELEMEK.on("click", function(event) {
            const kivalasztottELEM = $(".kivalasztott")
            for (let index = 0; index < KIVALASZTOTTAK.length; index++) {
                if ($(event.target) === KIVALASZTOTTAK[index]) {
                    kivalasztottELEM.html("")
                }
            }
            txt += `<ul>
                <li>${$(event.target).html()}</li>
            </ul>`
            kivalasztottELEM.html(txt)
            KIVALASZTOTTAK.push($(event.target))
            console.log(KIVALASZTOTTAK)
        })
    console.log(KIVALASZTOTTAK)
}