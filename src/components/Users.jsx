import React, { useEffect, useState } from "react";

export default function Users() {
    const request = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users", request)
            .then((res) => res.json())
            .then(data => setUsers(data.users))
            .then(console.log)
            .catch(error => console.error('Error en el fetching', error))
    }, []);

    const handleMoreInfo = (userId) => {
        fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then(data => console.log('Informacion de Usuario', data))
        .catch(error => console.error('Error en la informacion del usuario', error))
    }

    return (
        <div>
            <h1 className="">Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} {user.age}
                        <button
                            onClick={() => handleMoreInfo(user.id)}>
                                Mas info
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
