class User {
    constructor (level, imageURL, point, name, description, color, linkinURL) {
        this.level = level;
        this.imageURL = imageURL;
        this.point = point;
        this.name = name;
        this.description = description;
        this.color = color;
        this.linkinURL = linkinURL;
    }
}

let chia_ching = new User(22, "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png", 45678, 
    "Chia-Ching Lin", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "#79b08b", "#"
 )

let jazz = new User(25, "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg", 47887, 
    "Jaswinder Kaur", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "pink", "#"
 )

let chigozie = new User(20, "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png", 40782, 
    "Chigozie Ngene", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "yellow", "#"
 )

let divya = new User(21, "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png", 43678, 
    "Divya Rayapati", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "orange", "#"
 )



var users = [] ;
users.push(chia_ching);
users.push(jazz);
users.push(chigozie);
users.push(divya);

console.log(users);

function addUserCardToDOM(user) {
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML += `
    <div class="card">
        <div class="left-info" style="background-color: ${user.color};">
            <div class="center-horizontally">
                <p>Level ${user.level}</p>
            </div>
            <div>
                <img src="${user.imageURL}" alt="user avatar">
            </div>
            <div class="center-horizontally">
                <p class="user-points" data-username='${user.name}'>${user.point} points</p>
            </div>
            <div class="flex-wrap">
                <div><button class="plus-minus-button" onclick="updatePoints('${user.name}', 1)">+</button></div>
                <div><button class="plus-minus-button" onclick="updatePoints('${user.name}', -1)">-</button></div>
            </div>
        </div>

        <div class="right-info">
            <header>
                <h1>${user.name}</h1>
            </header>
            <p>${user.description}</p>
            <div class="linkedin-link">
                <a href="${user.linkinURL}" target="_blank">
                    <i class="fa fa-linkedin-square"></i>
                </a>
            </div>
        </div>
    </div>
    `;
}


renderUserToDOM();

function renderUserToDOM() {
    //geting the card container element from dom and make sure its empty 
    // before we write in it, to avoid duplicate.
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    // for (user of users){
    //     addUserCardToDOM(user)
    // }

    users.forEach(user => addUserCardToDOM(user));
}

function  sortUser() { 
    //get the selected property to sort the dom
    let property = document.getElementById('sortBy').value;
    users.sort((a,b) => (a[property])>(b[property])? 1:-1)

    //update the dom with the sorted list 
    renderUserToDOM(users);
}




function incrementPoints(userName) {
    const user = users.find(u => u.name === userName);
    if (!user) return;

    user.point += 1;

    const pointLabel = document.querySelector(
        `.user-points[data-username="${userName}"]`
    );

    pointLabel.textContent = `${user.point} points`;
}




//decrement
//calculate the total point for everybody

function updatePoints(userName, point) {
    const user = users.find(u => u.name === userName);
    if (!user) return;

    user.point += point;
    if (user.point < 0) user.point = 0;

    const pointLabel = document.querySelector(
        `.user-points[data-username="${userName}"]`
    );

    pointLabel.textContent = `${user.point} points`;
}
