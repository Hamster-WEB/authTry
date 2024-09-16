let reg = /^([A-Za-z0-9\_\-\.])+\@([A-Za-z\.]{2,15})+\.([A-Za-z]{2,4})$/;
let regN = /^[A-Za-z]{2,15}$/;
let regEmailInput = document.querySelector('#regFormLeft-input1');
let regEmailTitleInput = document.querySelector('#emailIdTitleInput');
let regRightWrapper = document.querySelector('#regRightWrapper');
let formBtn = document.querySelector('.form-btn');
let corrIcon = document.querySelector('.correct-icon');
let corrIcon1 = document.querySelector('.correct-icon1');
let corrIcon2 = document.querySelector('.correct-icon2');
let corrIcon3 = document.querySelector('.correct-icon3');
let corrIcon4 = document.querySelector('.correct-icon4');
let inpName = document.querySelector('#inputName');
let inpLastName = document.querySelector('#inputLastName');
let inpFirstTitleName = document.querySelector('#firstNameTitleInput');
let inpConPassTitle = document.querySelector('#inpConPassTitle');
let inpPassTitle = document.querySelector('#inpPassTitle');
let inpLastTitleName = document.querySelector('#lastNameTitleInput');
let pass = document.querySelector('#pass');
let conPass = document.querySelector('#conPass');
let regRightTitle = document.querySelector('#regRightTitle');
let regRightSubtitle = document.querySelector('#regRightSubtitle');
let regEndText = document.querySelector('.regEndText');
let regRightWrapper1 = document.querySelector('.regRight-wrapper');

/* Валидация-Проверка почты по специальному регулярному выражению */

