function ClickableButton(label, onClickHandler) {
    const toggleButton = document.createElement('button');
    toggleButton.style.height = '60px';
    toggleButton.style.width = '200px';
    toggleButton.style.position = 'fixed';
    toggleButton.style.left = '40vw';

    toggleButton.innerHTML = `<p>${label}</p>`;
    toggleButton.addEventListener('click', onClickHandler);
    document.body.appendChild(toggleButton);
}
