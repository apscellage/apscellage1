let scoreDuJeu = 0;
let scoreActuel = 0;
let currentMode = "";
let selectedCategory = "";
let currentQuestion = null;
let questionsPosees = 0;
let questionsRestantes = [];

// Normaliser texte (accents, majuscules, espaces)
function normalize(txt) {
    return txt
        .toLowerCase()
        .normalize("NFD")                     // enlever accents
        .replace(/[\u0300-\u036f]/g, "")      // enlever accents restants
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g, "") // enlever ponctuation
        .replace(/\s+/g, " ")                 // espaces multiples
        .trim();
}
function showScreen(id) {//
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
    
    if (id === 'home-screen' || id === 'mode-screen') {
        scoreActuel = 0;
        questionsPosees = 0;
        updateScoreUI();
    }
}

document.getElementById("monBoutonProphetie").addEventListener("click", showModes);
function showModes(cat) {
    selectedCategory = cat;
    document.getElementById('selected-category').innerText = cat;
    showScreen('mode-screen');
}

function confirmMode(mode) {
    currentMode = mode;
    const infoBox = document.getElementById('info-text');
    let points = "";

    if (mode === 'vrai-faux') {
        points = `Réponse correcte : <span class="points-pos">+4 points</span> <br> Réponse fausse : <span class="points-neg">-8 points</span> `;
    } else if (mode === 'quiz') {
        points = `Réponse correcte : <span class="points-pos">+6 points</span> <br> Réponse fausse : <span class="points-neg">-6 points</span> `;
    } else {
        points = `Réponse correcte : <span class="points-pos">+8 points</span> <br> Réponse fausse : <span class="points-neg">-4 points</span> `;
    }

    infoBox.innerHTML = points;
    showScreen('info-screen');
}
// Mélanger tableau
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getLimiteQuestions() {
    if (currentMode === "vrai-faux") return 36;
    if (currentMode === "quiz") return 24;
    if (currentMode === "complet") return 18;
    return 0;
}

function startTrivia() {
    scoreActuel = 0;
    questionsPosees = 0;
    updateScoreUI();

    questionsRestantes = shuffle(
        database.filter(q => q.type === currentMode && q.cat === selectedCategory)
    );

    showScreen('game-screen');
    nextQuestion();
}

function nextQuestion() {

    if (questionsPosees >= getLimiteQuestions()) {
        afficherSMSFinal();
        return;
    }

    if (questionsRestantes.length === 0) {
        afficherSMSFinal();
        return;
    }
  document.getElementById('feedback-message').classList.add('hidden');

    // NOUVEAU : prendre une question sans répétition
    if (questionsRestantes.length === 0) {
        afficherSMSFinal();
        return;
    }
    currentQuestion = questionsRestantes.shift();

    document.getElementById('question-display').innerText = currentQuestion.q;
    const optionsDiv = document.getElementById('answer-options');
    optionsDiv.innerHTML = "";

    if (currentMode === 'vrai-faux') {
        shuffle(["Vrai","Faux"]).forEach(opt => createBtn(opt, opt));
    } 
    else if (currentMode === 'quiz') {
        // Mélanger les options
        const shuffledOptions = shuffle([...currentQuestion.options]);
        shuffledOptions.forEach(opt => createBtn(opt, opt));
    } 
    else {
        optionsDiv.innerHTML =
        `<textarea id="reponse-joueur" rows="5" placeholder="Réponse..."></textarea>
         <br>
         <button class="btn" onclick="checkAns(document.getElementById('text-ans').value)">Envoyer</button>`;
    }
}

function createBtn(text, val) {
    const b = document.createElement('button');
    b.className = "btn";
    b.innerText = text.toUpperCase();
    b.onclick = () => checkAns(val);
    document.getElementById('answer-options').appendChild(b);
}

function checkAns(val) {

    const feedback = document.getElementById('feedback-message');
    feedback.classList.remove('hidden');

    let isCorrect = false;

    // Mode complet → plusieurs réponses possibles
    if (currentMode === "complet") {
        const userAnswer = normalize(val);

        if (Array.isArray(currentQuestion.r)) {
            isCorrect = currentQuestion.r.some(ans => normalize(ans) === userAnswer);
        } else {
            isCorrect = normalize(currentQuestion.r) === userAnswer;
        }
    } 
    else {
        isCorrect = normalize(val) === normalize(currentQuestion.r);
    }

    if (isCorrect) {
        scoreActuel += currentQuestion.points;
        scoreDuJeu += currentQuestion.points;
        feedback.innerHTML = `Correct ! +${currentQuestion.points} points🥳`;
        feedback.className = "feedback msg-correct";
    } else {
        scoreActuel -= currentQuestion.malus;
        scoreDuJeu -= currentQuestion.malus;
        feedback.innerHTML = `Faux ! -${currentQuestion.malus} points😓`;
        feedback.className = "feedback msg-wrong";
    }

    questionsPosees++;
    updateScoreUI();
    setTimeout(nextQuestion, 2000);
}
function updateScoreUI() {
    const globalDisplay = document.getElementById('current-score');
    globalDisplay.innerText = scoreDuJeu;
    scoreDuJeu < 0 ? globalDisplay.parentElement.classList.add('score-negative') : globalDisplay.parentElement.classList.remove('score-negative');

    const actuelDisplay = document.getElementById('score-actuel-val');
    if (actuelDisplay) actuelDisplay.innerText = scoreActuel;
}

function afficherSMSFinal() {
    const overlay = document.getElementById('sms-overlay');
    const msgPara = document.getElementById('sms-message');
    let message = "";

    if (scoreActuel >= 144) {
        message = "Bravo!! 🥳\nMerveilleux!!! vous etes dans le bon chemin pour pouvoir devenir un 144 mil 😀💛❤️💛👏🏽";
    } else if (scoreActuel >= 100) {
        message = "Tres bien, Félicitations !!! vous etes presque arrivé à la fin, Continuons à nous sceller! 😀☺️🙏🏽";
    } else if (scoreActuel >= 50) {
        message = "Bien!! Continuons à nous efforcer ☺️💛";
    } else if (scoreActuel >= 20) {
        message = "Assez bien, le scellage est un processus, continuons à nous efforcer que Dieu le voit ☺️🙏🏽";
    } else if (scoreActuel >= 0) {
        message = "Normal, nous pouvons mieux faire n’est-ce pas ? 😉 Halsuitta ! 💪🏽";
    } else {
        message = "Efforçons-nous, lisons la bible, méditons sur l’accomplissement à chaque jour car c’est la nouvelle alliance. On peut le faire 😊🙏🏽";
    }

    msgPara.innerText = message;
    overlay.classList.remove('hidden');
    overlay.style.display = "flex";
}

function fermerSMS() {
    const overlay = document.getElementById('sms-overlay');
    overlay.classList.add('hidden');
    overlay.style.display = "none";
    
    scoreActuel = 0;
    questionsPosees = 0;
    showScreen('mode-screen');
}
