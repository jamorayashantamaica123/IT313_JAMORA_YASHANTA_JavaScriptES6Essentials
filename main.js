import { computeAverage } from "./gradeUtils.js";
import isPassing from "./gradeUtils.js";

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

function getEnrollees() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
}

async function generateReport() {
    try {
        const data = await getEnrollees();

        const results = data.map((enrollee) => {
            const { name, prelim, midterm, final } = enrollee;

            const average = computeAverage(prelim, midterm, final);
            const status = isPassing(average) ? "PASSING" : "PROBATION";

            return {
                name,
                average,
                status
            };
        });

        const passing = results.filter(
            (student) => student.status === "PASSING"
        );

        const classTotal = results.reduce((total, student) => {
            return total + student.average;
        }, 0);

        const classAverage = classTotal / results.length;

        const report = `
=== IT313 Enrollment Eligibility Report ===
${results.map((student) =>
    `${student.name} - Average: ${student.average.toFixed(2)} - ${student.status}`
).join("\n")}
Class Average: ${classAverage.toFixed(2)}
Passing: ${passing.length} / ${results.length}
`;

        console.log(report);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

generateReport();