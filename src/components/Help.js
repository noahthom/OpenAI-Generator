import { Button, Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text, Divider, Link } from "@chakra-ui/react";
import React from "react";
import { modelInfo, siteInfo, tempInfo } from "../util/modalContent";

const Help = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Box>
            <Button variant="outline" colorScheme="teal" backgroundColor="white" size="sm" onClick={onOpen}>
                Help
            </Button>

            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Help<Divider mt="1"/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx="5">
                        <Text fontWeight="bold">What is this site?</Text>
                        <Text>{siteInfo}</Text>
                        <Text mt="4"fontWeight="bold">What can it do?</Text>
                        <Text>{modelInfo} For more information on GPT-3's capabilities, visit the{' '}<Link href="https://beta.openai.com/docs/guides/completion/introduction" isExternal color="linkedin.500">official documentation here.</Link></Text>
                        <Text mt="4"fontWeight="bold">What is temperature?</Text>
                        <Text>{tempInfo}</Text>
                        <Text my="8">For additional concerns regarding the site, please contact me at noahrozario@outlook.com</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Box>
    )

}

export default Help