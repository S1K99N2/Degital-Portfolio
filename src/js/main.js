//this scroll button for scroll to top
const btn = document.getElementsByClassName('move_to_top')[0];
const btnid = document.getElementById('up_btn');

function scrollUp() {
    if (window.pageYOffset > 350) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}
window.addEventListener('scroll', scrollUp);

function scollMover() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}
btnid.addEventListener('click', scollMover);


AOS.init();
//style toggale switch background color
let toggle = document.getElementById("dark");
let backColor = document.getElementById("wrapper_container");
let section = document.getElementById("section");

toggle.addEventListener("click", function () {
    if (toggle.classList.toggle("active")) {
        backColor.classList.add("backcolor");
    } else {
        backColor.classList.remove("backcolor");

    }
});

// ******* bottom to Top scroll ********
let scrollup = document.getElementById("wrapper_container");
window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".scroll_icon");
    scroll.classList.toggle("active", window.scrollBy > 200);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// my qulification
const ballbtn = document.querySelectorAll('.collapsible-icon');
const ballcontent = document.querySelectorAll('.content');

ballbtn.forEach((btn, btnind) => {
    btn.addEventListener('click', () => {
        let icon = btn.firstElementChild;
        if (icon.classList.contains('fa-chevron-down')) {
            icon.className = "fa fa-chevron-up";
            ballcontent.forEach((content, contentinx) => {
                if (btnind == contentinx) {
                    content.classList.add('content-show');
                }
            })
        } else if (icon.classList.contains('fa-chevron-up')) {
            icon.className = 'fa fa-chevron-down';
            ballcontent.forEach((content, contentinx) => {
                if (btnind == contentinx) {
                    content.classList.remove('content-show');
                }
            })
        }

    })
})
// circular round style
window.addEventListener("scroll", () => {
    const skill = document.getElementById("section_skill");
    const box = document.querySelector(".content-up")
    const contentPosition = box.getBoundingClientRect().top;
    const screenposition = window.innerHeight;
    console.log(contentPosition);
    if (contentPosition < screenposition) {
        box.classList.add("start");
    } else {
        box.classList.remove("start");
    }
});



// form validation 
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
});

///more Email Validate
const isEmail = (emailVal) => {
    var atSymble = emailVal.indexOf("@");
    if (atSymble < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymble + 3) return false;
    if (dot === emailVal.length - 2) return false;
    return true;
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();


    //validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'username connot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 char');
    } else {
        setSuccessMsg(username);
    }

    //validate Email
    if (emailVal == "") {
        setErrorMsg(email, 'email connot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(emailVal, 'Not a valid Email');
    } else {
        setSuccessMsg(email);
    }
    //Validate Phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone connot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid Mobile Num');
    } else {
        setSuccessMsg(phone);
    }
    // successMsg();
}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = " form-control error"
    small.innerText = errormsgs;
}
function setSuccessMsg(input, successmsgs) {
    const formControl = input.parentElement;
    formControl.className = " form-control success"
}