
function mediaAluraFE01() {
    localStorage.setItem("tabeladia01", document.tabelalinha01.tabeladias01.value);
}

function mediaAluraFE02() {
    localStorage.setItem("tabeladia02", document.tabelalinha02.tabeladias02.value);
}

function mediaAluraFE03() {
    localStorage.setItem("tabeladia03", document.tabelalinha03.tabeladias03.value);
}

function mediaAluraFEFinal() {
    var valor01 = document.getElementById("valor-dia01")
    valor01.innerHTML = localStorage.getItem("tabeladia01")

    var valor02 = document.getElementById("valor-dia02")
    valor02.innerHTML = localStorage.getItem("tabeladia02")

    var valor03 = document.getElementById("valor-dia03")
    valor03.innerHTML = localStorage.getItem("tabeladia03")

    calcularMedia()
}

function calcularMedia() {
    var valorMedia01 = parseInt(localStorage.getItem("tabeladia01"))
    var valorMedia02 = parseInt(localStorage.getItem("tabeladia02"))
    var valorMedia03 = parseInt(localStorage.getItem("tabeladia03"))

    var valorFinal = ((valorMedia01 + valorMedia02 + valorMedia03)/3).toFixed(1)

    exibirNaTela(valorFinal)
}

function exibirNaTela(valorFinal) {

    var imprimirNaTela = "<h4 class='resultadoMedia' id='resultadoMedia'>A sua média é de " + valorFinal + "</h4>"

    var exibirTela = document.getElementById("imprimir")
    exibirTela.innerHTML = imprimirNaTela
}


function mediaAluraPJS04() {
    localStorage.setItem("tabeladia04PJS", document.tabelalinha04PJS.tabeladias04PJS.value);
}

function mediaAluraPJS05() {
    localStorage.setItem("tabeladia05PJS", document.tabelalinha05PJS.tabeladias05PJS.value);
}

function mediaAluraPJS06() {
    localStorage.setItem("tabeladia06PJS", document.tabelalinha06PJS.tabeladias06PJS.value);
}

function mediaAluraPJS07() {
    localStorage.setItem("tabeladia07PJS", document.tabelalinha07PJS.tabeladias07PJS.value);
}

function mediaAluraPJSFinal() {
    var valor04PJS = document.getElementById("valor-dia04PJS")
    valor04PJS.innerHTML = localStorage.getItem("tabeladia04PJS")

    var valor05PJS = document.getElementById("valor-dia05PJS")
    valor05PJS.innerHTML = localStorage.getItem("tabeladia05PJS")

    var valor06PJS = document.getElementById("valor-dia06PJS")
    valor06PJS.innerHTML = localStorage.getItem("tabeladia06PJS")

    var valor07PJS = document.getElementById("valor-dia07PJS")
    valor07PJS.innerHTML = localStorage.getItem("tabeladia07PJS")

    calcularMediaPJS()
}

function calcularMediaPJS() {
    var valorMedia04PJS = parseInt(localStorage.getItem("tabeladia04PJS"))
    var valorMedia05PJS = parseInt(localStorage.getItem("tabeladia05PJS"))
    var valorMedia06PJS = parseInt(localStorage.getItem("tabeladia06PJS"))
    var valorMedia07PJS = parseInt(localStorage.getItem("tabeladia07PJS"))

    var valorFinalPJS = ((valorMedia04PJS + valorMedia05PJS + valorMedia06PJS + valorMedia07PJS)/7).toFixed(1)

    exibirNaTelaPJS(valorFinalPJS)
}

function exibirNaTelaPJS(valorFinalPJS) {

    var imprimirNaTelaPJS = "<h4 class='resultadoMedia' id='resultadoMediaPJS'>A sua média é de " + valorFinalPJS + "</h4>"

    var exibirTelaPJS = document.getElementById("imprimirPJS")
    exibirTelaPJS.innerHTML = imprimirNaTelaPJS
}

function mediaAluraTPW01() {
    localStorage.setItem("tabeladia01TPW", document.tabelalinha01TPW.tabeladias01TPW.value);
}

function mediaAluraTPW02() {
    localStorage.setItem("tabeladia02TPW", document.tabelalinha02TPW.tabeladias02TPW.value);
}

function mediaAluraTPW03() {
    localStorage.setItem("tabeladia03TPW", document.tabelalinha03TPW.tabeladias03TPW.value);
}

function mediaAluraTPW04() {
    localStorage.setItem("tabeladia04TPW", document.tabelalinha04TPW.tabeladias04TPW.value);
}


