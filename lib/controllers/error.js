//imports
const path = require('path');

//exports
module.exports.getError404Page =
    (request, response, next) => {
        response.render(path.join('error', '404'), {
            view: {
                title: 'Page not found',
                route: null
            }
        });
    };