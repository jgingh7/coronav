google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesNewYork);
google.charts.setOnLoadCallback(drawTrendlinesNewark);
google.charts.setOnLoadCallback(drawTrendlinesDane);
google.charts.setOnLoadCallback(drawTrendlinesChicago);
google.charts.setOnLoadCallback(drawTrendlinesPhilly);
google.charts.setOnLoadCallback(drawTrendlinesLA);


function drawTrendlinesNewYork() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 2693],
    [new Date('Dec 23, 2020'), 3199],
    [new Date('Dec 24, 2020'), 3609],
    [new Date('Dec 25, 2020'), 2937],
    [new Date('Dec 26, 2020'), 2938],
    [new Date('Dec 27, 2020'), 2512],
    [new Date('Dec 28, 2020'), 4029],
    [new Date('Dec 29, 2020'), 3366],
    [new Date('Dec 30, 2020'), 3851],
    [new Date('Dec 31, 2020'), 4800],
    [new Date('Jan 1, 2021'), 5041],
    [new Date('Jan 2, 2021'), 2937],
    [new Date('Jan 3, 2021'), 2892]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'NYC Daily Positive (3458, 0.041%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_newyork'));
  chart.draw(view, options);
}

function drawTrendlinesNewark() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 73],
    [new Date('Dec 23, 2020'), 161],
    [new Date('Dec 24, 2020'), 134],
    [new Date('Dec 25, 2020'), 202],
    [new Date('Dec 26, 2020'), 112],
    [new Date('Dec 27, 2020'), 61],
    [new Date('Dec 28, 2020'), 109],
    [new Date('Dec 29, 2020'), 100],
    [new Date('Dec 30, 2020'), 152],
    [new Date('Dec 31, 2020'), 199],
    [new Date('Jan 1, 2021'), 228],
    [new Date('Jan 2, 2021'), 166],
    [new Date('Jan 3, 2021'), 130],
    [new Date('Jan 4, 2021'), 56]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'Newark Daily Positive (135, 0.048%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_newark'));
  chart.draw(view, options);
}

function drawTrendlinesDane() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 62],
    [new Date('Dec 23, 2020'), 137],
    [new Date('Dec 24, 2020'), 106],
    [new Date('Dec 25, 2020'), 106],
    [new Date('Dec 26, 2020'), 170],
    [new Date('Dec 27, 2020'), 170],
    [new Date('Dec 28, 2020'), 167],
    [new Date('Dec 29, 2020'), 71],
    [new Date('Dec 30, 2020'), 123],
    [new Date('Dec 31, 2020'), 156],
    [new Date('Jan 1, 2021'), 156],
    [new Date('Jan 2, 2021'), 157],
    [new Date('Jan 3, 2021'), 270],
    [new Date('Jan 4, 2021'), 205]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'Dane County Daily Positive (147, 0.027%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_dane'));
  chart.draw(view, options);
}

function drawTrendlinesChicago() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 972],
    [new Date('Dec 23, 2020'), 985],
    [new Date('Dec 24, 2020'), 886],
    [new Date('Dec 25, 2020'), 850],
    [new Date('Dec 26, 2020'), 850],
    [new Date('Dec 27, 2020'), 851],
    [new Date('Dec 28, 2020'), 749],
    [new Date('Dec 29, 2020'), 691],
    [new Date('Dec 30, 2020'), 1262],
    [new Date('Dec 31, 2020'), 1307],
    [new Date('Jan 1, 2021'), 949],
    [new Date('Jan 2, 2021'), 949],
    [new Date('Jan 3, 2021'), 1008],
    [new Date('Jan 4, 2021'), 990]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'Chicago Daily Positive (950, 0.035%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_chicago'));
  chart.draw(view, options);
}

function drawTrendlinesPhilly() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 1025],
    [new Date('Dec 23, 2020'), 744],
    [new Date('Dec 24, 2020'), 723],
    [new Date('Dec 25, 2020'), 385],
    [new Date('Dec 26, 2020'), 385],
    [new Date('Dec 27, 2020'), 386],
    [new Date('Dec 28, 2020'), 386],
    [new Date('Dec 29, 2020'), 925],
    [new Date('Dec 30, 2020'), 352],
    [new Date('Dec 31, 2020'), 1179],
    [new Date('Jan 1, 2021'), 404],
    [new Date('Jan 2, 2021'), 404],
    [new Date('Jan 3, 2021'), 405],
    [new Date('Jan 4, 2021'), 405]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'Philadelphia Daily Positive (579, 0.037%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_philly'));
  chart.draw(view, options);
}

function drawTrendlinesLA() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Daily Positive People');

  data.addRows([
    [new Date('Dec 22, 2020'), 4531],
    [new Date('Dec 23, 2020'), 5638],
    [new Date('Dec 24, 2020'), 5455],
    [new Date('Dec 25, 2020'), 5906],
    [new Date('Dec 26, 2020'), 5906],
    [new Date('Dec 27, 2020'), 5907],
    [new Date('Dec 28, 2020'), 5276],
    [new Date('Dec 29, 2020'), 4607],
    [new Date('Dec 30, 2020'), 4202],
    [new Date('Dec 31, 2020'), 5863],
    [new Date('Jan 1, 2021'), 8354],
    [new Date('Jan 2, 2021'), 5625],
    [new Date('Jan 3, 2021'), 5625],
    [new Date('Jan 4, 2021'), 3780]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
  }]);

  var options = {
    title: 'LA Daily Positive (5477, 0.137%)',
    legend: 'none',
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Number of People'
    },
    colors: ['#AB0D06'],
    trendlines: {
      0: {
        type: 'linear',
        color: '#111',
        opacity: .3
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_la'));
  chart.draw(view, options);
}
