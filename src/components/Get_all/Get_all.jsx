import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar1 from '../Navbar/Navbar'
import Card from './User_card'
const Get_all = () => {
    const [cardarr, setCardArr] = useState([])
    const [firstname, setFirstname] = useState([])
    const [lastname, setLastname] = useState([])
    const [age, setAge] = useState([])
    const [email, setEmail] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/people")
            .then((res) => {
                setCardArr(res.data);
                // for (let i = 0; i<res.data.length; ++i) {
                //     setFirstname(res.data[i].firstname)
                //     setLastname(res.data[i].lastname)
                //     setAge(res.data[i].age)
                //     setEmail(res.data[i].email)
                // }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    // useEffect(() => {
    //     for(let i =0;i<firstname.length;++i){
    //             console.log(firstname[i]);
    //         }
    // },[firstname])
    function CreateCard(cardarr) {
        return (
            <Card firstname={cardarr.firstname} lastname={cardarr.lastname} age={cardarr.age} email={cardarr.email} />
        )
    }
    // console.log(cardarr);
    return (
        <>
            {cardarr.map(CreateCard)}
            {/* {cardarr.map(id => {
                console.log(id.age);
            })} */}
            {/* {
                cardarr.map(x=>console.log(x))

            } */}
        </>
    )
}

export default Get_all
