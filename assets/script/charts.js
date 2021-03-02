var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['% Personnes Valides', ' % dû au vieillissement', ' % handicap moteur', '% handicap cognitif', '% handicap auditif', '% handicap visuel'],
            datasets: [{
                label: 'Pourcentages handicaps',
                data: [76, 17, 2, 2, 2, 1],
                backgroundColor: [
                    'rgba(243, 156, 18,1.0)',
                    'rgba(26, 188, 156,1.0)',
                    'rgba(142, 68, 173,1.0)',
                    'rgba(192, 57, 43,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(241, 196, 15,1.0)'
                ]
            }]
        },
        options: {
        }
    });