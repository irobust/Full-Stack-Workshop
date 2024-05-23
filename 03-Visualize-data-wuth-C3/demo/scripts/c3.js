var timeLineChart = c3.generate({
    bindto: "#timeLine",
    data: {
        x: 'label',
        columns: [
            ['label','January','February','March','April','May','June','July','August','September','October','November','December'],
            ['yes', 30, 200, 100, 400, 150, 250,44,22,33,11, 30, 200],
            ['no', 50, 220, 109, 430, 135, 245,11,22,33,44, 50, 220],
            ['none', 42, 162, 81, 329, 121, 212,14,24,34,44, 42, 162]
        ],
        types: {
            'yes':'bar',
            'no':'bar',
            'none':'line'
        }
    },
    axis:{
        x:{
            type:'category'
        },
        y:{
            label:{
                text:'Nr. users',
                position:'outer-middle'
            }
        }
    }
});

setTimeout(() => {
    timeLineChart.data.colors({'yes':'blue','no':'red'});
    timeLineChart.transform('line',['yes','no'])
},2000)

// setTimeout(() => {
//     c3.generate({
//         bindto: "#timeLine",
//         data: {
//             url:'../data/data.json',
//             mimeType: 'json',
//             x: 'label',
//             types: {
//                 'yes':'bar',
//                 'no':'bar',
//                 'none':'line'
//             }
//         },
//         axis:{
//             x:{
//                 type:'category'
//             },
//             y:{
//                 label:{
//                     text:'Nr. users',
//                     position:'outer-middle'
//                 }
//             }
//         }
//     });
// }, 2000);

var summary = c3.generate({
    bindto:'#summaryPie',
    data:{
        columns:[
            ['yes', 356],
            ['no', 120],
            ['none', 35]
        ],
        type: 'pie',
        onmouseover: function(d) {console.log('OnMouseOver')},
        onmouseout:function(d){console.log("out")}
    },
    size:{
        width: 500,
        height: 500
    }
});

// setTimeout(() => {
//     c3.generate({
//         bindto:'#summaryPie',
//         data:{
//             url:'../data/data.csv',
//             type: 'pie'
//         },
//         size:{
//             width: 500,
//             height: 500
//         }
//     });
// }, 3000)