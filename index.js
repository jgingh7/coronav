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
    5077, 5005, 5006,
    5045, 4306, 5168,
    4508, 4746, 6222,
    5018, 4988, 4520,
    4509, 3571
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 8399000)
  getChart('NYC', numbers, averages[0], averages[1], 'chart_newyork')
}

function drawTrendlinesNewark() {
  const numbers = [
    280, 197, 298,
    204, 101, 138,
    315, 319, 275,
    276, 223, 132,
    102, 186
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 282100)
  getChart('Newark', numbers, averages[0], averages[1], 'chart_newark')
}

function drawTrendlinesDane() {
  const numbers = [
    753, 293, 190,
    191, 134, 95,
    122, 236, 137,
    170, 135, 89,
    43, 22
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 546700)
  getChart('Dane County', numbers, averages[0], averages[1], 'chart_dane')
}

function drawTrendlinesChicago() {
  const numbers = [
    1590, 1268, 1269,
    909, 988, 1089,
    799, 1126, 1059,
    723, 737, 623,
    747, 623
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 2706000)
  getChart('Chicago', numbers, averages[0], averages[1], 'chart_chicago')
}

function drawTrendlinesPhilly() {
  const numbers = [
    792, 650, 517,
    517, 517, 818,
    672, 586, 669,
    452, 453, 453,
    453, 529
  ]

  const averages = [0, 0]
  getAvg(numbers, averages, 1584000)
  getChart('Philadelphia', numbers, averages[0], averages[1], 'chart_philly')
}

function drawTrendlinesLA() {
  const numbers = [
    8374, 7458, 6885,
    5154, 5242, 4940,
    4696, 7912, 6040,
    5751, 4364, 4103,
    3411, 2111
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
    new Date('Jan 7, 2021'), new Date('Jan 8, 2021'), new Date('Jan 9, 2021'),
    new Date('Jan 10, 2021'), new Date('Jan 11, 2021'), new Date('Jan 12, 2021'),
    new Date('Jan 13, 2021'), new Date('Jan 14, 2021'), new Date('Jan 15, 2021'),
    new Date('Jan 16, 2021'), new Date('Jan 17, 2021'), new Date('Jan 18, 2021'),
    new Date('Jan 19, 2021'), new Date('Jan 20, 2021')
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
