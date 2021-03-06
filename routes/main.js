/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console, require, module, exports */

/**
 * Routes collection: Main routes
 * Route requests to respective controller
 */

var ctrl = require('../app_server/controllers/main');

module.exports = function (app) {
    app.get('/about', ctrl.about);
    app.get('/signin', ctrl.signin);
};