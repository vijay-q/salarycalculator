function calculateSalary(){
    var totalSalary = document.getElementById("totalsalary").value
    var totalDays = document.getElementById("daystotal").value
    var leaveDays = document.getElementById("dayspresent").value
    var presentDays = totalDays-leaveDays


    if(totalSalary == "" || totalDays == "" || presentDays == ""){
        console.log()
        document.getElementById("finalsalary").innerHTML = "feilds cannot be empty" 
    }
    else{
        var salaryPerDay = totalSalary/totalDays;
        var empSalary = (salaryPerDay*presentDays) + salaryPerDay ;
        var finalempSalary = empSalary.toFixed(1)
        document.getElementById("finalsalary").innerHTML = finalempSalary
    }
}

function resetForm(){
    document.getElementById("finalsalary").innerHTML = "0000" 
}

function numberOfDays(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
}

