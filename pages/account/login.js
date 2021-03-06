import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const { login, error } = useContext(AuthContext);

	useEffect(() => error && toast.error(error));

	const handleSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<Layout title='Dev Login'>
			<div className='auth-wrapper'>
				<div className='auth'>
					<h2>User Login</h2>
					<ToastContainer />
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='email'>Email Address</label>
							<input
								type='email'
								id='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<input type='submit' value='Login' className='auth-button' />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
