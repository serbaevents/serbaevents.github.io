// sample data
let iconsRow = [
    {
        "imgId": 1,
        "imgCallerId": 99
    },
    {
        "imgId": 2,
        "imgCallerId": 99
    },
    {
        "imgId": 3,
        "imgCallerId": 99
    },
    {
        "imgId": 4,
        "imgCallerId": 99
    }
]

// mutating the icons row

const parentCon = document.getElementById("icons-row");
iconsRow.forEach(element => {
    let div = document.createElement('div');
    div.className = 'col-2';
    div.innerHTML = `
    <div class="icons-img-con d-flex flex-row align-items-center" onclick="iconsValidation(event, ${element.imgCallerId}, ${element.imgId});">
        <img id="step${element.imgId}-img" src="images/step-${element.imgId}.webp" alt="">
    </div>
    <span>Step 0${element.imgId}</span>
    `;
    parentCon.appendChild(div);
});

document.getElementById("step1-img").src = "images/h-step-1.webp";


// icons validation
function iconsValidation(caller, fromForm, toForm) {
    // Enabeling going back even if password form is empty and conpassword matches
    if (caller.target.id == "step1-img" && currentForm == 2 && conPasswordValidate('currentPass', 'conCurrentPass') && conPasswordValidate('newPass', 'conNewPass')) {
        nextPrevAnimation(fromForm, toForm);
        return;
    }
    let togle = false;
    if (currentForm == 1) {
        let detailInputsArr = document.querySelectorAll("#step1-form input")
        detailInputsArr.forEach((elements) => {
            if (elements.value == "" || elements.value == " ") {
                if (!togle) {
                    togle = true;
                    elements.focus();
                }
                elements.setAttribute("data-error", "error");
            }
        });
    }
    else if (currentForm == 2) {
        let passwordInputsArr = document.querySelectorAll("#password-change input");
        passwordInputsArr.forEach((elements) => {
            if (elements.value == "" || elements.value == " ") {
                if (!togle) {
                    togle = true;
                    elements.focus();
                }
                elements.setAttribute("data-error", "error");
            }
        });
    }
    if (togle)
        return false;

    if (!conPasswordValidate('currentPass', 'conCurrentPass') || !conPasswordValidate('newPass', 'conNewPass')) {
        alert("password should match");
        return false;
    }
    nextPrevAnimation(fromForm, toForm);
}

