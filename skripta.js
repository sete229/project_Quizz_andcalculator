function changeText() {
    document.querySelector('#naslov2').innerHTML = 'Web is amazing!';
    }
    function addListElement() {
        const noviElement = document.createElement('li');
        noviElement.textContent = 'JavaScript';
        document.querySelector('#pobrojanaLista').appendChild(noviElement);
        }
        function changeStyle() {
            const naslovEl = document.querySelector('#naslov2');
            naslovEl.style.color = 'blue';
            naslovEl.style.fontSize = '48px';
            }
            function printEmail() {
                const ispisEl = document.querySelector('#ispisEmaila');
                ispisEl.innerHTML = document.querySelector('#email').value;
                }


document.addEventListener('DOMContentLoaded', function() {
    const buttonEl = document.querySelector('#changeButtonsStyle');
    buttonEl.addEventListener('click', function(e) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
    button.style.border = 'none';
    button.style.background = 'red';
    button.style.color = 'white';
    button.style.padding = '10px 15px';
    });
    });
    });