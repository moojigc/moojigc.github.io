const nameEnglish = document.querySelector(".name");
const nameJapanese = document.querySelector(".name-ja");

nameJapanese.style.display = "none";

function changeToKatakana() {
    nameJapanese.style.display = "block";
    nameEnglish.style.display = "none";
}

function changeToEnglish() {
    nameJapanese.style.display = "none";
    nameEnglish.style.display = "block";
}

nameEnglish.addEventListener("click", changeToKatakana);
nameJapanese.addEventListener("click", changeToEnglish);

function autoUpdateAge() { // Because why not
    age = parseInt(moment('19960229', 'YYYYMMDD').fromNow());
    document.querySelector("#age").textContent = age;
}
autoUpdateAge();