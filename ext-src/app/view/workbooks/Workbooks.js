/**
 * This view is for displaying the users private/public workbooks
 * and for basic Workbook Management:
 * Upload, Download, Sharing Preferences, etc.
 */
Ext.define('xlApp.view.workbooks.Workbooks', {
    extend: 'Ext.container.Container',
    xtype: 'workbook-view',

    requires: [
        'xlApp.model.workbooks.Workbook'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this,
            store;

        store = Ext.create('Ext.data.Store', {
            model: 'xlApp.model.workbooks.Workbook',
            data : [{
                label: 'Test1 - Workbook.xlsx',
                author: 'Steve',
                updatedOn: '3/7/2015'
            }, {
                label: 'Another Excel File.xlsx',
                author: 'Derek',
                updatedOn: '1/12/2015'
            }, {
                label: 'Important Report.xls',
                author: 'Wayne Gretzky',
                updatedOn: '10/12/2014'
            }]
        });

        me.items = [{
            xtype: 'container',
            html: '<h1>Explore Workbooks</h1><hr>'
        }, {
            xtype: 'panel',
            title: '/home/public/workbooks',
            flex: 1,
            items: [{
                xtype: 'dataview',
                cls: 'workbook-view',
                store: store,
                tpl: [
                    '<tpl for=".">',
                        '<div class="workbook-wrap" style="outline: none !important">',
                            '<div class="workbook-title-wrap">',
                                '<span class="workbook-title"><i class="fa fa-file-excel-o"></i> {label}</span>',
                            '</div>',
                            '<div>',
                                '<span class="workbook-author">Author: {author}</span>',
                            '</div>',
                            '<div>',
                                '<span class="workbook-updatedon">Updated: {updatedOn}</span>',
                            '</div>',
                        '</div>',
                    '</tpl>'
                ],
                multiSelect: false,
                selectedItemCls: 'active',
                itemSelector: 'div.workbook-wrap'
            }]
        }];

        me.callParent(arguments);
    }
});