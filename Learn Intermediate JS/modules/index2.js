let studentDetails = {
    name: "Femi",
    age: 4,
    country: "Canada"
}


function displayName() {
    return "Jazz is a student"
}

// module.exports = studentDetails; //node runtime

module.exports = {studentDetails, aliasName: displayName, 
    studied: ["Python", "HTML", "CSS", "JavaScript", "bootstrap"],
    display: function() {
        this.studied.forEach(items => {
            console.log(items);
        })
    }
}