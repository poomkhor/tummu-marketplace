import { useState } from 'react';
import { login } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export function LoginForm({ setUser }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login(form);
            setUser(user);
            navigate('/products');
        } catch (e) {
            console.error(e);
            setError(`Incorrect username or password.`);
        }
    };

    const disable = !form.email || !form.password;

    return (
        <div className='flex justify-center mt-10 mb-60'>
            <div className='font-mono text-2xl'>
                <form
                    className='flex flex-col'
                    autoComplete='off'
                    onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        className='bg-gray-200 rounded-sm mb-5'
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        className='bg-gray-200 rounded-sm mb-5'
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-10'
                        type='submit'
                        disabled={disable}>
                        Login
                    </button>
                </form>
                <div>Do not have an account yet.</div>
                <div className='flex justify-center'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-10'>
                        <a href='/signup'>Sign Up</a>
                    </button>
                </div>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    );
}
