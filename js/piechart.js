// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['အသက်', 'သေဆုံးသူ'],
  ['၄၀ အောက်', 0],
  ['၄၀ မှ ၇၀ ကြား', 4],
  ['၇၀ အထက်', 2]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Convid-19 ကြောင့် သေဆုံးသူများ၏ အသက်အပိုင်းအခြားပြ ဇယား'};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}