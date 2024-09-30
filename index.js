document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('open');
                item.querySelector('.accordion-content').style.maxHeight = null;
            }
        });
        accordionItem.classList.toggle('open');
        const accordionContent = accordionItem.querySelector('.accordion-content');

        if (accordionItem.classList.contains('open')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});