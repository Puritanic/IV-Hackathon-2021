export default function resetScore() {
    const scoreElement = document.getElementsByClassName('score-amount')[0];

    scoreElement.innerText = 0;
}
