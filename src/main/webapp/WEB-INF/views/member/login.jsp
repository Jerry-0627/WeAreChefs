<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<c:import url="/WEB-INF/views/templete/header.jsp"></c:import>
	<style>
		.form-container {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		
		.form-wrapper {
			width: 100%;
			max-width: 600px;
			margin: 0 auto;
		}
		
		.form-item {
			margin-bottom: 15px;
		}
		
		.form-control {
				width: 100%;
		}

		#join_span {
			color: red;
		}

		.container1 {
			margin: 60px auto;
			display: block;
			width: 780px;
		}
		.hrcheck[role="tournament3"] {
			border: 0px solid;
			height: 1px;
			background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(172, 131, 83, 0.75), rgba(0, 0, 0, 0));
			margin: 32px 0px;
			display: block;
		}

		.hrcheck[role="tournament3"]::before {
			position: absolute;
			background-color: #efefef;
			border: 10px solid #AC8353;
			border-top: 10px solid transparent;
			border-radius: 2px;
			padding: 0px;
			transform: rotate(180deg);
			left: 50%;
			margin: -5px 0px 0px -21px;
			content: "";
		}
		.test{
			position: absolute;
			top: 95%;
			left: 47%;
		}

	</style>
</head>
<body>
<c:import url="/WEB-INF/views/templete/nav.jsp"></c:import>
	
	<div class="container-fluid page-header py-5">
		<h1 class="text-center text-white display-6">로그인</h1>
	</div>
	
	<div class="container-fluid py-5">
		<div class="container py-5">
			<div class="form-container">
				<div class="form-wrapper">
					<form action="#" method="post">
						<div class="row g-5">
							<div class="col-12 ">
								<div class="row">									
									<div class="form-item">
										<label class="form-label my-3">아이디</label> 
										<input type="text" class="form-control member_join" id="member_id" name="member_id">
									</div>
									<div class="form-item">
										<label class="form-label my-3">비밀번호</label>
										<input type="password" class="form-control member_join" id="member_pwd" name="member_pwd">
									</div>

									<div class="row g-4 text-center align-items-center justify-content-center pt-2 mt-1 col m-auto">
										<button id="login_btn" type="button" class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">로그인</button>
									</div>

									<div class="row g-4 text-center align-items-center justify-content-center pt-2 mt-1" >
										<a href=" javascript:void(0)">
												<img src="/resources/member/img/kakao_login_medium_narrow.png" id="img">
										</a>
									</div>
									<container class="container1 mt-1 mb-1">
										<hr class="hrcheck" role="tournament3">
									</container>
									<div class="mt-1 test">
										<a href="join" style="font-size:20px" >회원가입</a>
									</div>
								</div>
							</div>
						</div> 
					</form>
				</div>
			</div>
		</div>
	</div> 

<c:import url="/WEB-INF/views/templete/footer.jsp"></c:import>
<script src="/resources/member/js/login.js"></script>
<script src="/resources/member/js/kakaologin.js"></script>
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" 
		integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4" crossorigin="anonymous">
</script>
</body>
</html>
