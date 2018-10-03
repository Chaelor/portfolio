var jumboPhoto = document.getElementById("jumbo-photo");
    bgPhoto = document.getElementById("jumbotron");
    submit = document.getElementById("submit");
    headerTextMain = document.getElementById("header-text-main");
    headerTextSub = document.getElementById("header-text-sub");

console.log(localStorage.getItem("Name"));


jumboPhoto.src="/img/guestbook.jpg";

headerTextMain.innerText = "Come on in";
headerTextSub.innerHTML = "Sign the <span class='u-color-green'>Guest Book</span>!";

fetch("/api/guestbook").then((res) => {
    res.json().then((entries) => {
        entries.forEach(entry => {
            //Variables and where to post them
            var entryLog = document.getElementById("entry-log");
            var newPName = document.createElement("p");
            var newPMessage = document.createElement("p");
            var newDiv = document.createElement("div");
            
            entryLog.appendChild(newDiv);

            newDiv.appendChild(newPName);
            newDiv.appendChild(newPMessage);
            
            newPName.appendChild(document.createTextNode(`Name: ${entry.Name}`));
            newPMessage.appendChild(document.createTextNode(`Message: ${entry.Message}`));
            
            newDiv.className = "entry"
            newPName.className = "entry--names";
            newPMessage.className = "entry--messages";
        });
    })
});

submit.addEventListener("click", (e) => {

    e.preventDefault();

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("Name", name);

    var gbEntry = {
        Name: name,
        Message: message
    }
    
    fetch("/api/guestbook", {
        method: "POST",
        headers:{
            "Content-type" : "application/json; charset=utf-8"
        },
        body: JSON.stringify(gbEntry)
    }).then((res) => {
        res.json();
        console.log("New guest book entry");
    });
});
