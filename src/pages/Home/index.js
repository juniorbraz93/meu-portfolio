import { Flex, Text, useMediaQuery, Image } from "@chakra-ui/react";

import photo from "../../assets/img/eu.png";

export default function Home() {
    const [isMobile] = useMediaQuery("(max-width: 500px)")
    return (
      <>
        <Flex
          display="flex"
          direction={isMobile ? 'column' : "row-reverse"} // Aplicar reponsividade (Lembrar você sabe o que é)
          alignItems="center"
          justifyContent="center"
          p={10}
          w="auto"
          h="auto"
          ml={150}
          mt={50}
        >
          <Flex mt={25} >
            <Image 
              w={isMobile ? 200 : 400} 
              h={isMobile ? 200 : 400} 
              borderRadius={isMobile ? 100 : 200} 
              src={photo}
              border='5px solid #2ECC71'
            />
          </Flex>

          <Flex
            direction="column"
            mt={150}
          >
            <Text
              w={300}
              h={100}
              fontFamily="Poppins"
              fontSize={40}
              color="#EEEEEE"
            >
              Ola, meu nome é<br />
              <Text color="#2ECC71">Junior Braz</Text>
            </Text>
            <Flex
              w={250}
              h={0}
              border="5px solid #2ECC71"
              borderRadius={5}
              mt={5}
              mb={5}
            />
            <Text
              w={400}
              h={70}
              fontFamily="Poppins"
              fontSize={24}
              color="#EEEEEE"
            >
              Dev FullStack
            </Text>
          </Flex>

          
        </Flex>
      </>
    );
}

