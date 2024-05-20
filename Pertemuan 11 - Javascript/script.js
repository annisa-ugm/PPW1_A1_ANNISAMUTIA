function externalMessage() {
    const newDiv = document.createElement('div');
    newDiv.innerText = 'Hello from External JavaScript!';
    document.body.appendChild(newDiv);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.createElement('button');
    button.innerText = 'Klik Saya (External)';
    button.onclick = externalMessage;
    document.body.appendChild(button);
});



