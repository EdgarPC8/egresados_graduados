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
import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import React from "react";

import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { QUESTION_TYPES } from "../constants/questionTypes";
const Question = ({
  id,
  typeInput,
  name,
  value,
  options,
  addOption,
  removeOption,
  onChangeTypeQuestion,
  typeInputsQuestion,
  onChangeOptionInput,
  onChangeQuestionInput,
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <FormControl>
          <Input
            variant="flushed"
            defaultValue={value}
            name={name}
            onChange={(e) => onChangeQuestionInput(e, id)}
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
            {(typeInput.type === QUESTION_TYPES.RADIO ||
              typeInput.type === QUESTION_TYPES.CHECKBOX) &&
              options?.map((option, index) => (
                <React.Fragment key={index}>
                  <Flex alignItems="center" gap={4} key={index}>
                    {typeInput.type === QUESTION_TYPES.RADIO ? (
                      <FaRegCircle size={22} color="#A0AEC0" />
                    ) : (
                      <FaRegSquare size={22} color="#A0AEC0" />
                    )}

                    <Input
                      variant="flushed"
                      placeholder="Escriba la opción"
                      name={option.id}
                      value={option.value}
                      onChange={(e) => onChangeOptionInput(e, option.id, id)}
                      onClick={() => {
                        if (options[options.length - 1].id === option.id) {
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
                  </Flex>
                </React.Fragment>
              ))}

            {typeInput.type === QUESTION_TYPES.INPUT && (
              <Input
                placeholder="Respuesta corta"
                variant="flushed"
                isReadOnly={true}
              />
            )}

            {typeInput.type === QUESTION_TYPES.TEXTAREA && (
              <Textarea placeholder="Respuesta larga" isReadOnly={true} />
            )}
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default React.memo(Question);
