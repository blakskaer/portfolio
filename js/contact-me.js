var contactMe = [
    {
        p: 'I\'m looking forward to hearing from you.'
    },
];

{
    var i = contactMe.length;
    while(i--) {
        const contactMeText = `<p>${contactMe[i].p}</p>`;
        document.getElementById('contact-me').innerHTML += contactMeText;
    };
}