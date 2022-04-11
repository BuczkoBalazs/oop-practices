function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;
    this.makePage = function () {
        console.log(`
            Title: ${this.title}
            
            ${this.text}

            Author: ${this.author}
            Year: ${this.year}
        `)
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

Poem.prototype.lang = "hun"
const poemOfAndras = new Poem(poemData)

// poemOfAndras.favBy = "András Ránki"

poemOfAndras.makePage()

