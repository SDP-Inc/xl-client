Ext.define('xlApp.view.report.ReportManager', {
    extend: 'Ext.container.Container',
    xtype: 'reportmanager',

    initComponent: function() {
        var me = this;

        me.html = '<h1>Report Manager</h1>';

        me.callParent(arguments);
    }
});