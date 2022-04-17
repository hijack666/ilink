class TextService {
    _apiBase = 'https://academtest.ilink.dev/graphql';

    getResource = async (url: string) => {
        let res = await fetch(url, {
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getTextAndTranslate = async(): Promise<any> => {
        let url = `${this._apiBase}`;
        const body = {
            operationName: null,
            query: `{
                sentenceAll:
                    sentenceAll {
                        en
                        ru
                    }
                }`,
            variables: {},
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    }
}

export default TextService;