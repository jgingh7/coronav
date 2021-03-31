google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawTrendlinesNewYork);
google.charts.setOnLoadCallback(drawTrendlinesNewark);
google.charts.setOnLoadCallback(drawTrendlinesDane);
google.charts.setOnLoadCallback(drawTrendlinesChicago);
google.charts.setOnLoadCallback(drawTrendlinesPhilly);
google.charts.setOnLoadCallback(drawTrendlinesLA);

function drawTrendlinesNewYork() {
  const numbers = [
    2229, 1363, 1363,
    1363, 4093, 4093,
    4093, 4093, 4094,
    2857, 3078, 3387,
    4477, 1518
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 8399000)
  getChart('NYC', numbers, averages[0], averages[1], 'chart_newyork')
}

function drawTrendlinesNewark() {
  const numbers = [
    180, 143, 143,
    144, 139, 120,
    126, 126, 154,
    176, 158, 155,
    124, 159
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 282100)
  getChart('Newark', numbers, averages[0], averages[1], 'chart_newark')
}

function drawTrendlinesChicago() {
  const numbers = [
    274, 477, 477,
    477, 345, 208,
    471, 472, 472,
    735, 564, 564,
    424, 550
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 2706000)
  getChart('Chicago', numbers, averages[0], averages[1], 'chart_chicago')
}

function drawTrendlinesDane() {
  const numbers = [
    36, 58, 59,
    27, 50, 32,
    41, 42, 71,
    58, 57, 46,
    42, 34
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 546700)
  getChart('Dane County', numbers, averages[0], averages[1], 'chart_dane')
}

function drawTrendlinesPhilly() {
  const numbers = [
    560, 479, 479,
    313, 313, 313,
    569, 570, 570,
    633, 435, 436,
    436, 713
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 1584000)
  getChart('Philadelphia', numbers, averages[0], averages[1], 'chart_philly')
}

function drawTrendlinesLA() {
  const numbers = [
    339, 294, 294,
    294, 177, 235,
    211, 211, 211,
    293, 262, 188,
    150, 141
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 3990000)
  getChart('Los Angeles', numbers, averages[0], averages[1], 'chart_la')
}


function getAvg(numbers, averages, totalPop) {
  let summation = 0
  for (var i = 0; i < numbers.length; i++) {
    summation += numbers[i]
  }
  averages[0] = Math.round(summation / numbers.length)
  averages[1] = ((averages[0] / totalPop) * 100).toFixed(3)
}

function getChart(city, numbers, avgNum, avgPercentage, chartName, dates = [
    new Date('Mar 17, 2021'), new Date('Mar 18, 2021'), new Date('Mar 19, 2021'),
    new Date('Mar 20, 2021'), new Date('Mar 21, 2021'), new Date('Mar 22, 2021'),
    new Date('Mar 23, 2021'), new Date('Mar 24, 2021'), new Date('Mar 25, 2021'),
    new Date('Mar 26, 2021'), new Date('Mar 27, 2021'), new Date('Mar 28, 2021'),
    new Date('Mar 29, 2021'), new Date('Mar 30, 2021')
  ]) {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Daily Positive People');

    data.addRows([
      [dates[0], numbers[0]],
      [dates[1], numbers[1]],
      [dates[2], numbers[2]],
      [dates[3], numbers[3]],
      [dates[4], numbers[4]],
      [dates[5], numbers[5]],
      [dates[6], numbers[6]],
      [dates[7], numbers[7]],
      [dates[8], numbers[8]],
      [dates[9], numbers[9]],
      [dates[10], numbers[10]],
      [dates[11], numbers[11]],
      [dates[12], numbers[12]],
      [dates[13], numbers[13]],
      [dates[14], numbers[14]]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
      calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation'
    }]);

    const title = city + ' Daily Positive (' + avgNum + ', ' + avgPercentage + '%)'

    var options = {
      title: title,
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
      },
      chartArea: {
        left: 100,
        top: 100,
        width: "68%",
        height: "65%"
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById(chartName));
    chart.draw(view, options);
  }
