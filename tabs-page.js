import { initTabs, openTab } from './components/tabs.js';
const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

canvas.innerHTML = `
    <div class="tabs" id="tabs-2">
        <nav class="tabs__nav">
            <a href="" class="tabs__nav-item tabs__nav-item--active" data-tab="tabs-2-1">Вкладка 1</a>
            <a href="" class="tabs__nav-item" data-tab="tabs-2-2">Вкладка 2</a>
        </nav>

        <div class="tabs__item" id="tabs-2-1">
            контент 1
        </div>

        <div class="tabs__item tabs__item--hidden" id="tabs-2-2">
            контент 2
        </div>
    </div>
`

initTabs();

button.addEventListener('click', function () {
    openTab('tabs-2', 'tabs-2-2');
});