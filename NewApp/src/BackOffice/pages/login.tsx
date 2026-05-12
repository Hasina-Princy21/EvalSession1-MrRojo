import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../utils/auth';

const Login = () => {
    const [error, setError] = useState<string | null>(null);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const ok = login(credentials.email, credentials.password);
        if (ok) {
            setError(null);
            navigate('/back');
            return;
        }
        setError('Email ou mot de passe invalide.');
    };

    return (
        <div className="login-container" style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Connexion NewApp</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>
                Se connecter
                </button>
            </form>
        </div>
    );
};

export default Login;