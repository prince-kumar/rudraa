import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function ProductModal({ children, title, image, about }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            textAlign="justify"
            justifyContent="center"
            d="flex"
            flexDir="column"
          >
            {image && (
              <img
                src={image}
                style={{ marginBottom: 20, borderRadius: 5 }}
                alt={title}
              />
            )}
            <span>{about}</span>
          </ModalBody>

          <ModalFooter>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductModal;
