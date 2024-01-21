document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('tab-active'));
            contents.forEach(c => c.classList.remove('active'));

            this.classList.add('tab-active');

            const target = this.getAttribute('data-target');
            const content = document.querySelector(`.${target}`);
            content.classList.add('active');
        });
    });
});
