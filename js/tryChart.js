Ext.onReady(function(){

    var chartStore = Ext.create('Ext.data.JsonStore', {
       fields: ['year', 'comedy', 'action', 'drama', 'thriller'],
       data: [
               {year: 2005, comedy: 34000000, action: 23890000, drama: 18450000, thriller: 20060000},
               {year: 2006, comedy: 56703000, action: 38900000, drama: 12650000, thriller: 21000000},
               {year: 2007, comedy: 42100000, action: 50410000, drama: 25780000, thriller: 23040000},
               {year: 2008, comedy: 38910000, action: 56070000, drama: 24810000, thriller: 26940000}
             ]
   });


    var panel1 = Ext.create('widget.panel', {	//widget.panel==Ext.widget('panel',{})方便的速记创建一个部件
       width: 800,
       height: 400,
       title: '我的第一个chart',
       renderTo: Ext.getBody(),
       layout: 'fit',
       items: {
           xtype: 'chart',
           animate: true,	//动画展开/折叠
           shadow: true,
           store: chartStore,
           legend: {		//配置对象接受作为参数的位置(就是显示在右边的小方框)
               position: 'right'
           },
           axes: [{	//轴义的数据点边界的图表来显示行
               type: 'Numeric',	//数值类型
               position: 'bottom',
               fields: ['comedy', 'action', 'drama', 'thriller'],
               title: false,
               grid: true,
               label: {
                   renderer: function(v) {		//renderer是一个“拦截”的方法可用于转换数据
                       return String(v).replace(/000000$/, 'M');
                   }
               },
               roundToDecimal: false
           }, {
               type: 'Category',	//一般用来显示明确的信息，如项目，每月的姓名，宿舍等的名称
               position: 'left',
               fields: ['year'],
               title: false
           }],
           series: [{	//阵列系列实例或配置对象
               type: 'bar',
               axis: 'bottom',
               gutter: 80,		//空间之间的条码宽度的百分比
               xField: 'year',
               yField: ['comedy', 'action', 'drama', 'thriller'],
               stacked: true,	//堆
               tips: {			//可视化的标记添加工具提示
                   trackMouse: true,	//提示跟随鼠标，因为它在目标元素移动。
                   width: 65,
                   height: 28,
                   renderer: function(storeItem, item) {
                       this.setTitle(String(item.value[1] / 1000000) + 'M');
                   }
               }
           }]
       }
       })
});