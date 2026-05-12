import { useNavigate } from 'react-router-dom';
import { useAuthStore } from './utils/auth';

const BackOffice = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/back/login');
    };

    return (
        <div>
            <h1>Back Office</h1>
            <button type="button" onClick={handleLogout}>
                Se deconnecter
            </button>
        </div>
    );
};

export default BackOffice;