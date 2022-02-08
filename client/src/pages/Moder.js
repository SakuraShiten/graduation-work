import React, { useEffect, useState } from 'react';
import Auth from '../components/Auth';
import '../styles/Moder.css'
import { fetchCreateCheckAuth } from '../API/publicAPI';
import ModerPanel from '../components/ModerPanel';

function Moder() {

  const [auth, setAuth] = useState(false);

  const authCheck = async () => {
    const check = await fetchCreateCheckAuth(localStorage.getItem("login"), localStorage.getItem("password"));
    if (check)
      setAuth(true)
  }

  useEffect(() => {
    if (localStorage.getItem("login") !== null) {
      authCheck()
    }
  }, [])

  return (
    <div className='moder-block'>
      {!auth
        ? <Auth
          setAuth={setAuth}
        />
        : <ModerPanel />
      }
    </div>
  );
}

export default Moder;
