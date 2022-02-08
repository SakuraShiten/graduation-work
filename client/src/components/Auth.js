import React, { useState } from 'react';
import { fetchCreateCheckAuth } from '../API/publicAPI';
import Input from './UI/Input/Input';
import UniversalButton from './UI/UniversalButton/UniversalButton';


function Auth({ setAuth }) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault();
        const check = await fetchCreateCheckAuth(login, password)
        if (check) {
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            setAuth(true)
        } else
            alert("Неверные данные")
    }

    return (
        <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={formSubmit}
        >
            <Input
                placeholder="Логин"
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
            <Input
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <UniversalButton
                styleWhite={true}
                type="submit"
            >
                Авторизоваться
            </UniversalButton>
        </form>
    );
}

export default Auth;
