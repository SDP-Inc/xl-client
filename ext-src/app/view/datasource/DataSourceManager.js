Ext.define('xlApp.view.datasource.DataSourceManager', {
    extend: 'Ext.container.Container',
    xtype: 'datasource-manager',

    initComponent: function() {
        var me = this;

        me.html = '<h1>DataSource Manager</h1>';

        me.callParent(arguments);
    }
});