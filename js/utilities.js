document.addEventListener("DOMContentLoaded", function () {
    var tool = document.querySelectorAll(".tooltipped");
    var instances = M.Tooltip.init(tool, {});
});

let projects = [
    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1628141267/misc/application-tracker-ipad.jpg",
        title: "Application Tracker",
        link: "https://application-tracker-jf.netlify.app/",
        code: "https://github.com/j-frilot/job-site"
    },
    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1623107920/portfolio/work-calebras.jpg",
        title: "Calebra's Heart CPR Training LLC",
        link: "https://cpr-jf.netlify.app/"
    },
    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1619810176/portfolio/work-hospital-desktop.jpg",
        title: "COVID General Hospital",
        link: "https://hospital-jf.netlify.app/",
        code: "https://github.com/j-frilot/General-Hospital"
    },
    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1619809904/portfolio/work-paws.jpg",
        title: "Paws Pet Shop",
        link: "https://petshop-jf.netlify.app/",
        code: "https://github.com/j-frilot/Paws-Pet-Shop"
    },

    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1611618803/math-game/thumbnail-phone.jpg",
        title: "Math Learning App",
        link: "https://schoolescape.netlify.app/",
        code: "https://github.com/j-frilot/math-game"
    },

    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609289011/portfolio/work-pinterest.jpg",
        title: "Pinterest Clone",
        link: "https://sports-pinterest.netlify.app/",
        code: "https://github.com/j-frilot/Pinterest-Clone"
    },

    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609287683/portfolio/work-rockpaperscissors.jpg",
        title: "Rock, Paper, Scissors",
        link: "https://rockpaperscissor-jf.netlify.app/",
        code: "https://github.com/j-frilot/Rock-Paper-Scissor"
    },
    {
        img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609288802/portfolio/work-groupme.jpg",
        title: "GroupMe Mobile App",
        link: "https://groupchat-jf.netlify.app/",
        code: "https://github.com/j-frilot/GroupMe"
    }
];

window.addEventListener("DOMContentLoaded", function () {
    let workSection = document.querySelector("#my-work");
    let displayWork = projects.map(function (project) {
        return `<div>
              <img src=${project.img} class="responsive-img materialboxed gallary-item" width="1000" alt="work-thumbnail">
              <p>${project.title}</p>
              <a href="${project.link}" target="blank">See Live</a> <a href="${project.code}" target="blank">See Code</a>
            </div>`;
    });

    displayWork = displayWork.join("");
    workSection.innerHTML = displayWork;
});
