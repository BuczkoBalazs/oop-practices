class Poem {
    constructor({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
        this.year = yearFromInternet,
        this.author = authorFromInternet,
        this.title = titleFromInternet,
        this.text = textFromInternet
    }
}

const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás", 
    textFromInternet: `Utcasarkon várok rám,
    Fél órája is van tán,
    Ám értelmem felragyog,
    Nem jövök, mert itt vagyok`
}

const poemOfAndras = new Poem(poemData)

console.log(poemOfAndras)