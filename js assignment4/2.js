let students = [
    { name: "Akhil", marks: 85 },
    { name: "Priya", marks: 72 },
    { name: "Ravi", marks: 90 },
    { name: "Meena", marks: 45 },
    { name: "Karan", marks: 30 }
];

let passed = students.filter(s => s.marks >= 40);
console.log("Passed Students:", passed);

let distinction = students.filter(s => s.marks >= 85);
console.log("Distinction Students:", distinction);

let average = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log("Class Average:", average);

let topper = students.reduce((max, s) => s.marks > max.marks ? s : max);
console.log("Topper:", topper);

let failedCount = students.filter(s => s.marks < 40).length;
console.log("Failed Students Count:", failedCount);

let grades = students.map(s => {
    let grade = "";
    if (s.marks >= 85) grade = "A";
    else if (s.marks >= 60) grade = "B";
    else if (s.marks >= 40) grade = "C";
    else grade = "Fail";
    return { name: s.name, marks: s.marks, grade: grade };
});
console.log("Grades:", grades);

let ranked = [...students]
    .sort((a, b) => b.marks - a.marks)
    .map((s, index) => ({ name: s.name, marks: s.marks, rank: index + 1 }));
console.log("Ranked Students:", ranked);

let lowest = students.reduce((min, s) => s.marks < min.marks ? s : min);
let removedLowest = students.filter(s => s.name !== lowest.name);
console.log("After Removing Lowest:", removedLowest);

let leaderboard = [...students].sort((a, b) => b.marks - a.marks);
console.log("Leaderboard:", leaderboard);