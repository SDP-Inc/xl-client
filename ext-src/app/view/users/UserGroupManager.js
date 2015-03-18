Ext.define('xlApp.view.users.UserGroupManager', {
    extend: 'Ext.container.Container',
    xtype: 'usergroup-manager',

    initComponent: function() {
        var me = this;

        me.html = '<h1>User & Group Manager</h1>';

        me.callParent(arguments);
    }
});