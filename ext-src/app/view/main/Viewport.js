/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * The main viewport for the application is the navbar on the left with the main view
 * in the center. The main view in the center is dictated by the selected nav item.
 */
Ext.define('xlApp.view.main.Viewport', {
    extend: 'Ext.container.Container',
    requires: [
        'xlApp.model.navigation.NavBarItem'
    ],

    xtype: 'app-main',

    layout: 'border',

    initComponent: function() {
        var me = this,
            store;

        store = Ext.create('Ext.data.Store', {
            model: 'xlApp.model.navigation.NavBarItem',
            data : [{
                label: 'Explore Workbooks',
                cls: 'desktop'
            }, {
                label: 'DataSource Manager',
                cls: 'database'
            }, {
                label: 'Report Manager',
                cls: 'paste'
            }, {
                label: 'Report Scheduler',
                cls: 'clock-o'
            }, {
                label: 'Users/Groups',
                cls: 'users'
            }]
        });

        me.items = [{
            xtype: 'dataview',
            itemId: 'navbar',
            cls: 'navbar',
            region: 'west',
            layout: 'fit',
            width: 150,
            store: store,
            tpl: [
                '<tpl for=".">',
                    '<div class="navitem-wrap" style="outline: none !important">',
                        '<div class="navitem">',
                            '<h1>',
                                '<i class="fa fa-{cls}"></i>',
                            '</h1>',
                            '<h3>{label}</h3>',
                        '</div>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
            ],
            multiSelect: false,
            trackOver: true,
            selectedItemCls: 'active',
            itemSelector: 'div.navitem-wrap',
            listeners: {
                select: function(dataview, record){
                    var view = me.down('#main-view');

                    if (view && record && record.internalId) {
                        var activeIdx = parseInt(record.internalId, 10);
                        view.setActiveItem(activeIdx - 1);
                    }
                }
            }
        }, {
            xtype: 'panel',
            itemId: 'main-view',
            region: 'center',
            layout: 'card',
            activeItem: 0,
            items: [{
                itemId: 'card-0',
                html: '<h2>Explore Workbooks</h2><hr>'
            }, {
                itemId: 'card-1',
                html: '<h2>DataSource Manager</h2><hr>'
            }, {
                itemId: 'card-2',
                html: '<h2>Report Manager</h2><hr>'
            }, {
                itemId: 'card-3',
                html: '<h2>Report Scheduler</h2><hr>'
            }, {
                itemId: 'card-4',
                html: '<h2>Users & Groups</h2><hr>'
            }],
            style: {
                'padding': '20px',
                'background-color': '#FFF'
            },
            listeners: {
                afterrender: function() {
                    var navbar = me.down('#navbar');

                    if (navbar) {
                        navbar.setSelection(navbar.store.getAt(0));
                    }
                }
            }
        }];

        me.callParent(arguments);
    }
});