export default (visible) => {
    const metadata = document.getElementsByClassName('metadata')[0];

    metadata.style.visibility = visible ? 'visible' : 'hidden';
};
