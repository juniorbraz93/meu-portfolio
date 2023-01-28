import { Flex, Image, Text } from "@chakra-ui/react";

import Social from '../../components/Social'

export default function Contact() {
  return (
    <>
      <Flex
        m={100}
        p={5}
        color='#FFF'
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
          <Image
            display='flex'
            m='auto'
            w={175}
            h={175}
            src='https://github.com/juniorbraz93.png'
            alt='eu'
            backgroundSize='cover'
            borderRadius='50%'
            border="5px solid #2ECC71"
          />
          <Text
            fontSize={20}
            fontWeight='bold'
            fontFamily="Poppins"
          >
            Junior Braz
          </Text>
          <Text
            fontFamily="Poppins"
            mb={2}
          >
            Minhas redes Sociais
          </Text>
        <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Social />
        </Flex>
      </Flex>
    </>
  );
}
