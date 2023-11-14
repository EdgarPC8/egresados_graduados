import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordInput() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel>Contraseña</FormLabel>
      <InputGroup>
        <Input pr="4.5rem" type={show ? "text" : "password"} name="password"/>
        <InputRightElement width="4.5rem">
          {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button> */}
          <IconButton
            variant="text"
            icon={show ? <FiEyeOff /> : <FiEye></FiEye>}
            onClick={handleClick}

          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default PasswordInput;
