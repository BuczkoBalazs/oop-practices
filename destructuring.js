const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás", 
    textFromInternet: `Utcasarkon várok rám,
    Fél órája is van tán,
    Ám értelmem felragyog,
    Nem jövök, mert itt vagyok`
}


const pdafi = poemData.authorFromInternet
const pdyfi = poemData.yearFromInternet

// const {yearFromInternet, authorFromInternet} = poemData

function funWithPoemData({yearFromInternet, authorFromInternet}) {
    console.log(yearFromInternet)
    console.log(authorFromInternet)
};

funWithPoemData(poemData)