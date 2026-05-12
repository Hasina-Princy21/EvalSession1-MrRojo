import { create } from 'zustand';

interface AuthState {
	isAuthenticated: boolean;
	isAdmin: boolean;
	login: (username: string, password: string) => boolean;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: !!localStorage.getItem('adminToken'),
	isAdmin: !!localStorage.getItem('adminToken'),
	login: (username: string, password: string) => {
		// Simple authentication - in production use proper backend
		if (username && password) {
			localStorage.setItem('adminToken', 'true');
			localStorage.setItem('adminUser', username);
			set({ isAuthenticated: true, isAdmin: true });
			return true;
		}
		return false;
	},
	logout: () => {
		localStorage.removeItem('adminToken');
		localStorage.removeItem('adminUser');
		set({ isAuthenticated: false, isAdmin: false });
	},
}));
