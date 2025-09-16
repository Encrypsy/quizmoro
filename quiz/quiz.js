let dataquiz = [
    {
        question: "Proklamasi Kemerdekaan RI tahun 1945. HUT RI ke-79 dirayakan pada tahun?",
        option: ["2023", "2024", "2025"], 
        correct: "2024",
    },
    {
        question: "Lima pulau terbesar Indonesia: Papua, Kalimantan, Sumatra, Sulawesi, Jawa. Median luasnya adalah pulau?",
        option: ["Kalimantan", "Sumatra", "Sulawesi"], 
        correct: "Sumatra",
    },
    {
        question: "Ekspor Indonesia naik dari US$63,75 miliar (2022) menjadi US$69,86 miliar (2023). Kenaikannya sekitar?",
        option: ["10%", "15%", "8%"], 
        correct: "18%",
    },
    {
        question: "Rumah adat Rumah Gadang dengan atap segitiga berasal dari?",
        option: ["Bali", "Jawa Barat", "Sumatra Barat"], 
        correct: "Sumatra Barat",
    },
    {
        question: "Jarak Bandung-Yogya di peta berskala 1:5.000.000 adalah 4 cm. Jarak sebenarnya?",
        option: ["200 km", "300 km", "210 km"], 
        correct: "200 km",
    },
    {
        question: "Masa jabatan maksimal seorang Presiden Indonesia adalah?",
        option: ["10 tahun", "15 tahun", "5 tahun"], 
        correct: "10 tahun",
    },
    {
        question: "55% dari 270,2 juta penduduk Indonesia ada di Jawa. Penduduk di luar Jawa sekitar?",
        option: ["120 juta", "110 juta", "122 juta"], 
        correct: "122 juta",
    },
    {
        question: "Keliling lapangan bulu tangkis (13,4 m x 6,1 m) adalah?",
        option: ["49,0 m", "39,0 m", "19,0 m"], 
        correct: "39,0 m",
    },
    {
        question: "Bunga yang endemik Sumatra dan mengeluarkan bau busuk adalah?",
        option: ["Rafflesia arnoldii", "Roger sumatra", "Bunga bangkai"], 
        correct: "Rafflesia arnoldii",
    },
    {
        question: "Jumlah kata dalam ikrar Sumpah Pemuda (Satu Nusa, Satu Bangsa, Satu Bahasa) membentuk pola?",
        option: ["Aritmatika", "Segitiga sama-sama", "Bukan keduanya"], 
        correct: "Bukan keduanya",
    }

];

const quizcontainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const option = document.querySelector(".quiz-container .option"); 
const next = document.querySelector(".quiz-container .next");
const quizresult = document.querySelector(".result-container");

let questionNumber = 0;
const Maxquestion = 10;

const shuffleArray = array => {
    return array.slice().sort(() => Math.random() - 0.5);
};

dataquiz = shuffleArray(dataquiz);

const createquestion = () => {
    option.innerHTML = "";
    question.innerHTML = dataquiz[questionNumber].question;

    const shuffledoption = shuffleArray(dataquiz[questionNumber].option);
    
    shuffledoption.forEach(o => {
        const btn = document.createElement("button");
        btn.classList.add("button")
        btn.innerHTML = o;
        option.appendChild(btn);
    });
};

const displayquizresult = () => {
    quizresult.style.display = "flex";
    quizcontainer.style.display = "none";
}

createquestion();

const displaynextquestion = () => {
    if (questionNumber >= Maxquestion -1) {
        displayquizresult();
        return;
    }

    questionNumber++;
    createquestion();
}

next.addEventListener("click", displaynextquestion)