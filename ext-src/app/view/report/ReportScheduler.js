Ext.define('xlApp.view.report.ReportScheduler', {
    extend: 'Ext.container.Container',
    xtype: 'reportscheduler',

    initComponent: function() {
        var me = this;

        me.html = '<h1>Report Scheduler</h1>';

        me.callParent(arguments);
    }
});