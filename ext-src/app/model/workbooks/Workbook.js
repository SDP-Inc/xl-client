/**
 * Workbook Model Definition
 */
Ext.define('xlApp.model.workbooks.Workbook', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'auto',
        unique: true
    }, {
        name: 'label',
        type: 'string'
    }, {
        name: 'author',
        type: 'string'
    }, {
        name: 'updatedOn',
        type: 'date',
        dateFormat: 'M/d/Y'
    }]
});