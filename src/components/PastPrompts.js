import { Button, Box, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider, Text, DrawerFooter } from "@chakra-ui/react";
import React, { useRef } from "react";
import { connect } from "react-redux";
import store from "..";
import { readLocalStore } from "../redux/actions";


const PastPrompts = (props) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    const deleteHistory = () => {
        localStorage.removeItem("saved")
        store.dispatch(readLocalStore([]))
    }

    return (
        <Box>
            <Button mr="1" size="sm" ref={btnRef} variant="outline" colorScheme="teal" backgroundColor="white" onClick={onOpen}>
                History
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        History:
                    </DrawerHeader>
                    <DrawerBody>
                        {props.saved.map((generation) => {
                            return (
                                <Box key={generation}>
                                    <Box borderRadius="lg" borderWidth="thin" my="10" padding="10">
                                        <Text fontWeight="bold">Prompt: {generation[0]}</Text>
                                        <Divider my="5"/>
                                        <Text>{generation[1]}</Text>
                                    </Box>
                                    <Divider/>
                                </Box>
                            )
                        })}
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme="linkedin" size="sm" onClick={deleteHistory}>Clear</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )

}
const mapStatetoProps = (state) => {
    return {
        saved: state.saved
    }
}
export default connect(mapStatetoProps)(PastPrompts)