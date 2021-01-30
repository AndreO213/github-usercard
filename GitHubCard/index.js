/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
console.log(axios);

// axios.get('https://api.github.com/users/AndreO213')
// .then(futureData => console.log(futureData))
// .catch(error => console.log(error)
// debugger)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const multCard = document.querySelector(".cards");

function cardMaker({
  imgUrl,
  fullName,
  username,
  userLocation,
  userUrl,
  numFollowers,
  numFollowing,
  userBio,
}) {
  // Creating the elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  // Adding the classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  // Appending to the body
  multCard.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  //  Giving the Elements their content
  img.src = imgUrl;
  name.textContent = fullName;
  userName.textContent = username;
  location.textContent = userLocation;
  profile.textContent = "Profile:";
  link.src = userUrl;
  link.textContent = userUrl;
  followers.textContent = numFollowers;
  following.textContent = numFollowing;
  bio.textContent = userBio;

  return card;
}

axios.get("https://api.github.com/users/AndreO213").then((res) => {
  const ghData = res.data;
  // const cardData = ghData.map((i) => {
  //   return [
  //     i.avatar_url,
  //     i.bio,
  //     i.followers,
  //     i.following,
  //     i.location,
  //     i.name,
  //     i.login,
  //     i.url,
  //   ];
  // });
  console.log(ghData);
  // console.log(cardData);
  
    const userCard = cardMaker({
      imgUrl: ghData.avatar_url,
      fullName: ghData.name,
      username: ghData.login,
      userLocation: ghData.location,
      userUrl: ghData.url,
      numFollowers: ghData.followers,
      numFollowing: ghData.following,
      userBio: ghData.bio,
    })
    multCard.appendChild(userCard);
  });

// .catch(err => console.log(err));


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
