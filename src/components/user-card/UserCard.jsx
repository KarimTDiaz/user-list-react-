import { StyledUserCard, UserCardImg } from './styles';
import { useNavigate } from 'react-router-dom';
const UserCard = ({ profileImage, name, username, active, userId }) => {
	const navigate = useNavigate();
	return (
		<StyledUserCard>
			<UserCardImg src={profileImage} />
			<div>
				<h2>{name}</h2>
				<p>@{username}</p>
			</div>
			<p>{active ? 'Activo' : 'Inactivo'}</p>
			<button onClick={() => navigate(`user/${userId}`)}>Ver Detalles</button>
		</StyledUserCard>
	);
};

export default UserCard;
