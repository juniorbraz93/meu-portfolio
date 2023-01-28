import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

import Social from '../../components/Social'

export default function Contact() {
  const [isMobile] = useMediaQuery("(max-width: 400px)")

  return (
    <>
      <Flex
        ml={isMobile ? 100 : 0 }
        mt={100}
        color='#FFF'
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
          <Image
            display='flex'
            m='auto'
            w={isMobile ? 100 : 175}
            h={isMobile ? 100 : 175}
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
