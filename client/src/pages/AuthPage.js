import React from 'react'

export const AuthPage = () => {
  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>URL Shortener</h1>
        <div className='card blue darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Authorization</span>
            <div>
              <div className='input-field'>
                <input
                  placeholder='Enter email'
                  id='email'
                  type='text'
                  name='email'
                  className='yellow-input'
                  autoComplete='off'
                />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='input-field'>
                <input
                  placeholder='Enter password'
                  id='password'
                  type='password'
                  name='password'
                  className='yellow-input'
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button className='btn yellow darken-4'>Sign in</button>
            <button className='btn yellow darken-4'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
