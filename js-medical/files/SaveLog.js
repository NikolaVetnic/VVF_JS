import * as fs from "fs";

export function saveLog(log) {
    fs.writeFile(
        "/Users/nikolavetnic/Documents/Various Projects/vvf-js/js-medical/log/log.txt",
        log,
        (err) => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        }
    );
}
