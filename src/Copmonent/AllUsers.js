import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css'



function AllUsers() {

    const [data, setData] = useState([])

    useEffect(async () => {
        try {
            const reponse = await axios.get("http://localhost:4000/users");
            console.log(reponse)
            setData(reponse.data)
        }
        catch (err) {

            console.log(err)
        }

    }, [])

    return (
        <>
            <div>
                <div className="main__back">
                    {data.map((user) =>
                        <div className="users">
                            <h3>Welcome:{user.username}</h3>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}


export default AllUsers