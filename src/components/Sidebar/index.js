import React from 'react';
import { Flex, Image, Button, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

import logo from "../../assets/img/logo-sf.png"

export default function Sidebar (){
  const [isMobile] = useMediaQuery("(max-width: 600px)")

  return(
    <>
      {/* Container Geral */}
      <Flex
        display='flex'
        direction='row'
        justifyContent='center'
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
              w={isMobile ? 20 : 100}
              h={isMobile ? 20 : 100}
            />

            <Flex
              // display='flex'
              // direction='row'
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
