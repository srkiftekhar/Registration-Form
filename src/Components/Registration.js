import React from 'react'

function Registration(props) {
    return (
        <div className='container card p-5  mt-4 register'>
            <h1 className='text-center'>Registration Form</h1>
            <form onSubmit={props.submit}>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" required name='name' id='name' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" required name='email' id='email' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor="contact">Contact</label>
                    <input type="tel" name='contact' id='contact' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" required name='password' id='password' className='form-control'/>
                </div>
                <div className='text-center btnWidth '>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Registration
