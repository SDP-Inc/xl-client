/**
 * DataSource Model Definition
 */
Ext.define('xlApp.model.datasource.Datasource', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'auto',
        unique: true
    }, {
        name: 'label',
        type: 'string'
    }, {
        name: 'type', // Oracle, Postgres, Sybase etc.
        type: 'string'
    }, {
        name: 'dbServer',
        type: 'string'
    }, {
        name: 'dbPort',
        type: 'int'
    }, {
        name: 'dbName',
        type: 'string'
    }, {
        name: 'userName', // password is not stored on the client but is required when registering a source
        type: 'string'
    }]
});