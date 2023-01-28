import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import photo from "../../assets/img/eu.png";
import Skill from '../../components/Skill'

export default function About() {
  const [isMobile] = useMediaQuery("(max-width: 600px)")

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
            w={isMobile ? 200 : 400}
            h={isMobile ? 200 : 400}
            src={photo}
            border="5px solid #2ECC71"
            borderRadius='50%'
          />
        <Text
           display='flex'
           alignItems='center'
           justifyContent='center'
           fontSize={isMobile ? 12 : 20}
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