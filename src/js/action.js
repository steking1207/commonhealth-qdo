let progEvent = [ 
    {name: '#kv', label: 'section-dental-kv', send: 0},
    {name: '#article', label: 'section-dental-article', send: 0},
    {name: '#video', label: 'section-dental-video', send: 0},
];

function checkAreaViewEvent() {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let viewArea = scrollTop + windowHeight;

    for (let i in progEvent){
        if (progEvent[i].send !== 0) {
            continue;
        }

        let element = $(progEvent[i].name);
        if (element.length == 0) {
            progEvent[i].send = 1;
            continue;
        }
        let areaTop = element.offset().top;
        let areaHeight = element.height();
        let area = areaTop + areaHeight;

        if (viewArea >= areaTop && scrollTop <= area) {
            progEvent[i].send = 1;
            dataLayer.push({
                'event': 'sendMyEvent',
                'eventCategory': 'web_event',
                'eventAction': '2022dental',
                'eventLabel': progEvent[i].label,
            });

        }

    }

}

function debounce(func, delay) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
$(document).on(
    "scroll",
    debounce(() => {
        checkAreaViewEvent();
    },30)
);