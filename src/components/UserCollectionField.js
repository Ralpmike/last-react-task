import React from 'react'
import { Link } from 'react-router-dom'

const UserCollectionField = (props) => {
  const { handleSubmit, pageDecription, erroText, errorRes,handleInputs, type, regInfo,details, linkInfo, linkDirection, formType } = props
  return (
    <div className='signIn-form'>

      <h1 className='page-title'>{pageDecription}</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className='fieldset'>

          <h2>{formType}</h2>
          {errorRes ? <p style={erroText}>{errorRes}</p> : ""}
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              autoFocus
              type="email"
              id='email'
              name='email'
              onChange={handleInputs}
              value={details.email}
            />
          </div>
          {/* Password */}
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id='password'
              name='password'
              onChange={handleInputs}
              value={details.password}
            />
          </div>
          <button type='submit'>{type}</button>
          <p>{regInfo}?</p>
          <Link to={linkDirection} style={{ textDecoration: "underline" }}>{linkInfo}</Link>
        </div>
      </form>
    </div>
  )
}

export default UserCollectionField