import { BloodPressureExam } from "./BloodPressureExam.js";
import { CholesterolLevelExam } from "./CholesterolLevelExam.js";
import { SugarLevelExam } from "./SugarLevelExam.js";

export function createExam(examType) {
    const examTypes = [
        "BLOOD_PRESSURE_EXAM",
        "CHOLESTEROL_LEVEL_EXAM",
        "SUGAR_LEVEL_EXAM",
    ];

    return examType === examTypes[0]
        ? new BloodPressureExam()
        : examType === examTypes[1]
        ? new CholesterolLevelExam()
        : examType === examTypes[2]
        ? new SugarLevelExam()
        : null;
}
