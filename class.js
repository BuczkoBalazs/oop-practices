class Poem {
    constructor({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
        this.year = yearFromInternet,
        this.author = authorFromInternet,
        this.title = titleFromInternet,
        this.text = textFromInternet
    }
    
    makePage() {
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

const poemOfAndras = new Poem(poemData)


class ForeignPoem extends Poem{
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet, translator) {
        super(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet);
        this.translator = translator;
    }
    
    makePage() {
        console.log(`
        Title: ${this.title}
        
        ${this.text}

        Author: ${this.author}
        Translator: ${this.translator}
        Year: ${this.year}
    `)
    }
}

const weoresPoem2 = new ForeignPoem(1962, "Weöres Sándor", "Énhasadás", `Utcasarkon várok rám,
Fél órája is van tán,
Ám értelmem felragyog,
Nem jövök, mert itt vagyok`, "Majomkolbász")

weoresPoem2.makePage()