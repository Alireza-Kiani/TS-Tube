import {io} from "../services/socket";

export const emit = (event: string, value: any) => {
    return new Promise((resolve, reject) => {
        io.emit(event, value, (arg: any, err: any) => {
            if (err) {
                reject(err);
            }
            resolve(arg);
        });
    });
}