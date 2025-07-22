import { useState } from 'react';

import Input from './Input';

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setEdidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value,
        }));
        setEdidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: false
        }));
    }

    function handleInputBlur(identifier) {
        setEdidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: true
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={() => handleInputBlur('email')}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                    value={enteredValues.email}
                    error={emailIsInvalid && 'please enter a valid email'}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(event) => handleInputChange('password', event.target.value)}
                    onBlur={() => handleInputBlur('password')}
                    value={enteredValues.password}
                    error={passwordIsInvalid && 'plase enter a valid password'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" >Login</button>
            </p>
        </form>
    );
}