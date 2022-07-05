import * as fs from "fs";

import { Doctor } from "./people/Doctor.js";
import { Patient } from "./people/Patient.js";

let d = new Doctor("Milan", "Milanovic", "pedijatar");
let p = new Patient("Petar", "Petrovic", "1234567890123", "1");

d.addPatient(p);
d.addPatient(p);

p.setDoctor(d);

console.log(d);
console.log(p);

const content = "Some content!";

fs.writeFile(
    "/Users/nikolavetnic/Documents/Various Projects/vvf-js/js-medical/log/log.txt",
    content,
    (err) => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    }
);
