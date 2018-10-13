
const firstText = '<p>Hello, my name is Andreas.</p>'
const secondText = '<p>I am a web developer.</p>';

let salutation = firstText;
document.getElementById('salute').innerHTML = salutation;

function changeValue() {
    if (salutation == firstText) {
        salutation = secondText;
        document.getElementById('salute').innerHTML = salutation;
    } else {
        salutation = firstText;
        document.getElementById('salute').innerHTML = salutation;
    }
}

setInterval(changeValue, 1600);

