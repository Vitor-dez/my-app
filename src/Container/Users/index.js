

import React, { useState,  useEffect } from 'react';
import axios from 'axios'

import {
    Container,
    Image,
    ContainerItens,
    H1, 
    Button,
    User
} from "./styles";



import UserProf from '../../assets/User Profile_Monochromatic 2.svg'
import Arow from '../../assets/buttom.svg'
import Trash from '../../assets/lixeira.svg'



const Users = () => {

    const [users, setUsers] = useState([]);
   


    
   
    useEffect(() => {
        async function fetchUsers(){
        const {data: newUsers} = await axios.get("http://localhost:3001/users");
    
        setUsers(newUsers)

    }
fetchUsers()

    }, [] )

//React hook =>   useEffect (Efeito colateral )
// As minha aplicação inicia (apartir do carregamento da pagina. )
// quando um estado que esta no arrey de dependencia do useEffect e alterado 
 

  async  function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid} `)
        const newUsers = users.filter(user => user.id !== userid)

        setUsers(newUsers)
    }



    return (


        <Container>

            <Image src={UserProf} />

            <ContainerItens>


                <H1>Usuários</H1>

                <ul>
                    {
                        users.map(user => (

                            <User key={user.id}>
                                <p>{user.name}</p>  <p>{user.age}</p>
                                <buttom onClick={() => deleteUser(user.id)}  ><img src={Trash} alt="lixeira" /></buttom>
                            </User>
                        ))

                    }

                </ul>

                
                <Button > <img alt="seta" src={Arow} />Voltar</Button>






            </ContainerItens>

        </Container>

    )
}

export default Users
