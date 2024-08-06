import {
  Menu,
  MenuButton,
  MenuItem,
  Grid,
  Input,
  FormControl,
  GridItem,
  MenuList,
  Button,
  Box,
  Stack,
  Flex,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa";
import React from "react";

import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
function Question({
  id,
  typeInput,
  name,
  value,
  options,
  onChangeOption,
  addOption,
  removeOption,
  onChangeTypeQuestion,
  typeInputsQuestion,
}) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <FormControl>
          <Input
            name={`typeInput-question-${typeInput.type}-${id}`}
            value={typeInput?.name}
            type="hidden"
          />
          <Input
            variant="flushed"
            defaultValue={value}
            name={name}
            placeholder="Pregunta"
          />
        </FormControl>
      </GridItem>
      <GridItem>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {typeInput.name}
          </MenuButton>
          <MenuList>
            {typeInputsQuestion.map((v) => (
              <MenuItem
                key={v.name}
                onClick={() =>
                  onChangeTypeQuestion({
                    type: v.type,
                    idQuestion: id,
                    name: v.name,
                  })
                }
              >
                {v.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </GridItem>
      <GridItem colSpan={2}>
        <Box>
          <Stack direction="column">
            {options.map((option, index) => (
              <React.Fragment key={index}>
                {typeInput.type === "radio" && (
                  <Flex alignItems="center" gap={4} key={index}>
                    <>
                      <FaRegCircle size={22} color="#CBD5E0" />
                      <Input
                        variant="flushed"
                        value={option.value}
                        name={option.name}
                        onChange={(event) => onChangeOption(event, option.id)}
                        onClick={() => {
                          if (options.length === option.id) {
                            addOption(id, option.id + 1);
                          }
                        }}
                      />

                      {options.length >= 2 && (
                        <IconButton
                          icon={<CloseIcon />}
                          onClick={() => removeOption(id, option.id)}
                        />
                      )}
                    </>
                  </Flex>
                )}
                {typeInput.type === "input" && (
                  <Input
                    name={option.name}
                    placeholder="Respuesta corta"
                    variant="flushed"
                    isReadOnly={true}
                  />
                )}

                {typeInput.type === "textarea" && (
                  <Textarea
                    name={option.name}
                    placeholder="Respuesta larga"
                    isReadOnly={true}
                  />
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Question;
