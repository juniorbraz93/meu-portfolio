/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Flex, Text, Image  } from "@chakra-ui/react";

import photo from "../../assets/img/eu.png";

import Skill from '../../components/Skill'

class About extends Component {
  render()  {
    return (
      <Flex
        display='flex'
        direction='column'
        alignItems='center'
        justifyContent='center'
        p={10}
        w='auto'
        h='auto'
        ml={150}
        mt={110}
      >
        <Flex
          direction='column'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
            <Image
              w={200}
              h={200}
              src={photo}
              borderRadius={100}
            />
          <Text
             display='flex'
             alignItems='center'
             justifyContent='center'
             fontSize={16}
             fontWeight='400'
             fontFamily="Poppins"
             p={15}
             position='relative'
             m={15}
             color='#FFF'
          >
            Atualmente atuo com desenvolvimento Back-end, Front-end, <br />
            Mobile utilizando JavaScript, HTML, CSS, GIT, (GraphQL) <br />
            ou API REST em tecnologias como NodeJS, ReactJS, React Native. 
          </Text>
        </Flex>
        
        <Skill />

      </Flex>
    );
  }
}

export default About;