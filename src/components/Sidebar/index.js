import React from 'react';
import { Flex, Link, Image } from '@chakra-ui/react';

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
                
              <Link
                href='/'
                textDecoration='none'
                fontFamily='sans-serif'
                fontWeight='bold'
                fontStyle='normal'
                fontSize={18}
                color='#EEE'
                _hover={{ color: '#2ECC71', transition: 0.3 }}
                mr={5}
              >
                Home
              </Link>

              <Link
                href='/about'
                textDecoration='none'
                fontFamily='sans-serif'
                fontWeight='bold'
                fontStyle='normal'
                fontSize={18}
                color='#EEE'
                _hover={{ color: '#2ECC71', transition: 0.3 }}
                mr={5}
              >
                Sobre
              </Link>

              
              <Link
                href='/projects'
                textDecoration='none'
                fontFamily='sans-serif'
                fontWeight='bold'
                fontStyle='normal'
                fontSize={18}
                color='#EEE'
                _hover={{ color: '#2ECC71', transition: 0.3 }}
                mr={5}
              >
                Projetos
              </Link>

              <Link
                href='/contact'
                textDecoration='none'
                fontFamily='sans-serif'
                fontWeight='bold'
                fontStyle='normal'
                fontSize={18}
                color='#EEE'
                _hover={{ color: '#2ECC71', transition: 0.3 }}
              >
                Contato
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
