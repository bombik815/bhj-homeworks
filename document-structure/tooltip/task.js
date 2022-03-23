const hasTooltip = document.getElementsByClassName('has-tooltip');
const tooltip = document.querySelector('.tooltip');
tooltip.setAttribute('data-position', 'bottom');


function onClick(e) {
    e.preventDefault();

    let left = e.target.getBoundingClientRect().left;
    let top = e.target.getBoundingClientRect().top;

    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent === e.target.title) {
        tooltip.classList.remove('tooltip_active');
    } else {
        tooltip.classList.add('tooltip_active');
    };

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top + 20}px`;
    tooltip.textContent = e.target.title;
};

for (let index of hasTooltip) {
    index.addEventListener('click', onClick);
};
