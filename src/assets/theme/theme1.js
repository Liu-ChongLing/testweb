(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  echarts.registerTheme('theme1', {
    "color": [
      "#a599f2",
      "#fddd87",
      "#edafda",
      "#93b7e3",
      "#516b91",
      "#cbb0e3"
    ],
    "backgroundColor": "rgba(13,3,54,1)",
    "textStyle": {},
    "title": {
      "textStyle": {
        "color": "#abe9f2"
      },
      "subtextStyle": {
        "color": "#abe9f2"
      }
    },
    "line": {
      "itemStyle": {
        "borderWidth": "1"
      },
      "lineStyle": {
        "width": "2"
      },
      "symbolSize": "1",
      "symbol": "circle",
      "smooth": true
    },
    "radar": {
      "itemStyle": {
        "borderWidth": "0"
      },
      "lineStyle": {
        "width": "2"
      },
      "symbolSize": "1",
      "symbol": "circle",
      "smooth": true
    },
    "bar": {
      "itemStyle": {
        "barBorderWidth": "0",
        "barBorderColor": "#e5d9d9"
      }
    },
    "pie": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "scatter": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "boxplot": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "parallel": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "sankey": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "funnel": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "gauge": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      }
    },
    "candlestick": {
      "itemStyle": {
        "color": "#fd1050",
        "color0": "#0cf49b",
        "borderColor": "#fd1050",
        "borderColor0": "#0cf49b",
        "borderWidth": 1
      }
    },
    "graph": {
      "itemStyle": {
        "borderWidth": "0",
        "borderColor": "#e5d9d9"
      },
      "lineStyle": {
        "width": 1,
        "color": "#aaaaaa"
      },
      "symbolSize": "1",
      "symbol": "circle",
      "smooth": true,
      "color": [
        "#dd6b66",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ],
      "label": {
        "color": "#abe9f2"
      }
    },
    "map": {
      "itemStyle": {
        "normal": {
          "areaColor": "#eee",
          "borderColor": "#444",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "rgba(255,215,0,0.8)",
          "borderColor": "#444",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "rgb(100,0,0)"
          }
        }
      }
    },
    "geo": {
      "itemStyle": {
        "normal": {
          "areaColor": "#eee",
          "borderColor": "#444",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "rgba(255,215,0,0.8)",
          "borderColor": "#444",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "rgb(100,0,0)"
          }
        }
      }
    },
    "categoryAxis": {
      "axisLine": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#abe9f2"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#aaaaaa"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      }
    },
    "valueAxis": {
      "axisLine": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#abe9f2"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#aaaaaa"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      }
    },
    "logAxis": {
      "axisLine": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#abe9f2"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#aaaaaa"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      }
    },
    "timeAxis": {
      "axisLine": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#eeeeee"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#abe9f2"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#aaaaaa"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      }
    },
    "toolbox": {
      "iconStyle": {
        "normal": {
          "borderColor": "#999999"
        },
        "emphasis": {
          "borderColor": "#666666"
        }
      }
    },
    "legend": {
      "textStyle": {
        "color": "#abe9f2"
      }
    },
    "tooltip": {
      "axisPointer": {
        "lineStyle": {
          "color": "#eeeeee",
          "width": "1"
        },
        "crossStyle": {
          "color": "#eeeeee",
          "width": "1"
        }
      }
    },
    "timeline": {
      "lineStyle": {
        "color": "#eeeeee",
        "width": 1
      },
      "itemStyle": {
        "normal": {
          "color": "#dd6b66",
          "borderWidth": 1
        },
        "emphasis": {
          "color": "#a9334c"
        }
      },
      "controlStyle": {
        "normal": {
          "color": "#eeeeee",
          "borderColor": "#eeeeee",
          "borderWidth": 0.5
        },
        "emphasis": {
          "color": "#eeeeee",
          "borderColor": "#eeeeee",
          "borderWidth": 0.5
        }
      },
      "checkpointStyle": {
        "color": "#e43c59",
        "borderColor": "rgba(194,53,49,0.5)"
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#eeeeee"
          }
        }
      }
    },
    "visualMap": {
      "color": [
        "#bf444c",
        "#d88273",
        "#f6efa6"
      ]
    },
    "dataZoom": {
      "backgroundColor": "rgba(47,69,84,0)",
      "dataBackgroundColor": "rgba(255,255,255,0.3)",
      "fillerColor": "rgba(167,183,204,0.4)",
      "handleColor": "#a7b7cc",
      "handleSize": "100%",
      "textStyle": {
        "color": "#eeeeee"
      }
    },
    "markPoint": {
      "label": {
        "color": "#abe9f2"
      },
      "emphasis": {
        "label": {
          "color": "#abe9f2"
        }
      }
    }
  });
}));
