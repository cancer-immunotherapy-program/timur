export const plot = {
  "configuration":{
    "config":{
      "displayModeBar":true,
      "modeBarButtonsToRemove":[
        "sendDataToCloud",
        "lasso2d",
        "toggleSpikelines"
      ],
      "showLink":false
    },
    "data":[
      {
        "id":0.9668614107081013,
        "manifestSeriesX":"var1",
        "manifestSeriesY":"var2",
        "mode":"markers",
        "name":"series1",
        "type":"scatter",
        "uid":"4f8972"
      }
    ],
    "layout":{
      "height":900,
      "title":"test",
      "width":1600,
      "xaxis":{
        "gridcolor":"#bdbdbd",
        "showgrid":true,
        "showline":true,
        "title":"test x axis"
      },
      "yaxis":{
        "gridcolor":"#bdbdbd",
        "showgrid":true,
        "showline":true,
        "title":"test y axis"
      }
    },
    "plotType":"scatter"
  },
  "created_at":"2017-09-19T21:06:30.430Z",
  "id":3,
  "is_editable":true,
  "manifest_id":11,
  "name":"test",
  "plot_type":"scatter",
  "updated_at":"2017-09-19T21:06:30.430Z"
};

export default {
  "manifests":[
    {
      "id":8,
      "name":"manifest1",
      "description":"private manifest",
      "project":"ipi",
      "access":"private",
      "data":{
        "elements":[
          {
            "name":"var1",
            "description":"",
            "script":"[1,2,3,4]"
          },
          {
            "name":"var2",
            "description":"",
            "script":"'abc'"
          }
        ]
      },
      "created_at":"2017-09-18T23:58:11.048Z",
      "updated_at":"2017-09-18T23:58:11.048Z",
      "user":{
        "name":"Darrell Abrau"
      },
      "plots":[

      ],
      "is_editable":true
    },
    {
      "id":9,
      "name":"manifest2",
      "description":"public manifest",
      "project":"ipi",
      "access":"public",
      "data":{
        "elements":[
          {
            "name":"var1",
            "description":"",
            "script":"'xyz'"
          },
          {
            "name":"var2",
            "description":"",
            "script":"['1', 'abc', '4']"
          }
        ]
      },
      "created_at":"2017-09-18T23:58:50.495Z",
      "updated_at":"2017-09-18T23:58:50.495Z",
      "user":{
        "name":"Darrell Abrau"
      },
      "plots":[

      ],
      "is_editable":true
    },
    {
      "id":10,
      "name":"new_manifest",
      "description":"new new",
      "project":"ipi",
      "access":"private",
      "data":{
        "elements":[
          {
            "name":"var",
            "description":"",
            "script":"'var'"
          }
        ]
      },
      "created_at":"2017-09-19T00:11:12.260Z",
      "updated_at":"2017-09-19T00:11:12.260Z",
      "user":{
        "name":"Darrell Abrau"
      },
      "plots":[

      ],
      "is_editable":true
    },
    {
      "id":11,
      "name":"manifest_for_plot",
      "description":"for plot",
      "project":"ipi",
      "access":"private",
      "data":{
        "elements":[
          {
            "name":"var1",
            "description":"",
            "script":"[1,2,3,4]"
          },
          {
            "name":"var2",
            "description":"",
            "script":"[1,2,3,4]"
          }
        ]
      },
      "created_at":"2017-09-19T21:05:13.224Z",
      "updated_at":"2017-09-19T21:05:13.224Z",
      "user":{
        "name":"Darrell Abrau"
      },
      "plots":[
        { ...plot }
      ],
      "is_editable":true
    }
  ]
};