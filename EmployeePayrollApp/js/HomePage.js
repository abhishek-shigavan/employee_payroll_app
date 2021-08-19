window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});


const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();  
    for ( const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="${empPayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDeptHtml(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._start_date}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="../assets/icons/deleteIcon.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="../assets/icons/createIcon.svg">           
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for ( const dept of deptList ) {
        deptHtml = `${deptHtml} <div class="dept_Label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Abhishek Shigavan',
            _gender: 'Male',
            _department: [
                'Engineering', 'HR'
            ],
            _salary: '2500000',
            _start_date: 'December 01 2020',
            _note: '',
            _profilePic: '../assets/profile_pics/profile2.png'
        },
        {
            _name: 'Akash Kakde',
            _gender: 'Male',
            _department: [
                'Engineering', 'Finance'
            ],
            _salary: '4500000',
            _start_date: 'May 31 2019',
            _note: '',
            _profilePic: '../assets/profile_pics/profile4.png'
        }
    ]
    return empPayrollListLocal;
}