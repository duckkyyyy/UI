export function openTab (tabs, tabId) {
    const tabsEl = typeof tabs === 'string' ? document.getElementById(tabs) : tabs;
    const tabEl = document.getElementById(tabId);

    const tabNav = tabsEl.querySelector('.tabs__nav');
    const tabLinks = tabNav.querySelectorAll('.tabs__nav-item');
    const tabItems = tabsEl.querySelectorAll('.tabs__item');
    const tabLink = tabsEl.querySelector('[data-tab="'+ tabId +'"]');

    tabLinks.forEach(function (tab) {
        tab.classList.remove('tabs__nav-item--active');
    });

    tabLink.classList.add('tabs__nav-item--active');

    tabItems.forEach(function (tabItem) {
        tabItem.classList.add('tabs__item--hidden');
    });

    tabEl.classList.remove('tabs__item--hidden');
}

export function initTabs () {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(function (tab) {
        const tabNav = tab.querySelector('.tabs__nav');
        const tabLinks = tabNav.querySelectorAll('.tabs__nav-item');
    
        tabLinks.forEach(function (tabLink) {
            tabLink.addEventListener('click', function (event) {
                event.preventDefault();

                const tabId = tabLink.dataset.tab;

                openTab(tab, tabId);
            });
        });
    });
}