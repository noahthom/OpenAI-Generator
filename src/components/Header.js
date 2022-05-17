import { Container, Text, Flex , Box} from "@chakra-ui/react";
import React from "react";
import Help from "./Help";
import PastPrompts from "./PastPrompts";


const Header = () => {

    return (
        <Box paddingTop="5" >
            <Container>
            
                <Flex justifyContent="space-between" align="center">
                    <Text fontWeight="bold" fontSize="5xl">OpenAI Generator</Text>
                    <Flex justifyContent="space-evenly">
                        <PastPrompts/>
                        <Help />
                    </Flex>
                        
                    
                    
                </Flex>
            
            </Container>
        </Box>
        
    )


}

export default Header