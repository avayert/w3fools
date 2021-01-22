// use an immediately invoked lambda to allow for early
// returns in case elements were not found
// this however causes flashes which I can't do anything about, unfortunately

(() => {
    const result_container = document.getElementById('rso');
    if (!result_container) { return; }

    const results = Array.from(result_container.getElementsByClassName('g'));
    if (!results.length) { return; }

    results.map((result) => {
        const links = result.getElementsByTagName('a');

        if (!links.length) { return; }

        try {
            // for some reason which I'm too lazy to figure out one of these
            // results can contain `#` as the href.
            const url = new URL(links[0].getAttribute('href'));

            if (url.host === 'www.w3schools.com') {
                result.remove();
            }
        } catch (e) {
            if (!e instanceof TypeError) {
                console.error(e);
            }
        }
    });
})();
