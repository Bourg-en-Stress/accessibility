



var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['% Personnes Valides', ' % dû au vieillissement', ' % handicap moteur', '% handicap cognitif', '% handicap auditif', '% handicap visuel'],
            datasets: [{
                label: 'Pourcentages handicaps',
                data: [76, 17, 2, 2, 2, 1],
                backgroundColor: [
                    'rgba(20, 20, 20,0.9)',
                    'rgba(3, 78, 162,1.0)',
                    'rgba(20, 20, 20, 0.5)',
                    'rgba(3, 110, 210,1.0)',
                    'rgba(20, 20, 20, 0.8)',
                    'rgba(0, 106, 103,1.0)',
                ]
            }]
        },
        options: {
        }
    });