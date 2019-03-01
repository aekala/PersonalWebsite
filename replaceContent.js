function changeToResume() {
    var contentBox = document.getElementById("maincontent");
    // clear the content box
    while(contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }

    //create resume element and insert into the content box
    var resume = document.createElement("embed");
    resume.setAttribute("type", "application/pdf");
    resume.setAttribute("src", "Leo Kodish Resume 2019.pdf#zoom=125");
    resume.setAttribute("width", "100%");
    resume.setAttribute("height", "1000px");
    contentBox.appendChild(resume);
}

function changeToInfo() {
    var contentBox = document.getElementById("maincontent");
    // clear the content box
    while(contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }

    //create image element and insert into the content box
    var photo = document.createElement("img");
    photo.setAttribute("id", "profilephoto");
    photo.setAttribute("src", "Profile Photo.JPG");
    contentBox.appendChild(photo);

    //create info element and insert into the content box
    var info = document.createElement("p");
    info.setAttribute("class", "introtext"); 
    //text node for info
    var textArgs = ["Hi, I'm Leo Kodish and welcome to my website! I designed this website as a place to host information about me as well as " + 
    "links to professional websites and my portfolios.", "On the sidebar to the left you can find links to my resume and Github if you want to see " +
    "my experience and code for projects I've built.", "You can also click on the Contact section or check out my LinkedIn if you wish to get in contact " +
    "with me or have questions. I coded this website from scratch and the code is available to see on Github under the \"Homepage\" repository!"
    ];

    //append text and line breaks 
    for (var i = 0; i < textArgs.length; i++) {
        var textNode = document.createTextNode(textArgs[i]);
        info.appendChild(textNode);
        info.appendChild(document.createElement("br"));
        info.appendChild(document.createElement("br"));
    }
    contentBox.appendChild(info);
}

function changeToContact() {
    var contentBox = document.getElementById("maincontent");
    // clear the content box
    while(contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }

    //create contact element and insert into the content box
    var info = document.createElement("p");
    info.setAttribute("class", "introtext");
    //text node for info
    var textArgs = ["Email: kodish.15@osu.edu", "Address: 1952 Iuka Ave, Columbus, OH, 43201", "LinkedIn: https://www.linkedin.com/in/leo-kodish-b83aa712b"
    ];

    for (var j = 0; j < textArgs.length; j++) {
        if (j != 2) {
            var textNode = document.createTextNode(textArgs[j]);
            info.appendChild(textNode);
            info.appendChild(document.createElement("br"));
            info.appendChild(document.createElement("br"));
        } else {
            var textPart = document.createTextNode(textArgs[j].substring(0, 10));      //hyperlink for LinkedIn page
            info.appendChild(textPart);
            var linkNode = document.createElement("A");
            var linkPart = document.createTextNode(textArgs[j].substring(10));
            linkNode.setAttribute("href", textArgs[j].substring(10));
            linkNode.appendChild(linkPart);
            info.appendChild(linkNode);
            info.appendChild(document.createElement("br"));
            info.appendChild(document.createElement("br"));
        }
    }
    contentBox.appendChild(info);
}

//jQuery to call corressponding function to change content box on sidebar click
$(document).ready(function () {
    $("#resumelink").on("click", changeToResume);
    $("#infolink").on("click", changeToInfo);
    $("#contactinfo").on("click", changeToContact);
});

