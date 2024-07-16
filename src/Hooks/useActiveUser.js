import { useEffect, useState } from "react";
import { backendApi } from "../Componets/BackendApi/BackendApi";

const useActiveUser = () => {
    const [user, setUser] = useState({});

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/auth/loginUser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])

    return [user]
}

export default useActiveUser;