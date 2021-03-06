import React from 'react'

function SignIn({ onRouteChange }) {
    return (
        <article className="br3 ba b--white-40 mv4 w-200 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 white center fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db white fw6 lh-copy f6" htmlfor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db white fw6 lh-copy f6" htmlfor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="center">
                        <input onClick={() => onRouteChange("HOME")} className="b white ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy center mt3">
                        <p onClick={() => onRouteChange("REGISTER")} className="f6 pointer white link dim db">Register</p>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default SignIn
