import React from 'react';
import {
  Flex,
  Text,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'

import { motion, isValidMotionProp } from 'framer-motion';

import { skillItem } from '../../assets/skill'

//

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Skill() {
  const ItensSkill = skillItem;
 return (
   <>
   <Flex
    direction='column'
    alignItems='center'
    justifyContent='center'
    bg='gray.700'
    w='85%'
    p={5}
    borderRadius={20}
   >
      <Text
        color= '#FFF'
        fontSize={20}
        fontWeight='bold'
        fontFamily="Poppins"
      >
        Hard Skills
      </Text>
      <Flex
        alignItems='center'
        display='flex'
        flexWrap='wrap'
        w='80%'
        mt={5}
      >
        {ItensSkill.map((item) =>
          <ChakraBox 
            animate={{ x: ['-100px', '100px', '0px'] }}
            transition={{ ease: "easeOut", duration: 1 }}
            display='flex'
            mr={2}
            mb={2}
          >
            {item.icon}
            <Flex
            >
                <Text
                  ml={2}
                  mb= '2%'
                  color= '#FFF'
                  fontSize={20}
                  fontWeight='bold'
                  fontFamily="Poppins"
                >
                 {item.titulo}
               </Text> 
            </Flex>
           </ChakraBox>
        )}
      </Flex>
   </Flex>
   </>
 );
}