function mediaAluraTPWFinal() {
    var valor01TPW = document.getElementById("valor-dia01TPW")
    valor01TPW.innerHTML = localStorage.getItem("tabeladia01TPW")

    var valor02TPW = document.getElementById("valor-dia02TPW")
    valor02TPW.innerHTML = localStorage.getItem("tabeladia02TPW")

    var valor03TPW = document.getElementById("valor-dia03TPW")
    valor03TPW.innerHTML = localStorage.getItem("tabeladia03TPW")

    var valor04TPW = document.getElementById("valor-dia04TPW")
    valor04TPW.innerHTML = localStorage.getItem("tabeladia04TPW")

    calcularMediaTPW()
}

function calcularMediaTPW() {
    var valorMedia01TPW = parseInt(localStorage.getItem("tabeladia01TPW"))
    var valorMedia02TPW = parseInt(localStorage.getItem("tabeladia02TPW"))
    var valorMedia03TPW = parseInt(localStorage.getItem("tabeladia03TPW"))
    var valorMedia04TPW = parseInt(localStorage.getItem("tabeladia04TPW"))

    var valorFinalTPW = ((valorMedia01TPW + valorMedia02TPW + valorMedia03TPW + valorMedia04TPW)/4).toFixed(1)

    exibirNaTelaTPW(valorFinalTPW)
}

function exibirNaTelaTPW(valorFinalTPW) {

    var imprimirNaTelaTPW = "<h4 class='resultadoMedia' id='resultadoMediaTPW'>A sua média é de " + valorFinalTPW + "</h4>"

    var exibirTelaTPW = document.getElementById("imprimirTPW")
    exibirTelaTPW.innerHTML = imprimirNaTelaTPW
}

function mediaAluraTAT05() {
    localStorage.setItem("tabeladia05TAT", document.tabelalinha05TAT.tabeladias05TAT.value);
}

function mediaAluraTAT06() {
    localStorage.setItem("tabeladia06TAT", document.tabelalinha06TAT.tabeladias06TAT.value);
}

function mediaAluraTAT07() {
    localStorage.setItem("tabeladia07TAT", document.tabelalinha07TAT.tabeladias07TAT.value);
}

function mediaAluraTATFinal() {
    var valor05TAT = document.getElementById("valor-dia05TAT")
    valor05TAT.innerHTML = localStorage.getItem("tabeladia05TAT")

    var valor06TAT = document.getElementById("valor-dia06TAT")
    valor06TAT.innerHTML = localStorage.getItem("tabeladia06TAT")

    var valor07TAT = document.getElementById("valor-dia07TAT")
    valor07TAT.innerHTML = localStorage.getItem("tabeladia07TAT")

    calcularMediaTAT()
}

function calcularMediaTAT() {
    var valorMedia05TAT = parseInt(localStorage.getItem("tabeladia05TAT"))
    var valorMedia06TAT = parseInt(localStorage.getItem("tabeladia06TAT"))
    var valorMedia07TAT = parseInt(localStorage.getItem("tabeladia07TAT"))

    var valorFinalTAT = ((valorMedia05TAT + valorMedia06TAT + valorMedia07TAT)/3).toFixed(1)

    exibirNaTelaTAT(valorFinalTAT)
}

function exibirNaTelaTAT(valorFinalTAT) {

    var imprimirNaTelaTAT = "<h4 class='resultadoMedia' id='resultadoMediaTAT'>A sua média é de " + valorFinalTAT + "</h4>"

    var exibirTelaTAT = document.getElementById("imprimirTAT")
    exibirTelaTAT.innerHTML = imprimirNaTelaTAT
}

function mediaAluraAFC01() {
    localStorage.setItem("tabeladia01AFC", document.tabelalinha01AFC.tabeladias01AFC.value);
}

function mediaAluraAFC02() {
    localStorage.setItem("tabeladia02AFC", document.tabelalinha02AFC.tabeladias02AFC.value);
}

function mediaAluraAFC03() {
    localStorage.setItem("tabeladia03AFC", document.tabelalinha03AFC.tabeladias03AFC.value);
}

function mediaAluraAFC04() {
    localStorage.setItem("tabeladia04AFC", document.tabelalinha04AFC.tabeladias04AFC.value);
}

function mediaAluraAFC05() {
    localStorage.setItem("tabeladia05AFC", document.tabelalinha05AFC.tabeladias05AFC.value);
}

function mediaAluraAFC06() {
    localStorage.setItem("tabeladia06AFC", document.tabelalinha06AFC.tabeladias06AFC.value);
}

function mediaAluraAFC07() {
    localStorage.setItem("tabeladia07AFC", document.tabelalinha07AFC.tabeladias07AFC.value);
}

