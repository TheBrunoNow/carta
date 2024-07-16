function createInvitation() {
    const nameInput = document.getElementById('nameInput').value;
    const letterText = document.getElementById('letter-text');
    let name;

    if (nameInput.toLowerCase() === 'luana') {
        name = 'Lua';
    } else if (nameInput.toLowerCase() === 'elisângela') {
        name = 'Lilly';
    } else if (nameInput.toLowerCase() === 'micaelly') {
        name = 'Mica';
    } else if (nameInput.toLowerCase() === 'wanderson') {
        name = 'Patrão';
    } else if (nameInput.toLowerCase() === 'joice') {
        name = 'Querida Joice';
    } else {
        name = nameInput;
    }

    if (name) {
        letterText.innerHTML = `<strong>Escola de Magia e Bruxaria de Hogwarts</strong>
                                <p>Prezado(a) ${name},</p>
                                <p>Temos o prazer de informar que V. Sa. tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Estamos anexando uma
                                    lista dos livros e equipamentos necessários.</p>
                                <p>O ano letivo começa em 1º de setembro. Aguardamos sua coruja até 31 de julho, no mais tardar.</p>`;
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('envelope-wrapper').style.display = 'block';
    } else {
        alert('Por favor, digite seu nome.');
    }
}

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});