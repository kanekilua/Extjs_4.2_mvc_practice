Ext.onReady(function() {
      //定義表頭欄位
      var columns=[{header:"股票名稱",dataIndex:"name"},
                   {header:"股票代號",dataIndex:"id"},
                   {header:"收盤價 (元)",dataIndex:"close"},
                   {header:"成交量 (張)",dataIndex:"volumn"}
                   ];
      //定義原始資料
      var data=[["台積電","2330",123.0,25119],
                ["中華電","2412",96.4,5249],
                ["中碳","1723",192.5,918],
                ["創見","2451",108.0,733],
                ["華擎","3515",118.5,175],
                ["訊連","5203",97.0,235]
                ];
      //轉成 Store 物件
      var store=Ext.create("Ext.data.ArrayStore", {
          data:data,
          fields:[
            {name:"name"},
            {name:"id"},
            {name:"close"},
            {name:"volumn"}]
          });
      store.load();
      //建立 GridPanel 
      var grid=Ext.create("Ext.grid.Panel",{
        title:"台股",
        columns:columns,
        store:store,
        renderTo:"grid",
        autoHeight:true,
        width:450
        });
}); //end of onReady