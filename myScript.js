
var loginStatus = false;
var name, faculty, department, year, sem

var button = document.getElementById("mca");
button.onclick = function(){
    if(loginStatus == TRUE){
        alert("login");
        return true;
    } else {
        alert("Please login first");
        return false;
    }
}

function selectedSemester(){
    var semester = document.getElementById("sem")
    sem = semester.options[semester.selectedIndex].text

    console.log(sem)
}

function selectedYear(){
    var y = document.getElementById("year")
    year = y.options[y.selectedIndex].text
    var semester = document.getElementById("sem")

    if(faculty == "E.T.M"){
        semester.options.length = 0
        semester.options[0] = new Option('Choose Semester...')
        semester.options[1] = new Option('I')
        semester.options[2] = new Option('II')
        semester.options[3] = new Option('III')
        semester.options[4] = new Option('IV')
        semester.options[5] = new Option('V')
        semester.options[6] = new Option('VI')
        semester.options[7] = new Option('VII')
        semester.options[8] = new Option('VIII')

    } else if(faculty == "Science"){
        semester.options.length = 0
        semester.options[0] = new Option('Choose Semester...')
        semester.options[1] = new Option('I')
        semester.options[2] = new Option('II')
        semester.options[3] = new Option('III')
        semester.options[4] = new Option('IV')

    } else if(faculty == "Commerce & Arts"){
        semester.options.length = 0
        semester.options[0] = new Option('Choose Semester...')
        semester.options[1] = new Option('I')
        semester.options[2] = new Option('II')
        semester.options[3] = new Option('III')
        semester.options[4] = new Option('IV')

    } else if(faculty == "Education"){
        semester.options.length = 0
        semester.options[0] = new Option('Choose Semester...')
        semester.options[1] = new Option('I')
        semester.options[2] = new Option('II')
        semester.options[3] = new Option('III')
        semester.options[4] = new Option('IV')

    }
    console.log(year)
}

function selectedDepartment(){
    var dept = document.getElementById("depts")
    department = dept.options[dept.selectedIndex].text
    var year = document.getElementById("year")

    const date = new Date()
    const CurrentYear = date.getFullYear()
    var j = 1
    for(let i=2008; i<=CurrentYear; i++){
        year.options[j++] = new Option(i)
    }
    console.log(department)
}

function selectValue(){
    var selectedValue = document.getElementById("faculties")
    var dept = document.getElementById("depts")

    faculty = selectedValue.options[selectedValue.selectedIndex].text

    if(faculty == "E.T.M"){
        dept.options.length = 0
        dept.options[0] = new Option('Choose Department...')
        dept.options[1] = new Option('Department of Business Administration')
        dept.options[2] = new Option('Department of Computer Science & Engineering')
        dept.options[3] = new Option('Department of Engineering & Technological Studies')

    } else if(faculty == "Science"){
        dept.options.length = 0
        dept.options[0] = new Option('Choose Department...')
        dept.options[1] = new Option('Department of Biochemistry & Biophysics')
        dept.options[2] = new Option('Department of Botany')
        dept.options[3] = new Option('Department of Chemistry')
        dept.options[4] = new Option('Department of Ecological Studies')
        dept.options[5] = new Option('Department of Environmental Science')
        dept.options[6] = new Option('Department of Geography')
        dept.options[7] = new Option('Department of Mathematics')
        dept.options[8] = new Option('Department of Microbiology')
        dept.options[9] = new Option('Department of Molecular Biology & Biotechnology')
        dept.options[10] = new Option('Department of Physics')
        dept.options[11] = new Option('Department of Physiology')
        dept.options[12] = new Option('Department of Statistics')
        dept.options[13] = new Option('Department of Zoology')
    } else if(faculty == "Commerce & Arts"){
        dept.options.length = 0
        dept.options[0] = new Option('Choose Department...')
        dept.options[1] = new Option('Department of Bengali')
        dept.options[2] = new Option('Department of Commerce')
        dept.options[3] = new Option('Department of Economics')
        dept.options[4] = new Option('Department of English')
        dept.options[5] = new Option('Department of Folklore')
        dept.options[6] = new Option('Department of Hindi')
        dept.options[7] = new Option('Department of History')
        dept.options[8] = new Option('Department of Library & Information Science')
        dept.options[9] = new Option('Department of Modern Languages')
        dept.options[10] = new Option('Department of Philosophy')
        dept.options[11] = new Option('Department of Political Science')
        dept.options[12] = new Option('Department of Rural Development Studies')
        dept.options[13] = new Option('Department of Sanskrit')
        dept.options[14] = new Option('Department of Sociology')
        dept.options[15] = new Option('Department of Visual Arts')
        dept.options[16] = new Option('B.Voc Course in Journalism & Mass Communication')

    } else if(faculty == "Education"){
        dept.options.length = 0
        dept.options[0] = new Option('Choose Department...')
        dept.options[1] = new Option('Department of Education')
        dept.options[2] = new Option('Department of Lifelong Learning & Extension')
        dept.options[3] = new Option('Department of Physical Education')

    }

    console.log(faculty)
}

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

    var bodyClass = document.getElementById('bodyClass');
    bodyClass.classList.toggle('active');
    //document.body.style.position = "fixed";

}

function stopMoving(){
    var add = document.getElementsByClassName('moving_content');
    var addAttribute = document.createAttribute('scrollamount');
    addAttribute.value = 0;
    add.setAttributeNode(addAttribute);
}

function studentLogin(){
    
    var givenUserId = document.getElementById("exampleInputEmail1").value;
    var givenPassword = document.getElementById("exampleInputPassword1").value;

    var emailId = window.localStorage.getItem("Email");
    var password = window.localStorage.getItem("Password");

    if(givenPassword == '' && givenUserId == ''){
        alert("Blank userid and password not allowed");

    } else if(givenUserId == emailId && givenPassword == password ){    
        var name = window.localStorage.getItem("Name");
        alert("Welcome "+name);
        loginStatus = TRUE;
        //document.getElementById("welcome_msg").innerHTML="Welcome "+name;

    } else {
        alert("Incorrect userId or password");
    }

    
    console.log(userId, password);
}

function studentRegister(){
    var name = document.getElementById("exampleInputName").value;
    var dept = document.getElementById("exampleInputDept").value;
    var course = document.getElementById("exampleInputCourse").value;
    var email = document.getElementById("exampleInputEmail").value;
    var password = document.getElementById("exampleInputPassword").value;
    var confirmPassword = document.getElementById("exampleInputConfirmPassword1").value;

    if(password == confirmPassword){
        window.localStorage.setItem("Name",name);
        window.localStorage.setItem("Course",course);
        window.localStorage.setItem("Email",email);
        window.localStorage.setItem("Password",password);
        window.localStorage.setItem("Department",dept);
    } else {
        alert("Password and Confirm password should be same");
        //document.getElementById("msg").innerHTML="Password and Confirm password should be same";
    }
    
}
