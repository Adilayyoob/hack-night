function start() {
    var username = document.form1.username.value;
    var url = "https://api.github.com/users/"+username;
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET",url);
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		enter(ourData);
	}
	ourRequest.send();
}

function enter(d) {
    document.getElementById("avatar").setAttribute("src",d.avatar_url)
    document.getElementById("name").innerHTML = "Name : " + d.name;
    document.getElementById("description").innerHTML = "description : " + d.bio;
    document.getElementById("username").innerHTML = "Username : " + d.login;
    document.getElementById("gitlink").innerHTML = "GitHub Link : " + d.html_url;
    document.getElementById("followers").innerHTML = "Followers : " + d.followers;
    document.getElementById("following").innerHTML = "Following : " + d.following;
    document.getElementById("email").innerHTML = "Email ID : " + d.email;
    document.getElementById("twitter").innerHTML = "Twitter : " + d.twitter_username;
    document.getElementById("address").innerHTML = "Location : " + d.location;
    document.getElementById("repos").innerHTML = "public repos : " + d.public_repos;

}


