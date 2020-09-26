const loginButton = document.querySelector("#login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const colors = ["linear-gradient(to right, #00b09b, #96c93d)", "linear-gradient(to right, #f12711, #f5af19)"];


loginButton.addEventListener("click", (event) => {
    //폼 전송 방지
    event.preventDefault();

    const isMailValid = emailCheck(email.value);
    const isPasswordValid = passwordCheck(password.value);
    const colorSuccess = "linear-gradient(to right, #00b09b, #96c93d)";
    const colorFail = "linear-gradient(to right, #f12711, #f5af19)";

    if (!isMailValid) {
        runNoti('이메일이 잘못 되었습니다.', colorFail);
        return;
    }

    if (!isPasswordValid) {
        runNoti('비밀번호가 잘못 되었습니다.', colorFail);
        return;
    }
    runNoti('성공했습니다!', colorSuccess);
});

// 토스트 메시지
function runNoti(message, background) {
    Toastify({
        text: message,
        duration: 3000,
        position: "right",
        gravity: 'top',
        close: true,
        newWindow: true,
        backgroundColor: background,
    }).showToast();
}

// 이메일 체크
function emailCheck(value) {
    // 이메일 체크 정규식
    const regExpMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExpMail.test(value);
}

// 비밀번호 값 체크 함수
function passwordCheck(value) {
    // 비밀번호 체크 정규식
    // const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return regExp.test(value);
}