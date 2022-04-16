export interface Sentence {
    en: string;
    ru: string;
}

export interface DataSentence {
    data: {
        sentence: Sentence
    }
}