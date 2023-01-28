import { Flex, Text, useMediaQuery, Image } from "@chakra-ui/react";

import photo from "../../assets/img/eu.png";

export default function Home() {
    const [isMobile] = useMediaQuery("(max-width: 1024px)")
    const [isMobile2] = useMediaQuery("(max-width: 600px)")
    return (
      <>
        <Flex
          display="flex"
          direction={isMobile ? "column" : "row-reverse"} //  Aplicar reponsividade (Lembrar você sabe o que é)
          alignItems="center"
          justifyContent="center"
          p={10}
          mt={150}
        >
          <Flex mt={25} >
            {
              isMobile2 ? (
                <Image 
                  w={250} 
                  h={250} 
                  borderRadius='50%' 
                  src={photo}
                  border='5px solid #2ECC71'
                />
              ) : (
                <Image 
                  w={isMobile ? 290 : 400} 
                  h={isMobile ? 290 : 400} 
                  borderRadius='50%' 
                  src={photo}
                  border='5px solid #2ECC71'
                />
              )
            }
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

