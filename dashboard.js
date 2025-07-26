const ctx = document.getElementById('typhoonChart').getContext('2d');

const typhoonData = {
  labels: [
    "2014", "2015", "2016", "2017", "2018", 
    "2019", "2020", "2021", "2022", "2023", "2024"
  ],
  datasets: [{
    label: "Signal No. 8 or Above",
    data: [2, 1, 3, 4, 5, 2, 1, 3, 2, 4, 3], // 🔧 Replace with real data
    backgroundColor: "rgba(54, 162, 235, 0.5)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: typhoonData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
};

new Chart(ctx, config);