function mediaAluraAFCFinal() {
    var valor01AFC = document.getElementById("valor-dia01AFC")
    valor01AFC.innerHTML = localStorage.getItem("tabeladia01AFC")

    var valor02AFC = document.getElementById("valor-dia02AFC")
    valor02AFC.innerHTML = localStorage.getItem("tabeladia02AFC")

    var valor03AFC = document.getElementById("valor-dia03AFC")
    valor03AFC.innerHTML = localStorage.getItem("tabeladia03AFC")

    var valor04AFC = document.getElementById("valor-dia04AFC")
    valor04AFC.innerHTML = localStorage.getItem("tabeladia04AFC")

    var valor05AFC = document.getElementById("valor-dia05AFC")
    valor05AFC.innerHTML = localStorage.getItem("tabeladia05AFC")

    var valor06AFC = document.getElementById("valor-dia06AFC")
    valor06AFC.innerHTML = localStorage.getItem("tabeladia06AFC")

    var valor07AFC = document.getElementById("valor-dia07AFC")
    valor07AFC.innerHTML = localStorage.getItem("tabeladia07AFC")

    calcularMediaAFC()
}

function calcularMediaAFC() {
    var valorMedia01AFC = parseInt(localStorage.getItem("tabeladia01AFC"))
    var valorMedia02AFC = parseInt(localStorage.getItem("tabeladia02AFC"))
    var valorMedia03AFC = parseInt(localStorage.getItem("tabeladia03AFC"))
    var valorMedia04AFC = parseInt(localStorage.getItem("tabeladia04AFC"))
    var valorMedia05AFC = parseInt(localStorage.getItem("tabeladia05AFC"))
    var valorMedia06AFC = parseInt(localStorage.getItem("tabeladia06AFC"))
    var valorMedia07AFC = parseInt(localStorage.getItem("tabeladia07AFC"))

    var valorFinalAFC = ((valorMedia01AFC + valorMedia02AFC + valorMedia03AFC + valorMedia04AFC + valorMedia05AFC + valorMedia06AFC + valorMedia07AFC)/7).toFixed(1)

    exibirNaTelaAFC(valorFinalAFC)
}

function exibirNaTelaAFC(valorFinalAFC) {

    var imprimirNaTelaAFC = "<h4 class='resultadoMedia' id='resultadoMediaAFC'>A sua média é de " + valorFinalAFC + "</h4>"

    var exibirTelaAFC = document.getElementById("imprimirAFC")
    exibirTelaAFC.innerHTML = imprimirNaTelaAFC
}

function mediaAluraAFB01() {
    localStorage.setItem("tabeladia01AFB", document.tabelalinha01AFB.tabeladias01AFB.value);
}

function mediaAluraAFB02() {
    localStorage.setItem("tabeladia02AFB", document.tabelalinha02AFB.tabeladias02AFB.value);
}

function mediaAluraAFB03() {
    localStorage.setItem("tabeladia03AFB", document.tabelalinha03AFB.tabeladias03AFB.value);
}

function mediaAluraAFB04() {
    localStorage.setItem("tabeladia04AFB", document.tabelalinha04AFB.tabeladias04AFB.value);
}

function mediaAluraAFB05() {
    localStorage.setItem("tabeladia05AFB", document.tabelalinha05AFB.tabeladias05AFB.value);
}

function mediaAluraAFB06() {
    localStorage.setItem("tabeladia06AFB", document.tabelalinha06AFB.tabeladias06AFB.value);
}

function mediaAluraAFB07() {
    localStorage.setItem("tabeladia07AFB", document.tabelalinha07AFB.tabeladias07AFB.value);
}

function mediaAluraAFBFinal() {
    var valor01AFB = document.getElementById("valor-dia01AFB")
    valor01AFB.innerHTML = localStorage.getItem("tabeladia01AFB")

    var valor02AFB = document.getElementById("valor-dia02AFB")
    valor02AFB.innerHTML = localStorage.getItem("tabeladia02AFB")

    var valor03AFB = document.getElementById("valor-dia03AFB")
    valor03AFB.innerHTML = localStorage.getItem("tabeladia03AFB")

    var valor04AFB = document.getElementById("valor-dia04AFB")
    valor04AFB.innerHTML = localStorage.getItem("tabeladia04AFB")

    var valor05AFB = document.getElementById("valor-dia05AFB")
    valor05AFB.innerHTML = localStorage.getItem("tabeladia05AFB")

    var valor06AFB = document.getElementById("valor-dia06AFB")
    valor06AFB.innerHTML = localStorage.getItem("tabeladia06AFB")

    var valor07AFB = document.getElementById("valor-dia07AFB")
    valor07AFB.innerHTML = localStorage.getItem("tabeladia07AFB")

    calcularMediaAFB()
}