document.querySelector('.form-btn').onclick = function(e) {
  e.preventDefault();
  if(pass.value, conPass.value, inpName.value, regEmailInput.value, inpLastName.value == 0) {
    formBtn.classList.add("animate__shakeX");
    formBtn.addEventListener('animationend', function() {
      formBtn.classList.remove('animate__shakeX')
    });
    if(inpLastName.value == 0) {
      inpLastName.style.color = "#FF2222";
      inpLastTitleName.style.color = "#FF2222";
      inpLastName.style.borderBottom = "1px solid #FF2222";
      corrIcon2.classList.remove("corrIconActive");
    }
    else {
      if(!regN.test(inpName.value)) {
        inpLastName.style.color = "#FF2222";
        inpLastTitleName.style.color = "#FF2222";
        inpLastName.style.borderBottom = "1px solid #FF2222";
        formBtn.classList.add("animate__shakeX");
        formBtn.addEventListener('animationend', function() {
          formBtn.classList.remove('animate__shakeX')
        });
        corrIcon2.classList.remove("corrIconActive");
      }
      else {
        inpLastName.style.color = "#111";
        inpLastTitleName.style.color = "#111";
        inpLastName.style.borderBottom = "1px solid #F2F2F2";
        corrIcon2.classList.add("corrIconActive");
      }
    }
    if(regEmailInput.value == 0) {
      regEmailInput.style.color = "#FF2222";
      regEmailTitleInput.style.color = "#FF2222";
      regEmailInput.style.borderBottom = "1px solid #FF2222";
      corrIcon.classList.remove("corrIconActive");
    }
    else {
      if(!reg.test(regEmailInput.value)) {
        regEmailInput.style.color = "#FF2222";
        regEmailTitleInput.style.color = "#FF2222";
        regEmailInput.style.borderBottom = "1px solid #FF2222";
        formBtn.classList.add("animate__shakeX");
        formBtn.addEventListener('animationend', function() {
          formBtn.classList.remove('animate__shakeX')
        });
        corrIcon.classList.remove("corrIconActive");
      }
      else {
        regEmailInput.style.color = "#111";
        regEmailTitleInput.style.color = "#111";
        regEmailInput.style.borderBottom = "1px solid #F2F2F2";
        corrIcon.classList.add("corrIconActive");
      }
    }
    if(inpName.value == 0) {
      inpName.style.color = "#FF2222";
      inpFirstTitleName.style.color = "#FF2222";
      inpName.style.borderBottom = "1px solid #FF2222";
      corrIcon1.classList.remove("corrIconActive");
    }
    else {
      if(!regN.test(inpName.value)) {
        inpName.style.color = "#FF2222";
        inpFirstTitleName.style.color = "#FF2222";
        inpName.style.borderBottom = "1px solid #FF2222";
        formBtn.classList.add("animate__shakeX");
        formBtn.addEventListener('animationend', function() {
          formBtn.classList.remove('animate__shakeX')
        });
        corrIcon1.classList.remove("corrIconActive");
      }
      else {
        inpName.style.color = "#111";
        inpFirstTitleName.style.color = "#111";
        inpName.style.borderBottom = "1px solid #F2F2F2";
        corrIcon1.classList.add("corrIconActive");
      }
    }
    if(pass.value == 0) {
      pass.style.color = "#FF2222";
      inpPassTitle.style.color = "#FF2222";
      pass.style.borderBottom = "1px solid #FF2222";
      corrIcon3.classList.remove("corrIconActive");
    }
    else {
      pass.style.color = "#111";
      inpPassTitle.style.color = "#111";
      pass.style.borderBottom = "1px solid #F2F2F2";
      corrIcon3.classList.add("corrIconActive");
    }
    if(conPass.value == 0) {
      conPass.style.color = "#FF2222";
      inpConPassTitle.style.color = "#FF2222";
      conPass.style.borderBottom = "1px solid #FF2222";
      corrIcon4.classList.remove("corrIconActive");
    }
    else {
      conPass.style.color = "#111";
      inpConPassTitle.style.color = "#111";
      conPass.style.borderBottom = "1px solid #F2F2F2";
      corrIcon4.classList.add("corrIconActive");
    }
  }
  else {
    if(!reg.test(regEmailInput.value)) {
      regEmailInput.style.color = "#FF2222";
      regEmailTitleInput.style.color = "#FF2222";
      regEmailInput.style.borderBottom = "1px solid #FF2222";
      formBtn.classList.add("animate__shakeX");
      formBtn.addEventListener('animationend', function() {
        formBtn.classList.remove('animate__shakeX')
      });
      corrIcon.classList.remove("corrIconActive");
    }
    else {
      regEmailInput.style.color = "#111";
      regEmailTitleInput.style.color = "#111";
      regEmailInput.style.borderBottom = "1px solid #F2F2F2";
      corrIcon.classList.add("corrIconActive");
    }
    if(!regN.test(inpName.value), inpName.value == 0) {
      inpName.style.color = "#FF2222";
      inpFirstTitleName.style.color = "#FF2222";
      inpName.style.borderBottom = "1px solid #FF2222";
      formBtn.classList.add("animate__shakeX");
      formBtn.addEventListener('animationend', function() {
        formBtn.classList.remove('animate__shakeX')
      });
      corrIcon1.classList.remove("corrIconActive");
    }
    else {
      inpName.style.color = "#111";
      inpFirstTitleName.style.color = "#111";
      inpName.style.borderBottom = "1px solid #F2F2F2";
      corrIcon1.classList.add("corrIconActive");
    }
    if(!regN.test(inpLastName.value)) {
      inpLastName.style.color = "#FF2222";
      inpLastTitleName.style.color = "#FF2222";
      inpLastName.style.borderBottom = "1px solid #FF2222";
      formBtn.classList.add("animate__shakeX");
      formBtn.addEventListener('animationend', function() {
        formBtn.classList.remove('animate__shakeX')
      });
      corrIcon2.classList.remove("corrIconActive");
    }
    else {
      inpLastName.style.color = "#111";
      inpLastTitleName.style.color = "#111";
      inpLastName.style.borderBottom = "1px solid #F2F2F2";
      corrIcon2.classList.add("corrIconActive");
    }
    if(conPass.value != pass.value) {
      pass.style.color = "#FF2222";
      inpPassTitle.style.color = "#FF2222";
      pass.style.borderBottom = "1px solid #FF2222";
      conPass.style.color = "#FF2222";
      inpConPassTitle.style.color = "#FF2222";
      conPass.style.borderBottom = "1px solid #FF2222";
      formBtn.classList.add("animate__shakeX");
      formBtn.addEventListener('animationend', function() {
        formBtn.classList.remove('animate__shakeX')
      });
      corrIcon3.classList.remove("corrIconActive");
      corrIcon4.classList.remove("corrIconActive");
    }
    else {
      if(!regN.test(conPass.value, pass.value)) {
        pass.style.color = "#FF2222";
        inpPassTitle.style.color = "#FF2222";
        pass.style.borderBottom = "1px solid #FF2222";
        conPass.style.color = "#FF2222";
        inpConPassTitle.style.color = "#FF2222";
        conPass.style.borderBottom = "1px solid #FF2222";
        formBtn.classList.add("animate__shakeX");
        formBtn.addEventListener('animationend', function() {
          formBtn.classList.remove('animate__shakeX')
        });
        corrIcon3.classList.remove("corrIconActive");
        corrIcon4.classList.remove("corrIconActive");
      }
      else {
        pass.style.color = "#111";
        inpPassTitle.style.color = "#111";
        pass.style.borderBottom = "1px solid #F2F2F2";
        conPass.style.color = "#111";
        inpConPassTitle.style.color = "#111";
        conPass.style.borderBottom = "1px solid #F2F2F2";
        corrIcon3.classList.add("corrIconActive");
        corrIcon4.classList.add("corrIconActive");
      }
    }
  }
  if(corrIcon.classList.contains("corrIconActive"), corrIcon1.classList.contains("corrIconActive"), corrIcon2.classList.contains("corrIconActive"), corrIcon3.classList.contains("corrIconActive"), corrIcon4.classList.contains("corrIconActive")) {
    inpLastName.style.color = "#111";
    inpLastTitleName.style.color = "#111";
    inpLastName.style.borderBottom = "1px solid #F2F2F2";
    corrIcon2.classList.add("corrIconActive");
    regEmailInput.style.color = "#111";
    regEmailTitleInput.style.color = "#111";
    regEmailInput.style.borderBottom = "1px solid #F2F2F2";
    corrIcon.classList.add("corrIconActive");
    inpName.style.color = "#111";
    inpFirstTitleName.style.color = "#111";
    inpName.style.borderBottom = "1px solid #F2F2F2";
    corrIcon1.classList.add("corrIconActive");
    pass.style.color = "#111";
    inpPassTitle.style.color = "#111";
    pass.style.borderBottom = "1px solid #F2F2F2";
    corrIcon3.classList.add("corrIconActive");
    conPass.style.color = "#111";
    inpConPassTitle.style.color = "#111";
    conPass.style.borderBottom = "1px solid #F2F2F2";
    corrIcon4.classList.add("corrIconActive");
    formBtn.classList.add("animate__fadeOutDown");
    regRightSubtitle.addEventListener('animationend', function() {
      regRightSubtitle.classList.remove('animate__fadeInDown');
    });
    regRightTitle.addEventListener('animationend', function() {
      regRightTitle.classList.remove('animate__fadeInDown');
    });
    formBtn.addEventListener('animationend', function() {
      formBtn.classList.remove('animate__fadeOutDown');
      formBtn.classList.add("formDis");
      formBtn.style.display = "none";
    });
    regRightWrapper.classList.add("animate__fadeOut");
    regRightWrapper.addEventListener('animationend', function() {
      regRightWrapper.classList.remove('animate__fadeOut');
      regRightWrapper.classList.add("formDis");
      regRightWrapper.style.display = "none";
    });
    regRightTitle.classList.add("formDis");
    regRightSubtitle.classList.add("formDis");
    regEndText.classList.add("active");
    regEndText.style.display = "flex";
    regEndText.classList.add("animate__fadeIn");
    regEndText.addEventListener('animationend', function() {
      regEndText.classList.remove('animate__fadeIn');
    });
    regRightWrapper1.classList.add("active");
  }
}

regRightSubtitle.addEventListener('animationend', function() {
  regRightSubtitle.classList.remove('animate__fadeInDown');
});
regRightTitle.addEventListener('animationend', function() {
  regRightTitle.classList.remove('animate__fadeInDown');
});
