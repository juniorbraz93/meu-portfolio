import React from 'react';
import { Flex, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

import logo from "../../assets/img/logo-sf.png"

export default function Sidebar (){
  return(
    <>
      {/* Container Geral */}
      <Flex
        display='flex'
        direction='row'
        justifyContent='center'
        m={1}
      >
        {/* Container Sidebar */}
        <Flex 
        display='flex'
        direction='row'
        justifyContent='center'
        alignItems='center'
        p={4}
        position='absolute'
        h={100}
        w='100%'
        >
          {/* Container Logo */}

          <Flex
            display='flex'
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            h='100%'
            w='100%'
          >
            <Image
              src={logo}
              display='flex'
              direction='row'
              justifyContent='center'
              alignItems='center'
              
              w={100}
              h={100}
            />

            <Flex
              justifyContent='center'
              alignItems='center'
              h='100%'
              w='100%'
            >
                
              <Link to='/' style={{textDecoration: "none"}} >
                <Button
                  fontFamily='sans-serif'
                  fontWeight='bold'
                  fontStyle='normal'
                  fontSize={18}
                  color='#EEE'
                  bg='transparent'
                  _hover={{ color: '#2ECC71', transition: 0.3 }}
                  mr={5}
                >
                  Home
                </Button>
              </Link>

              <Link to='/about' style={{textDecoration: "none"}} >
                <Button
                  fontFamily='sans-serif'
                  fontWeight='bold'
                  fontStyle='normal'
                  fontSize={18}
                  color='#EEE'
                  bg='transparent'
                  _hover={{ color: '#2ECC71', transition: 0.3 }}
                  mr={5}
                >
                  Sobre
                </Button>
                
              </Link>

              
              <Link to='/projects' style={{textDecoration: "none"}} >
                <Button
                  fontFamily='sans-serif'
                  fontWeight='bold'
                  fontStyle='normal'
                  fontSize={18}
                  color='#EEE'
                  bg='transparent'
                  _hover={{ color: '#2ECC71', transition: 0.3 }}
                  mr={5}
                >
                  Projetos
                </Button>
                
              </Link>

              <Link to='/contact' style={{textDecoration: "none"}} >
                <Button
                  fontFamily='sans-serif'
                  fontWeight='bold'
                  fontStyle='normal'
                  fontSize={18}
                  color='#EEE'
                  bg='transparent'
                  _hover={{ color: '#2ECC71', transition: 0.3 }}
                  mr={5}
                >
                  Contato
                </Button>
                 
              </Link>

            </Flex>


          </Flex>

          {/* Container Logo */}

        </Flex> 

        {/* Container Sidebar */}

      </Flex>
      {/* Container Geral */}
    </>
  );
}
