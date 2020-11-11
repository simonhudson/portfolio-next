module.exports = (e, targetId) => {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
