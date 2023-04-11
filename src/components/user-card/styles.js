import styled from 'styled-components';

const StyledUserCard = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem;
	background-color: #f1f3fa;
	border-radius: 10px;
	margin-bottom: 1rem;
	box-shadow: 0px 12px 23px -11px rgba(199, 199, 199, 1);
	background-image: url('/public/dddepth-241.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

const UserCardImg = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const UserName = styled.h2`
	margin: 0;
	font-size: 1.2rem;
`;

const UserAccount = styled.p`
	margin: 0;
	font-size: 0.8rem;
`;

const UserProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const UserActive = styled.p`
	color: ${({ active }) => (active ? 'green' : 'red')};
`;

const UserStateContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 200px;
	gap: 1rem;
`;

export {
	StyledUserCard,
	UserCardImg,
	UserName,
	UserAccount,
	UserProfileContainer,
	UserActive,
	UserStateContainer
};