function calcularMediaAFB() {
    var valorMedia01AFB = parseInt(localStorage.getItem("tabeladia01AFB"))
    var valorMedia02AFB = parseInt(localStorage.getItem("tabeladia02AFB"))
    var valorMedia03AFB = parseInt(localStorage.getItem("tabeladia03AFB"))
    var valorMedia04AFB = parseInt(localStorage.getItem("tabeladia04AFB"))
    var valorMedia05AFB = parseInt(localStorage.getItem("tabeladia05AFB"))
    var valorMedia06AFB = parseInt(localStorage.getItem("tabeladia06AFB"))
    var valorMedia07AFB = parseInt(localStorage.getItem("tabeladia07AFB"))

    var valorFinalAFB = ((valorMedia01AFB + valorMedia02AFB + valorMedia03AFB + valorMedia04AFB + valorMedia05AFB + valorMedia06AFB + valorMedia07AFB)/7).toFixed(1)

    exibirNaTelaAFB(valorFinalAFB)
}

function exibirNaTelaAFB(valorFinalAFB) {

    var imprimirNaTelaAFB = "<h4 class='resultadoMedia' id='resultadoMediaAFB'>A sua média é de " + valorFinalAFB + "</h4>"

    var exibirTelaAFB = document.getElementById("imprimirAFB")
    exibirTelaAFB.innerHTML = imprimirNaTelaAFB
}

function mediaAluraAFE01() {
    localStorage.setItem("tabeladia01AFE", document.tabelalinha01AFE.tabeladias01AFE.value);
}

function mediaAluraAFE02() {
    localStorage.setItem("tabeladia02AFE", document.tabelalinha02AFE.tabeladias02AFE.value);
}

function mediaAluraAFE03() {
    localStorage.setItem("tabeladia03AFE", document.tabelalinha03AFE.tabeladias03AFE.value);
}

function mediaAluraAFE04() {
    localStorage.setItem("tabeladia04AFE", document.tabelalinha04AFE.tabeladias04AFE.value);
}

function mediaAluraAFE05() {
    localStorage.setItem("tabeladia05AFE", document.tabelalinha05AFE.tabeladias05AFE.value);
}

function mediaAluraAFE06() {
    localStorage.setItem("tabeladia06AFE", document.tabelalinha06AFE.tabeladias06AFE.value);
}

function mediaAluraAFE07() {
    localStorage.setItem("tabeladia07AFE", document.tabelalinha07AFE.tabeladias07AFE.value);
}

function mediaAluraAFEFinal() {
    var valor01AFE = document.getElementById("valor-dia01AFE")
    valor01AFE.innerHTML = localStorage.getItem("tabeladia01AFE")

    var valor02AFE = document.getElementById("valor-dia02AFE")
    valor02AFE.innerHTML = localStorage.getItem("tabeladia02AFE")

    var valor03AFE = document.getElementById("valor-dia03AFE")
    valor03AFE.innerHTML = localStorage.getItem("tabeladia03AFE")

    var valor04AFE = document.getElementById("valor-dia04AFE")
    valor04AFE.innerHTML = localStorage.getItem("tabeladia04AFE")

    var valor05AFE = document.getElementById("valor-dia05AFE")
    valor05AFE.innerHTML = localStorage.getItem("tabeladia05AFE")

    var valor06AFE = document.getElementById("valor-dia06AFE")
    valor06AFE.innerHTML = localStorage.getItem("tabeladia06AFE")

    var valor07AFE = document.getElementById("valor-dia07AFE")
    valor07AFE.innerHTML = localStorage.getItem("tabeladia07AFE")

    calcularMediaAFE()
}

function calcularMediaAFE() {
    var valorMedia01AFE = parseInt(localStorage.getItem("tabeladia01AFE"))
    var valorMedia02AFE = parseInt(localStorage.getItem("tabeladia02AFE"))
    var valorMedia03AFE = parseInt(localStorage.getItem("tabeladia03AFE"))
    var valorMedia04AFE = parseInt(localStorage.getItem("tabeladia04AFE"))
    var valorMedia05AFE = parseInt(localStorage.getItem("tabeladia05AFE"))
    var valorMedia06AFE = parseInt(localStorage.getItem("tabeladia06AFE"))
    var valorMedia07AFE = parseInt(localStorage.getItem("tabeladia07AFE"))

    var valorFinalAFE = ((valorMedia01AFE + valorMedia02AFE + valorMedia03AFE + valorMedia04AFE + valorMedia05AFE + valorMedia06AFE + valorMedia07AFE)/7).toFixed(1)

    exibirNaTelaAFE(valorFinalAFE)
}

