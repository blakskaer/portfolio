var contactMe = [
    {
        p: 'Always happy to hear from you.'
    },
];

{
    var i = contactMe.length;
    while(i--) {
        const contactMeText = `<p>${contactMe[i].p}</p>`;
        document.getElementById('contact-me').innerHTML += contactMeText;
    };
}