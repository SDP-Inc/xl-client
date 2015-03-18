/**
 * User Group Model Definition
 */
Ext.define('xlApp.model.user.Group', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
        unique: true
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'owner',
        type: 'auto' // xlApp.model.user.User
    }, {
        name: 'users',
        type: 'auto' // xlApp.model.user.User[]
    }, {
        name: 'createdOn',
        type: 'date',
        dateFormat: 'm/d/Y H:i'
    }, {
        name: 'createdBy',
        type: 'string'
    }, {
        name: 'updatedOn',
        type: 'date',
        dateFormat: 'm/d/Y H:i'
    }, {
        name: 'updatedBy',
        type: 'string'
    }]
});