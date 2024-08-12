// 댓글 추가 버튼
const replyBtn = document.getElementById("qnaReplyBtn");
// detail의 board_num 가져오기 위한 변수
const boardNum = document.getElementById("qnaBoardNum");
const qnaBoardNum = boardNum.getAttribute("data-qnaBoardNum");

// 댓글 List 비동기 출력을 위한 변수
const commentList = document.getElementById("commentList");

// 댓글의 번호를 가져오기 위한 변수




commentList.addEventListener("click", (e)=> {
  let id = e.target.getAttribute("id");
  let dat = e.target.getAttribute("data-replyBoardNum");

  // 댓글 추가 버튼을 클릭 했을 때 추가된 댓글과 기존의 댓글 리스트를 비동기식으로 불러오는 역할을함
  if(id == "qnaReplyBtn"){
    let replyInput = document.getElementById("replyInput").value;  
    
    // board_nun의 값과 댓글 입력창에 있는 값을 보내기 위한 식
    const form = new FormData();
    form.append("board_num", qnaBoardNum);
    form.append("board_content", replyInput);
    
    // 댓글을 추가하고 비동기식으로 댓글 List를 가져오기 위한 식
    fetch("reply", {
      method:"POST",
      body:form
    })
    .then(r=>r.text())
    .then(r=>{
      commentList.innerHTML = r;
    })
    replyInput = "";
    alert("댓글이 추가 되었습니다.");
  }
  
  // 댓글 수정 버튼을 클릭 했을 때 인풋창과 '등록' 및 '취소' 버튼을 가져오는 코드
  if(id == "replyUpdate"+dat){
    console.log(dat);
    let replyTable = document.getElementById(dat)
    fetch("replyUpdate?board_num="+dat, {
      method:"GET"
    })
    .then(r=>r.text())
    .then(r=>{
      replyTable.innerHTML = r;
    })    
  }

  // 댓글 수정 버튼 클릭 후 나타나는 인풋창에 값을 넣고 등록을 눌렀을 때 실행되는 코드
  if(id == "replyUpdateSubmit"+dat){
    let replyUpdateInput = document.getElementById("replyUpdateInput"+dat).value;
    const form = new FormData();
    form.append("board_num", dat); //댓글 번호를 의미하는 board_num임
    form.append("board_content", replyUpdateInput);
    form.append("detail_board_num", qnaBoardNum); //detail 페이지 번호를 의미하는 board_num임..

    fetch("replyUpdate", {
      method :"POST",
      body:form
    })
    .then(r=>r.text())
    .then(r=>{
      commentList.innerHTML = r;
    })
  }

  if(id == "replyUpdateCancel"+dat){
    console.log("replyUpdateCancel : " + dat)
    fetch("replyUpdateCancel?board_num="+qnaBoardNum, {
      method: "GET"
    })
    .then(r=>r.text())
    .then(r=>{
      commentList.innerHTML = r;
    })
  }


  if(id == "replyDelete"+dat){
    alert(dat + "삭제");
    fetch("replyDelete?board_num="+dat+"&&detail_board_num="+qnaBoardNum, {
      method: "GET"
    })
    .then(r=>r.text())
    .then(r=>{
      commentList.innerHTML = r;
    })
  }
});
