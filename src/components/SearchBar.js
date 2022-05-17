import { Box, Button, Input, InputGroup, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Container, Flex } from "@chakra-ui/react";
import React, {useState } from "react";
import generateCompletion from "../util/openapi"




const SearchBar = () => {

    const [prompt, setPrompt] = useState('')
    const [temp, setTemp] = useState(50)

    return (
        <Box my="-5">
            <Container my="5">
                <InputGroup>
                    <Input backgroundColor="white" type="text" size="md" onChange={(e) => setPrompt(e.target.value)} value={prompt} placeholder="Type your input here!"/>
                    <Button colorScheme="linkedin" onClick={() => {
                        generateCompletion(prompt,temp / 100)
                        
                    }}>Generate!</Button>
                </InputGroup>
            </Container>
            
            <Container py="4" my="6">
                <Flex justifyContent="space-evenly" align="center">
                Temperature:
                <Slider  mx="5"my="5" size="md" aria-label='slider-ex-6' onChange={(val) => setTemp(val)}>
                        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                            0.25
                        </SliderMark>
                        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                            0.5
                        </SliderMark>
                        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                            0.75
                        </SliderMark>
                        <SliderMark
                            value={temp}
                            textAlign='center'
                            bg='blue.500'
                            color='white'
                            mt='-9'
                            ml='-6'
                            w='12'
                        >
                            {temp / 100}
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                </Slider>
                </Flex>
                
            </Container>
            
            
        </Box>
    )


}



export default SearchBar