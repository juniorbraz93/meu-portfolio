import React from 'react';
import {
  Flex,
  Text,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'

import { motion, isValidMotionProp } from 'framer-motion';

import { skillItem } from '../../assets/skill'



const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Skill() {
  const ItensSkill = skillItem;
 return (
   <>
    <Text
      ml={2}
      mb= '2%'
      color= '#FFF'
      fontSize={16}
      fontWeight='bold'
      fontFamily="Poppins"
    >
      Hard Skills
    </Text>
            <Flex
              direction='column'
              flexWrap='wrap'
              p={20}
              h='100vh'
              w='50%'
            >
              {ItensSkill.map((item) =>
                <ChakraBox 
                  animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  display='flex'
                  h='15vh'
                >
                  {item.icon}
                  <Flex
                    w='100%'
                  >
                    <Text
                      ml={2}
                      mb= '2%'
                      color= '#FFF'
                      fontSize='1em'
                      fontWeight='bold'
                      fontFamily="Poppins"
                      _hover={{ color: item.color, transition: 0.3 }}
                    >
                      {item.titulo}
                    </Text> 
                  </Flex>
                </ChakraBox>
              )}
            </Flex>
   </>
 );
}