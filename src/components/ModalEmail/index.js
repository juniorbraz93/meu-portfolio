import React, { useState } from 'react';
import Modal from 'react-modal';
import { Flex, Link, useMediaQuery } from "@chakra-ui/react";


import {  SiGmail } from "react-icons/si";

import Email from '../Email';

Modal.setAppElement('#root');

function ModalEmail() {
    const [isMobile] = useMediaQuery("(max-width: 800px)")
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      subtitle.style.color = '#F00';
    }

    function closeModal() {
      setIsOpen(false);
    }
    return (
      <Flex>
        <Flex
          onClick={openModal}
        >
              <Link
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
                p={15}
                position='relative'
                w={ isMobile ? 400 : 800 }
                m={1}
                transition='0.3s ease-in'
              >   
                <SiGmail style={{marginRight: 10}} color="#DB4A39" />
                Gmail
              </Link>
        </Flex>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <Email />
          </Modal>
      </Flex>
    )

}

export default ModalEmail