import React from "react";

import { Box, Flex} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import OutputArea from "./OutputArea";
import Header from "./Header";

const OpenAIGenerator = () => {
    
    

    return (
       
        
        <Flex direction="column" justifyContent="space-between" marginTop="200px" >

            <Box >
                <Box background="customReddishPurple.100" mx="500px" borderRadius="lg">
                    <Header />
                    <SearchBar />
                </Box>
                
                <OutputArea />
            </Box >

        </Flex>
        
        

    )


}

export default OpenAIGenerator