import fetch from "node-fetch";

interface Header {
    [key: string]: string
}

interface Options {
    method: string;
    headers?: Header;
    body?: any;
}

export default class Fetch {
    private readonly url: string;
    private readonly options: Options | undefined;
    private response?: any;
    private result: any;

    constructor (url: string, method: string, body?: any) {
        if (method == "get" || method == "Get" || method == "GET") {
            this.options = undefined;
        } else {
            this.options = {
                method,
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "Application/json"
                }
            }
        }
        this.url = url;
    }

    send = async () => {
        this.response = await fetch(this.url, this.options);
        this.result = await this.response.json();
        return this.result;
    }
}