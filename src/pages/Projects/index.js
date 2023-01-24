/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Flex, Box, Text, Link  } from "@chakra-ui/react";

import { SlideMine } from '../../assets/SlideMine'
import { SlideHouse } from '../../assets/SlideHouse'

import Slide from '../../components/Slide';
import { SiGithub } from "react-icons/si";

class Projects extends Component {
  render()  {
    return (
      <Flex
        display='flex'
        direction='column'
        alignItems='center'
        justifyContent='center'
        p={1}
        w='auto'
        h='auto'
        ml={150}
        mt={110}
      >
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
        >

          <Link
            href='https://github.com/juniorbraz93/Minesweeper'
            style={{ textDecoration: 'none'}}
            color='#222831'
            backgroundColor='#FFF'
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius={12}
            fontWeight={600}
            fontFamily="Poppins"
            fontSize='1.2em'
            w='20%'
            h={10}
          >
            <SiGithub style={{marginRight: 10}} color="#171515" />
            Campo minado
          </Link>
          <Text
            color='#FFF'
            mt={5}
            fontFamily="Poppins"
          >
            Projeto de Campo minado classico do windowws, desenvolvido em React Native para Android e iOS.
          </Text>
          <Box w="25%" p={4} color="white">
            <Slide slides={SlideMine} />
          </Box>
                    
          <Link
            href='https://github.com/juniorbraz93/house_rental'
            style={{ textDecoration: 'none'}}
            color='#222831'
            backgroundColor='#FFF'
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius={12}
            fontWeight={600}
            fontFamily="Poppins"
            fontSize='1.2em'
            w='20%'
            h={10}
          >
            <SiGithub style={{marginRight: 10}} color="#171515" />
            Aluguel de casas
          </Link>
          <Text
            color='#FFF'
            mt={5}
            fontFamily="Poppins"
          >
            Projeto de Aluguel de casa e afins desenvolvido em React Native para Android e iOS.
          </Text>
          <Box w="25%" p={4} color="white">
            <Slide slides={SlideHouse} />
          </Box>
   
        </Flex>
      </Flex>
    );
  }
}

export default Projects;