import React, { useState } from "react";
import { selectData,insertData, } from "../context/dataContext";
import {
  Box,
  Heading,
  Input,
  Container,
  Grid,
  GridItem,
  InputLeftAddon,
  InputGroup,
  Select,
} from "@chakra-ui/react";

const variable=await selectData({
  Table:"students",
  Columns:null,
  Conditions:null,
  GroupBy:null,
  OrderBy:null,
});
console.log(variable)


// const variable=await insertData({Table:"students",Sentencia:{
//   id:98,
//   first_name:"",	
//   last_name:"",	
//   email:"",	
//   gender:"",	
//   ip_address:"",	
// }});


// console.log(variable)


function ResumeForm() {
  const [name, setName] = useState("");
  // ... (resto de los estados)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    // ... (resto de los datos)
  };

  // console.log(dataRequest())


  return (
    <Box fontSize={50}>
      <Container maxW={"container.xl"}>
        <Grid templateColumns={{ base: "8fr 1fr", md: "8fr 1fr" }} gap={1} mt={2}>
          <GridItem>
            <Box bg="primary.200" color="white" p={2} borderRadius="md">
              <Heading as="h1" textAlign="center" >
                HOJA DE VIDA
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="primary.200" color="white" borderRadius="md" p={2} alignItems="center">
              <Heading as="h3" fontSize="xl">
                CÓDIGO
              </Heading>
              <Heading as="h3" fontSize={{ base: 10, md: "md" }} >
                2131323x2342
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Grid templateColumns={{ base: "1fr", md: "9fr 1fr" }} gap={4} mt={2}>
          <GridItem order={{ base: 2, md: 1 }}>
            <Heading as="h3" size="md" textAlign="left">
              DATOS PERSONALES
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={2}>
              
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Apellido' />
                  <Input type='text' placeholder='Primer Apellido' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Segundo Apellido' />
                  <Input type='text' placeholder='Segundo Apellido' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Nombre' />
                  <Input type='text' placeholder='Primer Nombre' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Segundo Nombre' />
                  <Input type='text' placeholder='Segundo Nombre' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Fecha de nacimiento' />
                  <Input
                    placeholder="Fecha"
                    size="md"
                    type="date"
                  />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Estado Civil' />
                  <Select placeholder='Seleccione una opción'>
                    <option value='option1'>Soltero</option>
                    <option value='option2'>Viudo</option>
                    <option value='option3'>Casado</option>
                    <option value='option3'>Divorciado</option>
                  </Select>
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Cedula' />
                  <Input type='text' placeholder='Cedula' />
                </InputGroup>
              </GridItem>

              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Tipo de Sangre' />
                  <Input type='text' placeholder='Tipo de Sangre' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Nacionalidad' />
                  <Input type='text' placeholder='Nacionalidad' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono de domicilio' />
                  <Input type='tel' placeholder='Teléfono de domicilio' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono de celular' />
                  <Input type='tel' placeholder='Teléfono de celular' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de Nacimiento' />
                  <Input type='text' placeholder='Lugar de Nacimiento' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Dirección de domicilio' />
                  <Input type='text' placeholder='Dirección de domicilio' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de residencia' />
                  <Input type='text' placeholder='Lugar de residencia' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input type='email' placeholder='Correo Electrónico Institucional' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input type='email' placeholder='Correo Electrónico Personal' />
                </InputGroup>
              </GridItem>
            </Grid>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              
              <GridItem fontSize={"sm"} border="1px solid #ccc" borderRadius={8}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 4fr" }}>
                  <GridItem fontSize={"lg"} margin={"auto"} >
                    Discapacidad:
                  </GridItem>
                  <GridItem fontSize={"sm"}>
                    <InputGroup>
                      <InputLeftAddon children='Tipo' w={110} />
                      <Input type='text' placeholder='Tipo' />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children='Nro' w={110} />
                      <Input type='text' placeholder='Nro' />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftAddon children='Porcentaje' w={110} />
                      <Input type='text' placeholder='Porcentaje' />
                    </InputGroup>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem order={{ base: 1, md: 1 }} textAlign={"center"} margin={"auto"}>
            <Box bg="primary.200" color="white" borderRadius="md" w={300} h={300}>
              <Heading as="h3" mt={1}>
                Foto Carnet
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default ResumeForm;
