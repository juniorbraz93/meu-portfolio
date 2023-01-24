import { Component } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import photo from "../../assets/img/eu.png";

class Home extends Component {
  render() {
    return (
      <>
        <Flex
          display="flex"
          direction="row-reverse" // Aplicar reponsividade (Lembrar você sabe o que é)
          alignItems="center"
          justifyContent="center"
          p={10}
          w="auto"
          h="auto"
          ml={150}
          mt={50}
        >
          <Flex>
            <Image w={400} h={400} borderRadius={200} src={photo} />
          </Flex>

          <Flex
          direction="column"
          >
            <Text
              mt={50}
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
              border="5px solid #00ADB5"
              borderRadius={5}
              mt={5}
              mb={5}
            />
            <Text
              w={454}
              h={72}
              fontFamily="Poppins"
              fontSize={24}
              color="#EEEEEE"
              flex="none"
            >
              Dev FullStack
            </Text>
          </Flex>

          
        </Flex>
      </>
    );
  }
}

export default Home;
