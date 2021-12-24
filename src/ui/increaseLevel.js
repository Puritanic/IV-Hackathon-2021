export default () => {
    const levelElement = document.getElementsByClassName('level-amount')[0];
    const currentLevel = Number(levelElement.innerText);

    levelElement.innerText = currentLevel + 1;
};