function exibirNaTelaAFE(valorFinalAFE) {

    var imprimirNaTelaAFE = "<h4 class='resultadoMedia' id='resultadoMediaAFE'>A sua média é de " + valorFinalAFE + "</h4>"

    var exibirTelaAFE = document.getElementById("imprimirAFE")
    exibirTelaAFE.innerHTML = imprimirNaTelaAFE
}

function mediaAluraAFJ01() {
    localStorage.setItem("tabeladia01AFJ", document.tabelalinha01AFJ.tabeladias01AFJ.value);
}

function mediaAluraAFJ02() {
    localStorage.setItem("tabeladia02AFJ", document.tabelalinha02AFJ.tabeladias02AFJ.value);
}

function mediaAluraAFJ03() {
    localStorage.setItem("tabeladia03AFJ", document.tabelalinha03AFJ.tabeladias03AFJ.value);
}

function mediaAluraAFJ04() {
    localStorage.setItem("tabeladia04AFJ", document.tabelalinha04AFJ.tabeladias04AFJ.value);
}

function mediaAluraAFJ05() {
    localStorage.setItem("tabeladia05AFJ", document.tabelalinha05AFJ.tabeladias05AFJ.value);
}

function mediaAluraAFJ06() {
    localStorage.setItem("tabeladia06AFJ", document.tabelalinha06AFJ.tabeladias06AFJ.value);
}

function mediaAluraAFJ07() {
    localStorage.setItem("tabeladia07AFJ", document.tabelalinha07AFJ.tabeladias07AFJ.value);
}

function mediaAluraAFJFinal() {
    var valor01AFJ = document.getElementById("valor-dia01AFJ")
    valor01AFJ.innerHTML = localStorage.getItem("tabeladia01AFJ")

    var valor02AFJ = document.getElementById("valor-dia02AFJ")
    valor02AFJ.innerHTML = localStorage.getItem("tabeladia02AFJ")

    var valor03AFJ = document.getElementById("valor-dia03AFJ")
    valor03AFJ.innerHTML = localStorage.getItem("tabeladia03AFJ")

    var valor04AFJ = document.getElementById("valor-dia04AFJ")
    valor04AFJ.innerHTML = localStorage.getItem("tabeladia04AFJ")

    var valor05AFJ = document.getElementById("valor-dia05AFJ")
    valor05AFJ.innerHTML = localStorage.getItem("tabeladia05AFJ")

    var valor06AFJ = document.getElementById("valor-dia06AFJ")
    valor06AFJ.innerHTML = localStorage.getItem("tabeladia06AFJ")

    var valor07AFJ = document.getElementById("valor-dia07AFJ")
    valor07AFJ.innerHTML = localStorage.getItem("tabeladia07AFJ")

    calcularMediaAFJ()
}

function calcularMediaAFJ() {
    var valorMedia01AFJ = parseInt(localStorage.getItem("tabeladia01AFJ"))
    var valorMedia02AFJ = parseInt(localStorage.getItem("tabeladia02AFJ"))
    var valorMedia03AFJ = parseInt(localStorage.getItem("tabeladia03AFJ"))
    var valorMedia04AFJ = parseInt(localStorage.getItem("tabeladia04AFJ"))
    var valorMedia05AFJ = parseInt(localStorage.getItem("tabeladia05AFJ"))
    var valorMedia06AFJ = parseInt(localStorage.getItem("tabeladia06AFJ"))
    var valorMedia07AFJ = parseInt(localStorage.getItem("tabeladia07AFJ"))

    var valorFinalAFJ = ((valorMedia01AFJ + valorMedia02AFJ + valorMedia03AFJ + valorMedia04AFJ + valorMedia05AFJ + valorMedia06AFJ + valorMedia07AFJ)/7).toFixed(1)

    exibirNaTelaAFJ(valorFinalAFJ)
}

function exibirNaTelaAFJ(valorFinalAFJ) {

    var imprimirNaTelaAFJ = "<h4 class='resultadoMedia' id='resultadoMediaAFJ'>A sua média é de " + valorFinalAFJ + "</h4>"

    var exibirTelaAFJ = document.getElementById("imprimirAFJ")
    exibirTelaAFJ.innerHTML = imprimirNaTelaAFJ
}

function mediaAluraSAS01() {
    localStorage.setItem("tabeladia01SAS", document.tabelalinha01SAS.tabeladias01SAS.value);
}

function mediaAluraSAS02() {
    localStorage.setItem("tabeladia02SAS", document.tabelalinha02SAS.tabeladias02SAS.value);
}

function mediaAluraSAS03() {
    localStorage.setItem("tabeladia03SAS", document.tabelalinha03SAS.tabeladias03SAS.value);
}

