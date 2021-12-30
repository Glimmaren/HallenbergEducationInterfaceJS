

async function loadTeacherDropdown(){
    const url = 'https://localhost:44302/api/Teacher';
    const response = await fetch(url);

    if(!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    var dropDown = document.getElementById('teachers');

    for(var element in data){
        var teacher = data[element];

        dropDown.options[dropDown.options.length] = new Option(teacher.alias, data.id);
    }
}

async function postCourse(){

    const url = 'https://localhost:44302/api/Course';

    await fetch(url, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            coursename: document.getElementById('courseName').value,
            teacherId: document.getElementById('teachers').selectedIndex,
            hours: document.getElementById('hours').value
        })
    }).then(respone => respone.json());
}

loadTeacherDropdown();