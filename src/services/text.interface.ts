export interface ISentence {
    en: string;
    ru: string;
}

export interface ISentenceAll {
    sentenceAll: ISentence[]
}

export interface IDataSentence {
    data: {
        sentence: ISentence
    }
}

export interface IDataSentenceAll {
    data: {
        sentenceAll: ISentence[]
    }
}
