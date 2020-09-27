//imports
const path = require('path');

//exports
module.exports.getError404Page = (request, response) =>
{
    response.render(path.join('pages', 'error', '404'), {
        view: {
            title: 'Page not found',
            route: null
        }
    });
};