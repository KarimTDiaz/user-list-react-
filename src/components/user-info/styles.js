import styled from 'styled-components';

const UserInfoContainer = styled.div`
	width: 600px;
	padding: 2rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5rem;
	border-radius: 7px;
	background-image: url('/public/dddepth-241.jpg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
`;

const UserInfoImage = styled.img`
	border-radius: 50%;
	margin-left: auto;
	margin-right: auto;
`;

export { UserInfoContainer, UserInfoImage };