function mediaAluraSAS04() {
    localStorage.setItem("tabeladia04SAS", document.tabelalinha04SAS.tabeladias04SAS.value);
}

function mediaAluraSAS05() {
    localStorage.setItem("tabeladia05SAS", document.tabelalinha05SAS.tabeladias05SAS.value);
}

function mediaAluraSAS06() {
    localStorage.setItem("tabeladia06SAS", document.tabelalinha06SAS.tabeladias06SAS.value);
}

function mediaAluraSAS07() {
    localStorage.setItem("tabeladia07SAS", document.tabelalinha07SAS.tabeladias07SAS.value);
}

function mediaAluraSASFinal() {
    var valor01SAS = document.getElementById("valor-dia01SAS")
    valor01SAS.innerHTML = localStorage.getItem("tabeladia01SAS")

    var valor02SAS = document.getElementById("valor-dia02SAS")
    valor02SAS.innerHTML = localStorage.getItem("tabeladia02SAS")

    var valor03SAS = document.getElementById("valor-dia03SAS")
    valor03SAS.innerHTML = localStorage.getItem("tabeladia03SAS")

    var valor04SAS = document.getElementById("valor-dia04SAS")
    valor04SAS.innerHTML = localStorage.getItem("tabeladia04SAS")

    var valor05SAS = document.getElementById("valor-dia05SAS")
    valor05SAS.innerHTML = localStorage.getItem("tabeladia05SAS")

    var valor06SAS = document.getElementById("valor-dia06SAS")
    valor06SAS.innerHTML = localStorage.getItem("tabeladia06SAS")

    var valor07SAS = document.getElementById("valor-dia07SAS")
    valor07SAS.innerHTML = localStorage.getItem("tabeladia07SAS")

    calcularMediaSAS()
}

function calcularMediaSAS() {
    var valorMedia01SAS = parseInt(localStorage.getItem("tabeladia01SAS"))
    var valorMedia02SAS = parseInt(localStorage.getItem("tabeladia02SAS"))
    var valorMedia03SAS = parseInt(localStorage.getItem("tabeladia03SAS"))
    var valorMedia04SAS = parseInt(localStorage.getItem("tabeladia04SAS"))
    var valorMedia05SAS = parseInt(localStorage.getItem("tabeladia05SAS"))
    var valorMedia06SAS = parseInt(localStorage.getItem("tabeladia06SAS"))
    var valorMedia07SAS = parseInt(localStorage.getItem("tabeladia07SAS"))

    var valorFinalSAS = ((valorMedia01SAS + valorMedia02SAS + valorMedia03SAS + valorMedia04SAS + valorMedia05SAS + valorMedia06SAS + valorMedia07SAS)/7).toFixed(1)

    exibirNaTelaSAS(valorFinalSAS)
}

function exibirNaTelaSAS(valorFinalSAS) {

    var imprimirNaTelaSAS = "<h4 class='resultadoMedia' id='resultadoMediaSAS'>A sua média é de " + valorFinalSAS + "</h4>"

    var exibirTelaSAS = document.getElementById("imprimirSAS")
    exibirTelaSAS.innerHTML = imprimirNaTelaSAS
}

function mediaAluraSAA01() {
    localStorage.setItem("tabeladia01SAA", document.tabelalinha01SAA.tabeladias01SAA.value);
}

function mediaAluraSAA02() {
    localStorage.setItem("tabeladia02SAA", document.tabelalinha02SAA.tabeladias02SAA.value);
}

function mediaAluraSAA03() {
    localStorage.setItem("tabeladia03SAA", document.tabelalinha03SAA.tabeladias03SAA.value);
}

function mediaAluraSAA04() {
    localStorage.setItem("tabeladia04SAA", document.tabelalinha04SAA.tabeladias04SAA.value);
}

function mediaAluraSAA05() {
    localStorage.setItem("tabeladia05SAA", document.tabelalinha05SAA.tabeladias05SAA.value);
}

function mediaAluraSAA06() {
    localStorage.setItem("tabeladia06SAA", document.tabelalinha06SAA.tabeladias06SAA.value);
}

function mediaAluraSAA07() {
    localStorage.setItem("tabeladia07SAA", document.tabelalinha07SAA.tabeladias07SAA.value);
}

