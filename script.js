const words = [
    { pl: "garnitur", fr: "un costume" },
    { pl: "sweter", fr: "un pull" },
    { pl: "buty sportowe", fr: "des chaussures de sport" },
    { pl: "sukienka", fr: "une robe" },
    { pl: "czapka z daszkiem", fr: "une casquette" },
    { pl: "kapelusz", fr: "un chapeau" },
    { pl: "okulary przeciwsłoneczne", fr: "des lunettes de soleil" },
    { pl: "koszula", fr: "une chemise" },
    { pl: "marynarka/kurtka", fr: "une veste" },
    { pl: "kurtka", fr: "un blouson" },
    { pl: "spodnie", fr: "un pantalon" },
    { pl: "spódnica", fr: "une jupe" },
    { pl: "buty na obcasie", fr: "des chaussures à talon" },
    { pl: "kamizelka", fr: "un gilet" },
    { pl: "slipy/majtki", fr: "un slip" },

    { pl: "szalik", fr: "une écharpe" },
    { pl: "rękawiczki", fr: "des gants" },
    { pl: "skarpetki", fr: "des chaussettes" },
    { pl: "czapka", fr: "un bonnet" },
    { pl: "biustonosz", fr: "un soutien-gorge" },
    { pl: "czapka z daszkiem", fr: "une casquette" },
    { pl: "kurtka puchowa", fr: "une doudoune" },
    { pl: "szorty", fr: "un short" },
    { pl: "płaszcz", fr: "un manteau" },
    { pl: "kozaki", fr: "des bottes" },
    { pl: "strój kąpielowy", fr: "un maillot de bain" },
    { pl: "rajstopy", fr: "des collants" },
    { pl: "sandały", fr: "des sandales" },
    { pl: "podkoszulek", fr: "un débardeur" },
];

let score = 0;

const flashcardsContainer = document.getElementById("flashcards");

words.forEach(word => {
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");

    const card = document.createElement("div");
    card.classList.add("card");

    const front = document.createElement("div");
    front.classList.add("front");
    front.textContent = word.pl;

    const back = document.createElement("div");
    back.classList.add("back");
    back.textContent = word.fr;

    card.appendChild(front);
    card.appendChild(back);
    flashcard.appendChild(card);

    // Input do zgadywania tłumaczenia
    const guessContainer = document.createElement("div");
    guessContainer.classList.add("guess-container");

    const guessInput = document.createElement("input");
    guessInput.classList.add("guess-input");
    guessInput.setAttribute("placeholder", "Podaj tłumaczenie");

    const checkButton = document.createElement("button");
    checkButton.textContent = "Sprawdź";

    guessContainer.appendChild(guessInput);
    guessContainer.appendChild(checkButton);

    flashcard.appendChild(guessContainer);
    flashcardsContainer.appendChild(flashcard);

    // Obracanie fiszki po podwójnym kliknięciu
    flashcard.addEventListener("dblclick", function () {
        card.classList.toggle("flipped");
    });

    // Funkcja sprawdzająca poprawność odpowiedzi
    function checkAnswer() {
        if (guessInput.value.trim().toLowerCase() === word.fr.toLowerCase()) {
            score++;
            document.getElementById("score").textContent = score;
            guessInput.style.border = "2px solid green";
        } else {
            guessInput.style.border = "2px solid red";
        }
        setTimeout(() => {
            guessInput.style.border = "2px solid #8c34eb";
            guessInput.value = "";
        }, 1000);
    }

    // Sprawdzanie po kliknięciu przycisku
    checkButton.addEventListener("click", checkAnswer);

    // Sprawdzanie po naciśnięciu Enter
    guessInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
});
