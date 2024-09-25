// Initial array
var myArray = [
    { id: 0, name: 'sivasankar' },
    { id: 1, name: 'ariyavakumar' },
    { id: 2, name: 'kannan' },
    { id: 3, name: 'pandiyarajan' }
];

// Store the array in localStorage
localStorage.setItem('data', JSON.stringify(myArray));

// Add function
function add() {
    const adddata = { id: myArray.length, name: 'Prem' };
    const datas = JSON.parse(localStorage.getItem('data')) || [];
    datas.push(adddata);
    localStorage.setItem('data', JSON.stringify(datas));
    console.log(datas,"Add user");
}

// Get function
function get() {
    const datas = JSON.parse(localStorage.getItem('data')) || [];
    const result = datas.length ? datas : "No record found";
    return result; 
}

//Single Get function
function getsingle(id) {
    const datas = JSON.parse(localStorage.getItem('data')) || [];
    const item = datas.find((e) => e.id === id);
    return item ? item : `No item found with id: ${id}`;
}

// Update function
function update() {
    const datas = JSON.parse(localStorage.getItem('data')) || [];
    const data = { id: 4, name: 'Premkumar' }; 
    const index = datas.findIndex((e) => e.id === data.id);
    if (index !== -1) {
        datas[index].name = data.name;
        localStorage.setItem('data', JSON.stringify(datas));
        console.log(datas , "update user details");
    }else{
        console.log("No user found");
    }
}


// Delete function
function delet(id) {
    const datas = JSON.parse(localStorage.getItem('data')) || [];
    const updatedData = datas.filter((e) => e.id !== id);
    localStorage.setItem('data', JSON.stringify(updatedData));
    console.log(updatedData , "delete user id 3");
}


//functions
add();
console.log(getsingle(2),"Get single user details");
console.log(get(),"Get all user details");
update();
delet(3);
