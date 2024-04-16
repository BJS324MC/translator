vocabulary={A:"pier",B:"bu",C:"chi",D:"da",E:"er",F:"fu",G:"go",H:"ha",I:"mi",J:"ja",K:"zang",L:"lols",M:"mo",N:"ni",O:"oz",P:"pai",Q:"qur",R:"rawr",S:"su",T:"tsu",U:"um",V:"vy",W:"wei",X:"wai",Y:"yay",Z:"stri"};let definer={};for(let e in vocabulary){let r=definer;for(let t of vocabulary[e].split(""))r[t]||(r[t]={}),r=r[t];r.END=e.toLowerCase()}const translate=e=>{let r="";for(let t of e.split("")){let e=vocabulary[t.toUpperCase()];r+=e?t.toUpperCase()===t?e[0].toUpperCase()+e.slice(1):e:t}return r},reverseTranslate=e=>{let r="",t=e.split(""),a=definer,o=-1;for(let l=0;l<t.length;l++)a[t[l].toLowerCase()]?a=a[t[l].toLowerCase()]:(a.END?(r+=t[o+1].toUpperCase()==t[o+1]?a.END.toUpperCase():a.END,l--):r+=e.slice(o+1,l+1),o=l,a=definer);return a.END?r+=t[o+1].toUpperCase()==t[o+1]?a.END.toUpperCase():a.END:r+=e.slice(o+1,t.length),r};
/*text = "Hello! We are not here."
translation = translate(text)
let formatting = ""
text2 = text.split(" ")
translation2 = translation.split(" ")
for(let u = 0; u < text2.length; u++) formatting += text2[u] + " - " + translation2[u] + "<br>";
document.write(formatting)*/
let reverse = false,
    input = document.querySelector('.input'),
    output = document.querySelector('.output'),
    sw = document.querySelector('.switch'),
    language = document.querySelector('.language'),
    translation = document.querySelector('.translation');

input.focus();
input.addEventListener('input',() => {
    if(input.innerText === "") {
        output.innerText = "Translation";
        output.style.color = "rgb(120, 120, 120)";
    }
    else {
        output.style.color = "rgb(0, 0, 0)";
        output.innerText = reverse ? reverseTranslate(input.innerText) : translate(input.innerText);
    }
})
sw.addEventListener("click",() => {
    reverse = !reverse;
    let l = language.innerText;
    language.innerText = translation.innerText;
    translation.innerText = l;
    if(input.innerText === "") return;
    input.innerText = output.innerText
    output.innerText = reverse ? reverseTranslate(input.innerText) : translate(input.innerText);
})