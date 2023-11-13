

import React, { useState, useRef,  } from 'react';
import axios from 'axios'

import {
    Container,
    Image,
    ContainerItens,
    H1, InputLabel,
    Input,
    Button,

} from "./styles";



import People from '../../assets/Imgperson.svg'
import Arow from '../../assets/buttom.svg'




const App = () => {

    const [users, setUsers] = useState([]);
    const InputName = useRef()
    const InputAge = useRef()

    async function AddnewUser() {

           const {data: newUser} = await axios.post("http://localhost:3001/users", {
              name: InputName.current.value,
              age: InputAge.current.value
          });

 
console.log(newUser)
        setUsers([...users, newUser]);

       
    
    }
   



    return (


        <Container>

            <Image src={People} />

            <ContainerItens>


                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={InputName} placeholder="Nome"></Input>


                <InputLabel>Idade</InputLabel>
                <Input ref={InputAge} type='number' placeholder="Idade"></Input>


                <Button onClick={AddnewUser}>Cadastrar <img alt="seta" src={Arow} /></Button>


                




            </ContainerItens>

        </Container>

    )
}

export default App