function mediaAluraSAAFinal() {
    var valor01SAA = document.getElementById("valor-dia01SAA")
    valor01SAA.innerHTML = localStorage.getItem("tabeladia01SAA")

    var valor02SAA = document.getElementById("valor-dia02SAA")
    valor02SAA.innerHTML = localStorage.getItem("tabeladia02SAA")

    var valor03SAA = document.getElementById("valor-dia03SAA")
    valor03SAA.innerHTML = localStorage.getItem("tabeladia03SAA")

    var valor04SAA = document.getElementById("valor-dia04SAA")
    valor04SAA.innerHTML = localStorage.getItem("tabeladia04SAA")

    var valor05SAA = document.getElementById("valor-dia05SAA")
    valor05SAA.innerHTML = localStorage.getItem("tabeladia05SAA")

    var valor06SAA = document.getElementById("valor-dia06SAA")
    valor06SAA.innerHTML = localStorage.getItem("tabeladia06SAA")

    var valor07SAA = document.getElementById("valor-dia07SAA")
    valor07SAA.innerHTML = localStorage.getItem("tabeladia07SAA")

    calcularMediaSAA()
}

function calcularMediaSAA() {
    var valorMedia01SAA = parseInt(localStorage.getItem("tabeladia01SAA"))
    var valorMedia02SAA = parseInt(localStorage.getItem("tabeladia02SAA"))
    var valorMedia03SAA = parseInt(localStorage.getItem("tabeladia03SAA"))
    var valorMedia04SAA = parseInt(localStorage.getItem("tabeladia04SAA"))
    var valorMedia05SAA = parseInt(localStorage.getItem("tabeladia05SAA"))
    var valorMedia06SAA = parseInt(localStorage.getItem("tabeladia06SAA"))
    var valorMedia07SAA = parseInt(localStorage.getItem("tabeladia07SAA"))

    var valorFinalSAA = ((valorMedia01SAA + valorMedia02SAA + valorMedia03SAA + valorMedia04SAA + valorMedia05SAA + valorMedia06SAA + valorMedia07SAA)/7).toFixed(1)

    exibirNaTelaSAA(valorFinalSAA)
}

function exibirNaTelaSAA(valorFinalSAA) {

    var imprimirNaTelaSAA = "<h4 class='resultadoMedia' id='resultadoMediaSAA'>A sua média é de " + valorFinalSAA + "</h4>"

    var exibirTelaSAA = document.getElementById("imprimirSAA")
    exibirTelaSAA.innerHTML = imprimirNaTelaSAA
}

function mediaAluraESG01() {
    localStorage.setItem("tabeladia01ESG", document.tabelalinha01ESG.tabeladias01ESG.value);
}

function mediaAluraESG02() {
    localStorage.setItem("tabeladia02ESG", document.tabelalinha02ESG.tabeladias02ESG.value);
}

function mediaAluraESG03() {
    localStorage.setItem("tabeladia03ESG", document.tabelalinha03ESG.tabeladias03ESG.value);
}

function mediaAluraESG04() {
    localStorage.setItem("tabeladia04ESG", document.tabelalinha04ESG.tabeladias04ESG.value);
}

function mediaAluraESG05() {
    localStorage.setItem("tabeladia05ESG", document.tabelalinha05ESG.tabeladias05ESG.value);
}

function mediaAluraESG06() {
    localStorage.setItem("tabeladia06ESG", document.tabelalinha06ESG.tabeladias06ESG.value);
}

function mediaAluraESG07() {
    localStorage.setItem("tabeladia07ESG", document.tabelalinha07ESG.tabeladias07ESG.value);
}

function mediaAluraESGFinal() {
    var valor01ESG = document.getElementById("valor-dia01ESG")
    valor01ESG.innerHTML = localStorage.getItem("tabeladia01ESG")

    var valor02ESG = document.getElementById("valor-dia02ESG")
    valor02ESG.innerHTML = localStorage.getItem("tabeladia02ESG")

    var valor03ESG = document.getElementById("valor-dia03ESG")
    valor03ESG.innerHTML = localStorage.getItem("tabeladia03ESG")

    var valor04ESG = document.getElementById("valor-dia04ESG")
    valor04ESG.innerHTML = localStorage.getItem("tabeladia04ESG")

    var valor05ESG = document.getElementById("valor-dia05ESG")
    valor05ESG.innerHTML = localStorage.getItem("tabeladia05ESG")

    var valor06ESG = document.getElementById("valor-dia06ESG")
    valor06ESG.innerHTML = localStorage.getItem("tabeladia06ESG")

    var valor07ESG = document.getElementById("valor-dia07ESG")
    valor07ESG.innerHTML = localStorage.getItem("tabeladia07ESG")

    calcularMediaESG()
}

