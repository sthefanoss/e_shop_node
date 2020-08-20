//exports
module.exports.getError404Page =
    (request, response, next) => {
        response.render('404.pug', {
            view: {
                title: 'Page not found',
                route: null
            }
        });
    };