import React, {useState} from "react"
import WelcomeModal from "./components/WelcomeModal"
import { Flex, Text, Box, List, ListItem } from "@chakra-ui/core"
import { css } from '@emotion/core'

function App() {
  let [isOpen, setOpen] = useState(true);
  let [username, setUsername] = useState("");
  return (
    <div>
      <WelcomeModal openState={[isOpen, setOpen]} username={[username, setUsername]} />
      {!isOpen && <div>
        <Flex flexDirection="row">
          <Flex align="left" flexDirection="column" w="10%">
            <Flex align="center" justify="center" bg="red.500">
            <Box color="white" p="1rem">
              <Text textAlign="center">Time Left Till Start</Text>
              <Text textAlign="center" fontSize="xl">12:00min</Text>
              </Box>
            </Flex>
            <Flex align="center" justify="center" bg="gray.500">
              <Box color="white" p="1rem"> 
                <Text textAlign="center">Name</Text>
              </Box>
            </Flex>
            <Flex align="left" bg="blue.500">
              <Box h="82.75rem" color="white" p="1rem">
                <List as="ol" styleType="decimal">
                  <ListItem>FirstPlaceDooDooHead</ListItem>
                  <ListItem>MiddleChild</ListItem>
                  <ListItem>FirstPlaceDooDooHead</ListItem>
                </List>
              </Box>
            </Flex>
          </Flex>
          <Box bg="black" w="90%" color="white">
            <Text textAlign="center">Game</Text> 
          </Box>
        </Flex>
      </div>}
    </div>
  );
}


export default App;
