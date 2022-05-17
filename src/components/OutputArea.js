import React from "react";
import { connect } from "react-redux";
import { Container, Text, Flex } from "@chakra-ui/react";

const OutputArea = (props) => {

    return (
        <Flex my="5" bg="customGreen.100" paddingY="10" >
            <Container bg="white" padding="10" borderRadius="lg" maxW="lg" borderWidth="thin" my="5" minH="20">
                <Text fontSize="lg">{props.current}</Text>
            </Container>
        </Flex>
        
    )

}

const mapStatetoProps = (state) => {
    return {
        current: state.current
    }
}

export default connect(mapStatetoProps)(OutputArea)