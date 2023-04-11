import {
	StyledUserCard,
	UserCardImg,
	UserName,
	UserAccount,
	UserProfileContainer,
	UserActive,
	UserStateContainer
} from './styles';
import { useNavigate } from 'react-router-dom';
const UserCard = ({ profileImage, name, username, active, userId }) => {
	const navigate = useNavigate();
	return (
		<StyledUserCard>
			<UserProfileContainer>
				<UserCardImg src={profileImage} />
				<div>
					<UserName>{name}</UserName>
					<UserAccount>@{username}</UserAccount>
				</div>
			</UserProfileContainer>
			<UserStateContainer>
				<UserActive active={active}>
					{active ? 'Activo' : 'Inactivo'}
				</UserActive>
				<button onClick={() => navigate(`user/${userId}`)}>Ver Detalles</button>
			</UserStateContainer>
		</StyledUserCard>
	);
};

export default UserCard;
