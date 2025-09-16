var typed = new Typed(".typing",{
    strings:["Digital Forensics Specialist", "Incident Response Analyst", "DFIR Expert", "Cyber Investigator", "Forensics Analyst", "Security Researcher", "Evidence Examiner", "Threat Hunter", "Malware Analyst"],
    typeSpeed:80,
    BackSpeed:60,
    loop:true
})

emailjs.init("$$");

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = '$$';
        const templateID = '$$';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
