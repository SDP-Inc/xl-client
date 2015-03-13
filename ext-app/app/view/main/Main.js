/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('xlApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [],

    xtype: 'app-main',

    layout: 'fit',

    items: [{
        xtype: 'panel',
        layout: 'border',
        title: 'XL App',

        items: [{
            xtype: 'container',
            region: 'west',
            width: 200,
            style: {
                'background-color': '#FFF'
            }
        }, {
            xtype: 'container',
            region: 'center',
            html: '<h1>Make an App</h1>',
            style: {
                'padding': '20px'
            }
        }]
    }]
});
