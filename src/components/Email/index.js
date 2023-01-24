import React, { useState } from 'react';
import { Flex, Button, Text, Input, Textarea  } from "@chakra-ui/react";

import emailjs from '@emailjs/browser';

function Email() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }
    const  templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_oszqo5n', 'template_yxt5f6p', templateParams, 'bU5CUl8Y91mmdDrr0')
      .then((result) => {
        console.log('Email enviado', result.status, result.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <Flex
      minH='79vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      direction='column'
      backgroundColor='#222831'
      color='#FFF'
      p={4}
    >
      <Text
        mb={14}
        fontSize={28}
        fontWeight='bold'
        fontFamily='Poppins'
      >
        Contato
      </Text>

      <Flex
        maxW={600}
        w='100%'
        display='flex'
        direction='column'
      >
        <Input
          bg='#FFF'
          color='#000'
          mb={2}
          h={34}
          borderRadius={4}
          border={0}
          p="0 8px" 
          type="text"
          placeholder="Digite seu nome"
          fontFamily="Poppins"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <Input 
          bg='#FFF'
          color='#000'
          mb={2}
          h={34}
          borderRadius={4}
          border={0}
          p="0 8px" 
          type="text"
          placeholder="Digite seu email"
          fontFamily="Poppins"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Textarea
          bg='#FFF'
          color='#000'
          mb={2}
          borderRadius={4}
          border={0}
          p={2}
          h={94}
          placeholder="Digite sua mensagem..."
          fontFamily="Poppins"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button
          onClick={sendEmail}
          height={34}
          borderRadius={4}
          border={0}
          cursor='pointer'
          bg='#2ECC71'
          fontSize={18}
          >
          Enviar
        </Button>
      </Flex>

    </Flex>
  );
}

export default Email;