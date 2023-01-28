/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, Link, useMediaQuery } from "@chakra-ui/react";

import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiYoutube
 } from "react-icons/si";

import ModalEmail from "../ModalEmail";

export default function Social() {
  const [isMobile] = useMediaQuery("(max-width: 800px)")

  const listMediaSocial = [
  { id: 1, icon: <SiLinkedin style={{marginRight: 10}} color="#0e76a8" />, nameUrl: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-braz-junior/'},
  { id: 2, icon: <SiGithub style={{marginRight: 10}} color="#171515" />, nameUrl: 'GitHub', url: 'https://github.com/juniorbraz93'},
  { id: 5, icon: <SiWhatsapp style={{marginRight: 10}} color="#25D366" />, nameUrl: 'Whatsapp', url: 'https://wa.me/5527999040472'},
  { id: 6, icon: <SiYoutube style={{marginRight: 10}} color="#FF0000" />, nameUrl: 'Youtube', url: 'https://www.youtube.com/channel/UCHEFiaSgYcR6BFrtjSqV5qA'},
]
  const linksSocialMedia = listMediaSocial.map((index) =>
    <Flex
      key={index.id}
    >
      <Link
      href={index.url}
      style={{ textDecoration: 'none'}}
      color='#222831'
      backgroundColor='#FFF'
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderRadius={12}
      fontWeight={600}
      fontFamily="Poppins"
      fontSize='1.2em'
      w={isMobile ? 400 : 800}
      p={15}
      m={1}
      >
        {index.icon}
        {index.nameUrl}
      </Link>
    </Flex>
  )
  return (
    <>
      {linksSocialMedia}
      <ModalEmail />
    </>
  )
    
}
