import './modules'

$('.app__header-hamburger').on('click', function () {
  $(this).toggleClass('is-active');
  $('.app__sidebar').toggleClass('app__sidebar--opened');
});
var productionElem = $("#chart_production");

// global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.legend.display = false;
// For a doughnut chart
var productionChart = new Chart(productionElem,{
    type: 'doughnut',
    data: {
      labels: ["TRANSPORT", "MILK YEILD", "BEEF", "BREEDING"],
      datasets: [{
        data: [110, 202, 263, 195],
        backgroundColor: [
          '#ffffff',
          '#1b8399',
          '#378e3c',
          '#10122f',
        ],
        borderWidth: 0,
        hoverBackgroundColor: [
          '#ffffff',
          '#1b8399',
          '#378e3c',
          '#10122f',
        ],
      }],
    },
    options: {
      layout: {
          padding: {
              left: 50,
              right: 100,
              top: 20,
              bottom: 50
          }
      },
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          backgroundColor: null,
          borderColor: null,
          borderRadius: 4,
          borderWidth: 1,
          color: '#000000',
          font: {
            size: 12
          },
          offset: 25,
          padding: 0,
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex] || null;
          }
        }
      },
      cutoutPercentage: 43,
      tooltips: {
            enabled: false,
            // yAlign: 'bottom',
            // callbacks: {
            //   label: function(tooltipItems, data) {  
            //     return data.labels[tooltipItems.index];
            //   },
            // },
            // custom: function(tooltipModel) {
            //     // Tooltip Element
            //     var tooltipEl = document.getElementById('chartjs-tooltip');

            //     // Create element on first render
            //     if (!tooltipEl) {
            //         tooltipEl = document.createElement('div');
            //         tooltipEl.id = 'chartjs-tooltip';
            //         tooltipEl.innerHTML = "<table></table>";
            //         document.body.appendChild(tooltipEl);
            //     }

            //     // Hide if no tooltip
            //     if (tooltipModel.opacity === 0) {
            //         tooltipEl.style.opacity = 0;
            //         return;
            //     }

            //     // Set caret Position
            //     tooltipEl.classList.remove('above', 'below', 'no-transform');
            //     if (tooltipModel.yAlign) {
            //         tooltipEl.classList.add(tooltipModel.yAlign);
            //     } else {
            //         tooltipEl.classList.add('no-transform');
            //     }

            //     function getBody(bodyItem) {
            //         return bodyItem.lines;
            //     }

            //     // Set Text
            //     if (tooltipModel.body) {
            //         var titleLines = tooltipModel.title || [];
            //         var bodyLines = tooltipModel.body.map(getBody);

            //         var innerHtml = '<thead>';

            //         titleLines.forEach(function(title) {
            //             innerHtml += '<tr><th>' + title + '</th></tr>';
            //         });
            //         innerHtml += '</thead><tbody>';

            //         bodyLines.forEach(function(body, i) {
            //             var colors = tooltipModel.labelColors[i];
            //             var span = '<span class="tooltip-line" style=""></span>';
            //             innerHtml += '<tr><td>' + span + body + '</td></tr>';
            //         });
            //         innerHtml += '</tbody>';

            //         var tableRoot = tooltipEl.querySelector('table');
            //         tableRoot.innerHTML = innerHtml;
            //     }

            //     // `this` will be the overall tooltip
            //     var position = this._chart.canvas.getBoundingClientRect();

            //     // Display, position, and set styles for font
            //     tooltipEl.style.opacity = 1;
            //     tooltipEl.style.position = 'absolute';
            //     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            //     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            //     tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            //     tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            //     tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            //     tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            //     tooltipEl.style.pointerEvents = 'none';
            // }
        }
    }
});


new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Statistic 1", "Statistic 2", "Statistic 3", "Statistic 4", "Statistic 5", "Statistic 6", "Statistic 7", "Statistic 8"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9","#c45850", "#8e5ea2", "#e8c3b9", "#c45850"],
          data: [2478,5267,734,784,433, 200, 350, 500]
        }
      ]
    },
    options: {
      plugins: {
        datalabels: {
          display: false
        }
      },
      tooltips: {
        enabled: false,
      },
      scales: {
        xAxes: [{
          // type: 'time',
          // time: {
          //   unit: 'month'
          // },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }],
        yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
        }]
      },
      barThickness: 13,
    }
});
