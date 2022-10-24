import * as React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { rootProps } = useNavbar();

  const { toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      role="navigation"
      position="static"
      top="0"
      zIndex="docked"
      bg="bg-accent"
      pb="5"
      pt="5"
      {...rootProps}
    >
      <Container maxW="container.lg">
        <Stack direction="row" justify="space-between">
          <Heading>DOT Hedged Staking PnL Dashboard</Heading>
          <Button onClick={toggleColorMode}>☀️</Button>
        </Stack>
      </Container>
    </Box>
  );
};
