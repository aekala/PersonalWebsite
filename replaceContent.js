function changeToResume() {
    var contentBox = document.getElementById("maincontent");
    // clear the content box
    while(contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }

    //create resume element and insert into the content box
    var resume = document.createElement("embed");
    resume.setAttribute("type", "application/pdf");
    resume.setAttribute("src", "Leo Kodish Resume 2018.pdf#zoom=175");
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
    var textArgs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere lacinia ex sed sagittis. Nunc a sodales ipsum, a tristique leo. In ac odio luctus, commodo ex quis, molestie elit. In dignissim mattis mauris id lacinia. Sed fermentum nibh ut eros rutrum, ut sodales lorem blandit. Nunc interdum, urna eget vestibulum bibendum, arcu turpis iaculis ex, id posuere ipsum lacus sit amet massa.",
                    "Integer facilisis bibendum nunc vitae blandit. Suspendisse eu feugiat tortor, sed egestas mauris. Praesent et sollicitudin ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quis dui quis arcu auctor aliquam. Quisque vehicula, massa at venenatis fringilla, odio diam ultricies ex, vel gravida dui enim at leo. Proin enim magna, dignissim eget ipsum nec, venenatis sodales elit.",
                    "Praesent dui tortor, euismod eget massa at, tincidunt rhoncus turpis. Proin elementum tellus id odio dictum consectetur. Fusce tempus faucibus turpis. Ut vitae ipsum ante. Cras tempus auctor vulputate. Nunc at imperdiet ante. Curabitur mauris mauris, maximus at ipsum sed, molestie finibus enim. Aliquam molestie quam eu elementum vehicula. Phasellus sed lacinia nibh, vel gravida ex. Phasellus imperdiet lectus eget pellentesque pellentesque. Donec rhoncus tincidunt ex, at ultrices ex congue vitae. Aliquam tellus nisi, elementum quis maximus vitae, volutpat id leo. Proin congue tristique nunc vel faucibus. Maecenas a mattis sem."
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

//jQuery to call corressponding function to change content box on sidebar click
$(document).ready(function () {
    $("#resumelink").on("click", changeToResume);
    $("#infolink").on("click", changeToInfo);
    $.get("https://leokodish.github.io/", function(data, status) {      // //jQuery to retrive POST requests made to the webiste, used for Dialogflow fulfillment
        var leoBirthday = new Date("Febuary 14, 1998");
        var currentDate = new Date();
        console.log(leoBirthday);
    });
});

