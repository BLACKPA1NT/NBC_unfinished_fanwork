import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	return (
		<StLoginWrapper>
			<StLoginBoxWrapper>
				<StLoginIndexSection>
					<StTitle>로그인</StTitle>
					<input type="text" minlength="4" maxlength="10"></input>
					<input type="password" minlength="4" maxlength="15"></input>
					<button>로그인</button>
					<button
						onClick={() => {
							navigate("/signup");
						}}
					>
						회원가입
					</button>
				</StLoginIndexSection>
			</StLoginBoxWrapper>
		</StLoginWrapper>
	);
}

export default Login;

const StLoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #a5a5a5;
`;

const StLoginBoxWrapper = styled.div`
	width: 450px;
	background-color: aquamarine;
	padding: 20px;
	border-radius: 10px;
`;

const StLoginIndexSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StTitle = styled.h1`
	font-weight: 700;
`;
