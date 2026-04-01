function goToBill() {
    window.location.href = "bill.html";
}






function updateBranches() {
    const customer = document.getElementById("customer").value;
    const branchList = document.getElementById("branches");

    // Clear old options
    branchList.innerHTML = "";

    let branches = [];

    if (customer === "State Bank of India") {
        branches = ["RBO", "ERO DT", "SME","AMCC", "Main Branch"];
    } 
    else if (customer === "Bank of Baroda") {
        branches = ["Sathy Road", "ERD"];
    }

    // Add new options
    branches.forEach(function(b) {
        let option = document.createElement("option");
        option.value = b;
        branchList.appendChild(option);
    });
}