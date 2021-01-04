var dudes = document.querySelectorAll('.img img');
dudes = Array.from(dudes);


function getKeyFrom(dude) {
    return 'score' + _.capitalize(dude.alt);
}

function getScore(dude) {
    return +localStorage.getItem(getKeyFrom(dude)) || 0;
}

function setScore(dude, score) {
    localStorage.setItem(getKeyFrom(dude), score);
}

function updateDude(dude) {
    var score = getScore(dude);
    dude.nextElementSibling.textContent = score;
}

dudes.forEach(function(dude) {
    updateDude(dude);



    dude.addEventListener('click', function() {
        var score = getScore(dude);
        score++;

        setScore(dude, score);
        updateDude(dude);
    });

    dude.addEventListener('mouseover', function() {
        var otherDude = _.without(dudes, this)[0];
        otherDude.classList.add('desaturate');
    });
    dude.addEventListener('mouseout', function() {
        var otherDude = _.without(dudes, this)[0];
        otherDude.classList.remove('desaturate');
    });


});