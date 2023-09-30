// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display JSON data
    fetch('sports_scores.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('scoreTableBody');
            data.players.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.playerName}</td>
                    <td>${player.season}</td>
                    <td>${player.scoring.map(score => `${score.game}: ${score.score}`).join(', ')}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});