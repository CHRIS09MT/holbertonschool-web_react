interface Student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Christopher",
	lastName: "Morales",
	age: 21,
	location: 'Colombia'
};

const student2: Student = {
	firstName: "Luis",
	lastName: "Carvajal",
	age: 23,
	location: 'Chile'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
thead.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
