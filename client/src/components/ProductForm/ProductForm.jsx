import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';

export function ProductForm({ user, products, setProducts }) {
    const [form, setForm] = useState({
        name: '',
        category: '',
        user: user._id,
        price: '',
        description: '',
        images: [],
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handlePhoto = (event) => {
        setForm({ ...form, images: Array.from(event.target.files) });
        console.log(form.images);
    };

    const handleSelectChange = (event) => {
        setForm({ ...form, category: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('category', form.category);
        formData.append('user', user.sub);
        formData.append('price', form.price);
        formData.append('description', form.description);
        form.images.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const response = await axios.post(
                '/api/products/uploads',
                formData
                // {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //     },
                // }
            );
            console.log(
                'Product images uploaded successfully:',
                response.data.files
            );
            navigate('/products/add');
        } catch (error) {
            console.error('Error uploading product images:', error);
        }
        // await productsAPI.create(form);
    };

    const disabled =
        form.name === '' ||
        form.price === '' ||
        form.description === '' ||
        form.category === '';

    return (
        <>
            <div>
                <h1>Product Form</h1>
                <form
                    id='product-form'
                    autoComplete='off'
                    onSubmit={handleSubmit}
                    encType='multipart/form-data'>
                    <input
                        className='mt-2 mb-2'
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Product name'
                    />
                    <label htmlFor=''>Category</label>
                    <select
                        className='mt-2 mb-2'
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
                        className='mt-2 mb-2'
                        type='text'
                        name='price'
                        value={form.price}
                        onChange={handleChange}
                        placeholder='Product price'
                    />
                    <input
                        className='mt-2 mb-2'
                        type='text'
                        name='description'
                        value={form.description}
                        onChange={handleChange}
                        placeholder='Product description'
                    />
                    <input
                        className='mt-2 mb-2'
                        type='file'
                        multiple='multiple'
                        accept='.png, .jpg, .jpeg'
                        name='images'
                        onChange={handlePhoto}
                        placeholder='Image Upload'
                    />
                    {/* <button disabled={disabled}>Create product</button> */}
                </form>
            </div>
        </>
    );
}
