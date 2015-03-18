/**
 * User Model Definition
 */
Ext.define('xlApp.model.user.User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'auto',
        unique: true
    }, {
        name: 'firstName',
        type: 'string'
    }, {
        name: 'lastName',
        type: 'string'
    }, {
        name: 'displayName',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'groups',
        type: 'auto',
        allowNull: false,
        defaultValue: []
    }]
});