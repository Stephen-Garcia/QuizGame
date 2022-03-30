const highscoresEl = $('#highscores-list');
const clearBtn = $('#clear-btn');
const backBtn = $('#back-btn');

clearBtn.on('click', function () {
    $('li').each(function () {
        $(this).remove();
    });
    localStorage.setItem("highScores", "[]");
});

backBtn.on('click', function () {
    window.location.href = 'index.html';
});

const highScores = JSON.parse(localStorage.getItem("highScores"));

highScores.sort(function (a, b) {
    return b.score - a.score;
});

for (var i = 0; i < highScores.length; i++) {
    var highScoresItem = $('<li>')
        .text(`${i+1}. ${highScores[i].initials} - ${highScores[i].score}`)
        .addClass('highscore-item');
    highscoresEl.append(highScoresItem);
}