document.getElementById('calculate').addEventListener('click', () => {
    const A = parseFloat(document.getElementById('initial-value').value);
    const B = parseFloat(document.getElementById('growth-rate').value);
    const xStart = parseFloat(document.getElementById('x-start').value);
    const xEnd = parseFloat(document.getElementById('x-end').value);
  
    const xValues = [];
    const yValues = [];
  
    for (let x = xStart; x <= xEnd; x += 0.1) {
      xValues.push(x);
      yValues.push(A * Math.exp(B * x));
    }
  
    Highcharts.chart('plot', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Exponential Growth',
      },
      xAxis: {
        title: {
          text: 'X',
        },
        categories: xValues,
      },
      yAxis: {
        title: {
          text: 'Y',
        },
      },
      series: [
        {
          name: 'Exponential Growth',
          data: yValues,
        },
      ],
    });
    document.getElementById('result-equation').textContent = `Equation: y = ${A} * e^(${B}x)`;
    document.getElementById('result-x-start').textContent = `X Start: ${xStart}`;
    document.getElementById('result-x-end').textContent = `X End: ${xEnd}`;
    document.getElementById('result-values').textContent = `Calculated Values: [${yValues.join(', ')}]`;
  });
  