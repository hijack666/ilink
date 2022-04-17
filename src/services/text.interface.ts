export interface Sentence {
    en: string;
    ru: string;
}

export interface SentenceAll {
    sentenceAll: Sentence[]
}

export interface DataSentence {
    data: {
        sentence: Sentence
    }
}

export interface DataSentenceAll {
    data: {
        sentenceAll: Sentence[]
    }
}
