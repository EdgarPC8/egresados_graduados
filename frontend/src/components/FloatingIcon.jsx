import React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Text, List, ListItem, Divider } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const FloatingIcon = ({ notifications=[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Box
        position="fixed"
        top="60px"
        right="16px"
        zIndex="999"
      >
        <Button colorScheme="yellow" variant="solid" onClick={handleClick} position="relative">
          <BellIcon />
          {notifications.length > 0 && (
            <Box
              position="absolute"
              top="-8px"
              right="-8px"
              background="red.500"
              borderRadius="full"
              width="20px"
              height="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xs" color="white">
                {notifications.length}
              </Text>
            </Box>
          )}
        </Button>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notificaciones</DrawerHeader>
          <DrawerBody>
            {notifications.length > 0 ? (
              <List spacing={3}>
                {notifications.map((notification) => (
                  <ListItem key={notification.id}>
                    <Text fontWeight="bold">{notification.title}</Text>
                    <Text fontSize="sm">{notification.message}</Text>
                    <Text fontSize="xs" color="gray.500">{notification.timestamp}</Text>
                    <Divider mt={2} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Text>No tienes notificaciones nuevas.</Text>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FloatingIcon;
