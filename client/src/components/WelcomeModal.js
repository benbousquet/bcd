import React from "react"
import {Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Input, Text, useToast} from "@chakra-ui/core"

function WelcomeModal(props) {
  let [isOpen, setOpen] = props.openState;
  let [username, setUsername] = props.username;
  const toast = useToast();

  let handleSetButton = (e) => {
    if (username.length > 0) {
      setOpen(false);
      toast({
        title: "Yay",
        description: "POGGGG YOU DID IT",
        status: "success",
        duration: "1000",
        position: "top",
        isClosable: true,
      })
      return;
    }
    toast({
      title: "AHHHhh",
      description: "SET A NAMMEEEE",
      status: "error",
      duration: "1000",
      position: "top",
      isClosable: true,
    })
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => toast({
      title: "AHHHhh",
      description: "SET A NAMMEEEE",
      status: "error",
      duration: "1000",
      position: "top",
      isClosable: true,
    })}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose a Username </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Input variant="filled" placeholder="eg. BiggestOofer" value={username} onChange={(e) => setUsername(e.target.value)} />
          {username && <Text fontSize="md">Are you sure, {username} looks good?</Text>}
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={handleSetButton}>
            Set
            </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WelcomeModal;