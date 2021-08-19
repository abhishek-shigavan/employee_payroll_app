window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});


const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="../assets/profile_pics/profile2.png">
            </td>
            <td>Abhishek Shigavan</td>
            <td>Male</td>
            <td>
                <div class="dept_Label">HR</div>
                <div class="dept_Label">Engineer</div>
            </td>
            <td>300000</td>
            <td>December 1 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="../assets/icons/deleteIcon.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="../assets/icons/createIcon.svg">           
            </td>
        </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
};