function calcularMediaESG() {
    var valorMedia01ESG = parseInt(localStorage.getItem("tabeladia01ESG"))
    var valorMedia02ESG = parseInt(localStorage.getItem("tabeladia02ESG"))
    var valorMedia03ESG = parseInt(localStorage.getItem("tabeladia03ESG"))
    var valorMedia04ESG = parseInt(localStorage.getItem("tabeladia04ESG"))
    var valorMedia05ESG = parseInt(localStorage.getItem("tabeladia05ESG"))
    var valorMedia06ESG = parseInt(localStorage.getItem("tabeladia06ESG"))
    var valorMedia07ESG = parseInt(localStorage.getItem("tabeladia07ESG"))

    var valorFinalESG = ((valorMedia01ESG + valorMedia02ESG + valorMedia03ESG + valorMedia04ESG + valorMedia05ESG + valorMedia06ESG + valorMedia07ESG)/7).toFixed(1)

    exibirNaTelaESG(valorFinalESG)
}

function exibirNaTelaESG(valorFinalESG) {

    var imprimirNaTelaESG = "<h4 class='resultadoMedia' id='resultadoMediaESG'>A sua média é de " + valorFinalESG + "</h4>"

    var exibirTelaESG = document.getElementById("imprimirESG")
    exibirTelaESG.innerHTML = imprimirNaTelaESG
}

function mediaAluraESA01() {
    localStorage.setItem("tabeladia01ESA", document.tabelalinha01ESA.tabeladias01ESA.value);
}

function mediaAluraESA02() {
    localStorage.setItem("tabeladia02ESA", document.tabelalinha02ESA.tabeladias02ESA.value);
}

function mediaAluraESA03() {
    localStorage.setItem("tabeladia03ESA", document.tabelalinha03ESA.tabeladias03ESA.value);
}

function mediaAluraESA04() {
    localStorage.setItem("tabeladia04ESA", document.tabelalinha04ESA.tabeladias04ESA.value);
}

function mediaAluraESA05() {
    localStorage.setItem("tabeladia05ESA", document.tabelalinha05ESA.tabeladias05ESA.value);
}

function mediaAluraESA06() {
    localStorage.setItem("tabeladia06ESA", document.tabelalinha06ESA.tabeladias06ESA.value);
}

function mediaAluraESA07() {
    localStorage.setItem("tabeladia07ESA", document.tabelalinha07ESA.tabeladias07ESA.value);
}

function mediaAluraESAFinal() {
    var valor01ESA = document.getElementById("valor-dia01ESA")
    valor01ESA.innerHTML = localStorage.getItem("tabeladia01ESA")

    var valor02ESA = document.getElementById("valor-dia02ESA")
    valor02ESA.innerHTML = localStorage.getItem("tabeladia02ESA")

    var valor03ESA = document.getElementById("valor-dia03ESA")
    valor03ESA.innerHTML = localStorage.getItem("tabeladia03ESA")

    var valor04ESA = document.getElementById("valor-dia04ESA")
    valor04ESA.innerHTML = localStorage.getItem("tabeladia04ESA")

    var valor05ESA = document.getElementById("valor-dia05ESA")
    valor05ESA.innerHTML = localStorage.getItem("tabeladia05ESA")

    var valor06ESA = document.getElementById("valor-dia06ESA")
    valor06ESA.innerHTML = localStorage.getItem("tabeladia06ESA")

    var valor07ESA = document.getElementById("valor-dia07ESA")
    valor07ESA.innerHTML = localStorage.getItem("tabeladia07ESA")

    calcularMediaESA()
}

function calcularMediaESA() {
    var valorMedia01ESA = parseInt(localStorage.getItem("tabeladia01ESA"))
    var valorMedia02ESA = parseInt(localStorage.getItem("tabeladia02ESA"))
    var valorMedia03ESA = parseInt(localStorage.getItem("tabeladia03ESA"))
    var valorMedia04ESA = parseInt(localStorage.getItem("tabeladia04ESA"))
    var valorMedia05ESA = parseInt(localStorage.getItem("tabeladia05ESA"))
    var valorMedia06ESA = parseInt(localStorage.getItem("tabeladia06ESA"))
    var valorMedia07ESA = parseInt(localStorage.getItem("tabeladia07ESA"))

    var valorFinalESA = ((valorMedia01ESA + valorMedia02ESA + valorMedia03ESA + valorMedia04ESA + valorMedia05ESA + valorMedia06ESA + valorMedia07ESA)/7).toFixed(1)

    exibirNaTelaESA(valorFinalESA)
}

function exibirNaTelaESA(valorFinalESA) {

    var imprimirNaTelaESA = "<h4 class='resultadoMedia' id='resultadoMediaESA'>A sua média é de " + valorFinalESA + "</h4>"

    var exibirTelaESA = document.getElementById("imprimirESA")
    exibirTelaESA.innerHTML = imprimirNaTelaESA
}

function alura() {
    document.body.classList.toggle("hover");
}