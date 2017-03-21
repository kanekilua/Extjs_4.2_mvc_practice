Ext.define('app.controller.protal_controller', {  
   
    extend: 'Ext.app.Controller',  
   
    models: ['protal_model'],  
    stores: ['protal_store'],  
    views: ['Panel', 'Grid'],  
   
    init: function() {  
        Ext.create('app.view.Panel', {  
            layout: 'fit',  
            height: 300,  
            width: 400,  
   
            items: {  
                xtype: 'sitelist'  
            },  
   
            renderTo: document.body  
        });  
   
        Ext.create('app.view.Grid').show();  
    }  
});  