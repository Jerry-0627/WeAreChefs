const membere_mail = document.getElementById("membere_mail");
const emailbtn = document.getElementById("emailbtn");


// 이메일 인증버튼 클릭시 이메일 유효검사
emailbtn.addEventListener("click", ()=>{
    console.log("이메일 버튼 클릭?")
    let email = membere_mail.value

    if(!regexpEmail.test(memberEmail.value)){
        let span = document.createElement('span');
        span.id = 'join_span';
        span.innerHTML = "이메일 형식이 틀립니다";
        memberEmail.parentNode.append(span);
        memberEmail.focus();
        memberEmail.addEventListener("click", () =>{
            span.remove();
        });
        joinBtn.addEventListener("click", ()=> {
            span.remove();
        })
        emailbtn.addEventListener("click", () => {
            span.remove();
        }) 
        return;
    } else {
        emailbtn.disabled = true
        alert("이메일 인증코드를 입력 해주세요")
    }

    fetch("/member/sendEmail?member_mail="+email, {
        method : "GET"
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if(res > 0){
            console.log("성공");
            localStorage.setItem("mailnum", res)
            let input = document.createElement('input');
            let btn = document.createElement("button");

            input.setAttribute('class', "form-control member_join mt-3 labelName");
            input.setAttribute('id', "emailNumCheck");

            btn.setAttribute('class', "btn border-secondary py-2 px-4 text-uppercase w-80 text-primary mt-3");
            btn.setAttribute('id', "emailNumCheckBtn");
            btn.setAttribute('type', "button");


            btn.innerHTML = "인증번호 확인";

            membere_mail.parentNode.append(input);
            membere_mail.parentNode.append(btn);
            input.focus();
        } else {
           console.log("실패");
        }
    }).catch(() => {
        alert("오류발생");
    });
})



