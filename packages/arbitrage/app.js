'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Arbitrage = new Module('arbitrage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Arbitrage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Arbitrage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Arbitrage.menus.add({
    title: 'arbitrage example page',
    link: 'arbitrage example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Arbitrage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Arbitrage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Arbitrage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Arbitrage;
});
