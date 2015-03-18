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
        'xlApp.view.workbooks.Workbooks',
        'xlApp.view.datasource.DataSourceManager',
        'xlApp.view.report.ReportManager',
        'xlApp.view.report.ReportScheduler',
        'xlApp.view.users.UserGroupManager'
    ],

    xtype: 'app-main',
    layout: 'border',

    initComponent: function() {
        var me = this,
            mainNavbarStore;

        mainNavbarStore = Ext.create('Ext.data.Store', {
            fields: [{
                name: 'label',
                type: 'string'
            }, {
                name: 'cls',
                type: 'string'
            }],
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
            width: 140,
            store: mainNavbarStore,
            tpl: [
                '<div class="navbar-logo"><span class="navbar-logo-text">XL App</span></div>',
                '<tpl for=".">',
                    '<div class="navitem-wrap" style="outline: none !important">',
                        '<div class="navitem">',
                            '<h1>',
                                '<i class="fa fa-{cls}"></i>',
                            '</h1>',
                            '<h3>{label}</h3>',
                        '</div>',
                    '</div>',
                '</tpl>'
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
            bodyCls: 'mainview',
            region: 'center',
            layout: 'card',
            activeItem: 0,
            style: {
                'padding': '20px',
                'background-color': '#FFF'
            },
            items: [{
                itemId: 'workbookViewId',
                xtype: 'workbook-view'
            }, {
                itemId: 'dataSourceMgrViewId',
                xtype: 'datasource-manager'
            }, {
                itemId: 'reportMgrViewId',
                xtype: 'reportmanager'
            }, {
                itemId: 'reportSchViewId',
                xtype: 'reportscheduler'
            }, {
                itemId: 'userGroupViewId',
                xtype: 'usergroup-manager'
            }],
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
