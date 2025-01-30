// learning activity

const DAYS = 6;


const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
        
    }
}

let i = 0

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function (item) { //foreach go over each value in the array and runs the function once for each element, item is the element being process
    if (item < LIMIT) {
        console.log(item);
    }
});

for (const i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();

for (let i = 0; i <= DAYS; i++) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i);
  console.log(dayNames[nextDay.getDay()]);
}

