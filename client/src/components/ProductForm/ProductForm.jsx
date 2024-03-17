import React, { useState } from 'react';
import * as productsAPI from '../../utilities/products-api';

export function ProductForm({ user, products, setProducts }) {
    const [form, setForm] = useState({
        name: '',
        category: '',
        user: user._id,
        price: '',
        description: '',
        img: '',
        selectValue: '',

    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSelectChange = (event) => {
        setForm({ ...form, selectValue: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await productsAPI.create(form);
        console.log('submitting form');
    };

    const disabled =
        form.name === '' ||
        form.price === '' ||
        form.description === '' ||
        form.img === '' ||
        form.category === '';

    return (
        <>
            <div>
                <h1 className='text-blue-600'>Product Form</h1>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Product name'
                    />
                    <label htmlFor=''>Category</label>
                    <select
                        id='category'
                        name='category'
                        value={form.category}
                        onChange={handleSelectChange}>
                        <option value=''>Select...</option>
                        <option value='accessories'>Accessory</option>
                        <option value='art'>Art</option>
                        <option value='baby'>Baby</option>
                        <option value='bath and beauty'>Bath & Beauty</option>
                        <option value='fashion'>Fashion</option>
                        <option value='home decor'>Home Decor</option>
                        <option value='jewelry'>Jewelry</option>
                    </select>
                    <input
                        type='text'
                        name='price'
                        value={form.price}
                        onChange={handleChange}
                        placeholder='Product price'
                    />
                    <input
                        type='text'
                        name='description'
                        value={form.description}
                        onChange={handleChange}
                        placeholder='Product description'
                    />
                    <input
                        type='text'
                        name='img'
                        value={form.img}
                        onChange={handleChange}
                        placeholder='Image Upload'
                    />
                    <button disabled={disabled}>Create product</button>
                </form>
            </div>
        </>
    );
}
