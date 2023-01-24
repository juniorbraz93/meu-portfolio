import React from 'react';
import { Flex, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
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
              display='flex'
              flexWrap='wrap'
              flexGrow={1}
              p={20}
              h='100vh'
              overflowY='auto'
              overflowX='hidden'
              w='100%'
            >
              {ItensSkill.map((Item) =>
                <ChakraBox 
                  animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  display='flex'
                  borderRadius={5}
                  h='15vh'
                >
                  {Item.icon}
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
                      _hover={{ color: '#2ECC71', transition: 0.3 }}
                    >
                      {Item.titulo}
                    </Text> 
                  </Flex>
                </ChakraBox>
              )}
            </Flex>
   </>
 );
}