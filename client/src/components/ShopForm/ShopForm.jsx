import React, { useState, Component } from 'react';

export class ShopForm extends Component {
    state = {
        name: '',
        location: '',
        owner: '',
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitting form');
    };

    render() {
        return (
            <>
                <div>
                    <h1 className='text-blue-600'>Shop Form</h1>
                    <form>
                        <input
                            type='text'
                            name='name'
                            placeholder='Shop name'
                        />
                        <input
                            type='text'
                            name='location'
                            placeholder='Shop address'
                        />
                        <input type='text' placeholder='Shop description' />
                        <button>Create shop</button>
                    </form>
                </div>
            </>
        );
    }
}
