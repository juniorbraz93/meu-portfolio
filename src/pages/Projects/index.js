/* eslint-disable jsx-a11y/anchor-is-valid */
import { Flex, Box, Text, Link, useMediaQuery } from "@chakra-ui/react";

import { SlideMine } from '../../assets/SlideMine'
import { SlideHouse } from '../../assets/SlideHouse'
import { SlideTickets } from '../../assets/SlideTickets'

import Slide from '../../components/Slide';
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const [isMobile] = useMediaQuery("(max-width: 1500px)")
  const [isMobile2 ] = useMediaQuery("(max-width: 800px)")
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
          href='https://github.com/juniorbraz93/tickets-web'
          style={{ textDecoration: 'none'}}
          color='#222831'
          backgroundColor='#FFF'
          display='flex'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          borderRadius={12}
          fontWeight={600}
          fontFamily="Poppins"
          fontSize='1.2em'
          w='20%'
          h={10}
        >
          <SiGithub style={{marginRight: 10}} color="#171515" />
          { isMobile2 ? (
            <></>
          ) : (
            <Text
            fontSize={ isMobile ? 15 : 20 }
            >
              Tickets
            </Text>
          ) }
        </Link>
        <Text
          color='#FFF'
          mt={5}
          fontFamily="Poppins"
          textAlign='center'
        >
          Sistema web para registrar chamados simples.<br />
          • Reactjs<br />
          • Firebase<br />
        </Text>
        <Box w="85%" p={4} color="white">
        { isMobile2 ? (
            <Slide 
            slides={SlideTickets}
            h={200}
            w={200}
            
          />
          ) : (
            <Slide 
            slides={SlideTickets}
            h={ isMobile ? 300 : 700 }
            // w={ isMobile ? 300 : 700 }
            
          />
          ) }
        </Box>
     
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
          { isMobile2 ? (
            <></>
          ) : (
            <Text
            fontSize={ isMobile ? 15 : 20 }
            >
              Campo minado
            </Text>
          ) }
        </Link>
        <Text
          color='#FFF'
          mt={5}
          fontFamily="Poppins"
        >
          Projeto de Campo minado classico do windows, desenvolvido em React Native para Android e iOS.
        </Text>
        <Box w={isMobile2 ? "50%" : "20%" } p={4} color="white">
        { isMobile2 ? (
            <Slide 
            slides={SlideMine}
            h={200}
            w={75}
            
          />
          ) : (
            <Slide 
            slides={SlideMine} 
            h={isMobile ? 300 : 500} 
            w={isMobile ? 75 : 200} 
          />
          ) }
          
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
          { isMobile2 ? (
            <></>
          ) : (
            <Text
            fontSize={ isMobile ? 15 : 20 }
            >
              Aluguel de casas
            </Text>
          ) }
        </Link>
        <Text
          color='#FFF'
          mt={5}
          fontFamily="Poppins"
        >
          Projeto de Aluguel de casa e afins desenvolvido em React Native para Android e iOS.
        </Text>
        <Box w={isMobile2 ? "50%" : "20%" } p={4} color="white">
        { isMobile2 ? (
            <Slide 
            slides={SlideHouse}
            h={200}
            w={75}
            
          />
          ) : (
            <Slide 
            slides={SlideHouse} 
            h={isMobile ? 300 : 500} 
            w={isMobile ? 75 : 200} 
          />
          ) }
        </Box>
 
      </Flex>
    </Flex>
  );
}
