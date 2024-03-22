import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export function SignUpForm({ setUser }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const userData = {
            name: form.name,
            email: form.email,
            password: form.password,
        };
        try {
            const user = await signUp(userData);
            setUser(user);
        } catch (e) {
            console.error(e);
            setError(`An error occurred with the sign up.`);
        }
    };

    const disable =
        !form.name ||
        !form.email ||
        !form.password ||
        form.password !== form.confirmPassword;

    return (
        <div className='flex justify-center mt-10 mb-60'>
            <div className='font-mono text-2xl'>
                <form
                    className='flex flex-col'
                    autoComplete='off'
                    onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        className='bg-gray-200 rounded-sm mb-5'
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
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
                    <label>Confirm Password</label>
                    <input
                        className='bg-gray-200 rounded-sm mb-5'
                        type='password'
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-10'
                        type='submit'
                        disabled={disable}>
                        Sign up
                    </button>
                </form>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    );
}
