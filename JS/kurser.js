
const table = document.querySelector('.tbody');

async function loadKurser(table){
    const url = 'https://localhost:44302/api/Course';
    const response = await fetch(url, {mode:'cors'});

    if(!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    console.log(data);
    for(var i = 0; i < Object.keys(data).length; i++) {
        var row = document.createElement('tr');

        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        var cellText1 = document.createTextNode(data[i].courseName);
        var cellText2 = document.createTextNode(data[i].teacherAlias);
        var cellText3 = document.createTextNode(data[i].hours);

        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        table.appendChild(row);
    }
}

loadKurser(table);

