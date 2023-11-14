
// import React, { useState } from "react";
// import {
//   Box,
//   Heading,
//   Input,
//   Textarea,
//   FormControl,
//   FormLabel,
//   Container,
//   Grid,
//   GridItem,
//   Stack,
//   InputRightAddon,
//   InputLeftAddon,
//   InputGroup,
//   Flex,
// } from "@chakra-ui/react";

// function ResumeForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [education, setEducation] = useState("");
//   const [experience, setExperience] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Aquí puedes manejar la lógica para enviar los datos del formulario
//     console.log("Nombre:", name);
//     console.log("Email:", email);
//     console.log("Educación:", education);
//     console.log("Experiencia:", experience);
//   };

//   return (
//     <Box>
//       <Container maxW="container.xl">
//         <Grid templateColumns="8fr 1fr" gap={1} mt={2}>
//           <GridItem>
//             <Box bg="primary.200" color="white" p={4} borderRadius="md">
//               <Heading as="h1" size="2xl" textAlign="center">
//                 HOJA DE VIDA
//               </Heading>
//             </Box>
//           </GridItem>
//           <GridItem>
//             <Box bg="primary.200" color="white" borderRadius="md" p={4} alignItems="center">
//               <Heading as="h3" size="md">
//                 CÓDIGO
//               </Heading>
//               <Heading as="h3" size="md">
//                 2131323x2342
//               </Heading>
//             </Box>
//           </GridItem>
//         </Grid>

//       </Container>
//       <Container maxW="container.xl">
//         <Box p={4} borderRadius="md">
//           <Heading as="h3" size="lg" textAlign="left">
//             DATOS PERSONALES
//           </Heading>
//           <Box p={4} borderRadius="md">
//             <Stack spacing={4} >
//               <InputGroup>
//                 <InputLeftAddon width={250} children='Apellidos y Nombres' />
//                 <Input type='text' placeholder='Apellidos y Nombres' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Cédula/Pasaporte/DNI' />
//                 <Input type='text' placeholder='Cédula/Pasaporte/DNI' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Fecha de nacimiento' />
//                 <Input type='text' placeholder='Fecha de nacimiento' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Lugar de Nacimiento' />
//                 <Input type='text' placeholder='Lugar de Nacimiento' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Nacionalidad' />
//                 <Input type='text' placeholder='Nacionalidad' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Estado Civil' />
//                 <Input type='text' placeholder='Estado Civil' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Lugar de residencia' />
//                 <Input type='text' placeholder='Lugar de residencia' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Dirección de domicilio' />
//                 <Input type='text' placeholder='Dirección de domicilio' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Teléfono de domicilio' />
//                 <Input type='tel' placeholder='Teléfono de domicilio' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Teléfono de celular' />
//                 <Input type='tel' placeholder='Teléfono de celular' />
//               </InputGroup>
//               <InputGroup>
//                 <InputLeftAddon children='Tipo de Sangre' />
//                 <Input type='text' placeholder='Tipo de Sangre' />
//               </InputGroup>
//             </Stack>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default ResumeForm;




import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Container,
  Grid,
  GridItem,
  Stack,
  InputLeftAddon,
  InputGroup,
  Flex,
} from "@chakra-ui/react";

function ResumeForm() {
  const [name, setName] = useState("");
  // ... (resto de los estados)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    // ... (resto de los datos)
  };

  return (
    <Box fontSize={50}>
      <Container maxW={"container.xl"}>
        <Grid templateColumns={{ base: "1fr", md: "8fr 1fr" }} gap={4} mt={2}>
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
              <Heading as="h3" fontSize="md">
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
                <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={4} mt={2}>
                  <GridItem fontSize={14} order={{ base: 1, md: 1 }}p={1}>
                    Apellidos y Nombres:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 2, md: 1 }}>
                  <Input type='text' placeholder='Apellidos y Nombres'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 3, md: 1 }}p={1}>
                  Fecha de nacimiento:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 4, md: 1 }}>
                  <Input type='text' placeholder='Fecha de nacimiento' />
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 5, md: 1 }}p={1}>
                  Lugar de Nacimiento:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 6, md: 1 }}>
                    <Input type='text' placeholder='Lugar de Nacimiento'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 7, md: 1 }}p={1}>
                  Nacionalidad:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 8, md: 1 }}>
                    <Input type='text' placeholder='Nacionalidad'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 9, md: 1 }}p={1}>
                  Estado Civil:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 10, md: 1 }}>
                    <Input type='text' placeholder='Estado Civil'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 11, md: 1 }}p={1}>
                  Lugar de residencia:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 12, md: 1 }}>
                    <Input type='text' placeholder='Lugar de residencia'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 13, md: 1 }}p={1}>
                  Dirección de domicilio:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 14, md: 1 }}>
                    <Input type='text' placeholder='Dirección de domicilio'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 15, md: 1 }}p={1}>
                  Teléfono de domicilio:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 16, md: 1 }}>
                    <Input type='tel' placeholder='Teléfono de domicilio'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 17, md: 1 }}p={1}>
                  Teléfono de celular:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 18, md: 1 }}>
                    <Input type='tel' placeholder='Teléfono de celular'/>
                  </GridItem>
                  <GridItem fontSize={14} order={{ base: 19, md: 1 }}p={1}>
                  Tipo de Sangre:
                  </GridItem>
                  <GridItem fontSize={"sm"} order={{ base: 20, md: 1 }}>
                    <Input type='text' placeholder='Tipo de Sangre'/>
                  </GridItem>
                </Grid>

                {/* <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Cédula/Pasaporte/DNI' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Cédula/Pasaporte/DNI' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Fecha de nacimiento' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Fecha de nacimiento' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de Nacimiento' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Lugar de Nacimiento' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Nacionalidad' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Nacionalidad' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Estado Civil' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Estado Civil' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de residencia' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Lugar de residencia' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Dirección de domicilio' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Dirección de domicilio' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de domicilio' w={{base:"sm",md:200}}/>
                  <Input type='tel' placeholder='Teléfono de domicilio' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de celular' w={{base:"sm",md:200}}/>
                  <Input type='tel' placeholder='Teléfono de celular' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Tipo de Sangre' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Tipo de Sangre' />
                  </Flex>
                </InputGroup> */}
          </GridItem>
          <GridItem order={{ base: 1, md: 1 }} textAlign={"center"} margin={"auto"}>
            <Box bg="primary.200" color="white" borderRadius="md" w={300}h={300}>
              <Heading as="h3" mt={10}>
                Foto Carnet
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      {/* <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Grid templateColumns={{ base: "1fr", md: "8fr 1fr" }} gap={4} mt={2}>
          <GridItem order={{ base: 2, md: 1 }}>
              <Heading as="h3" size="md" textAlign="left">
                DATOS PERSONALES
              </Heading>
              <Stack spacing={4}>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                    <InputLeftAddon children='Apellidos y Nombres' w={{base:"sm",md:200}}/>
                    <Input type='text' placeholder='Apellidos y Nombres'w={""}/>
                  </Flex>
                </InputGroup>

                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Cédula/Pasaporte/DNI' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Cédula/Pasaporte/DNI' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Fecha de nacimiento' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Fecha de nacimiento' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de Nacimiento' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Lugar de Nacimiento' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Nacionalidad' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Nacionalidad' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Estado Civil' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Estado Civil' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de residencia' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Lugar de residencia' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Dirección de domicilio' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Dirección de domicilio' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de domicilio' w={{base:"sm",md:200}}/>
                  <Input type='tel' placeholder='Teléfono de domicilio' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de celular' w={{base:"sm",md:200}}/>
                  <Input type='tel' placeholder='Teléfono de celular' />
                  </Flex>
                </InputGroup>
                <InputGroup>
                  <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Tipo de Sangre' w={{base:"sm",md:200}}/>
                  <Input type='text' placeholder='Tipo de Sangre' />
                  </Flex>
                </InputGroup>
              </Stack>
          </GridItem>
          <GridItem order={{ base: 1, md: 1 }}>
            <Box bg="primary.200" color="white" borderRadius="md" p={4} alignItems="center">
              <Heading as="h3" size="container.md">
                Foto Carnet
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container> */}
      {/* <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box order={{ base: 2, md: 1 }}pr={2}>
            <Heading as="h3" fontSize={30} textAlign="left">
              DATOS PERSONALES
            </Heading>
            <Stack spacing={4}>
              <InputGroup>
                  <InputLeftAddon children='Apellidos y Nombres' w={200}/>
                  <Input type='text' placeholder='Apellidos y Nombres'w={"sm"}/>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Cédula/Pasaporte/DNI' w={200}/>
                  <Input type='text' placeholder='Cédula/Pasaporte/DNI'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Fecha de nacimiento' w={200}/>
                  <Input type='text' placeholder='Fecha de nacimiento'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de Nacimiento' w={200}/>
                  <Input type='text' placeholder='Lugar de Nacimiento'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Nacionalidad' w={200}/>
                  <Input type='text' placeholder='Nacionalidad'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Estado Civil' w={200}/>
                  <Input type='text' placeholder='Estado Civil'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Lugar de residencia' w={200}/>
                  <Input type='text' placeholder='Lugar de residencia'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Dirección de domicilio' w={200}/>
                  <Input type='text' placeholder='Dirección de domicilio'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de domicilio' w={200}/>
                  <Input type='tel' placeholder='Teléfono de domicilio'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Teléfono de celular' w={200}/>
                  <Input type='tel' placeholder='Teléfono de celular'w={"sm"}/>
                </Flex>
              </InputGroup>
              <InputGroup>
                <Flex direction={{ base: "column", md: "row" }}>
                  <InputLeftAddon children='Tipo de Sangre' w={200}/>
                  <Input type='text' placeholder='Tipo de Sangre'w={"sm"}/>
                </Flex>
              </InputGroup>
            </Stack>
          </Box>
          <Box order={{ base: 1, md: 2 }} maxw={{ base: 200, md: 300 }} margin={"auto"} borderRadius="md" alignItems="center">
            <Heading as="h3" size="container.md">
              Foto Carnet
            </Heading>
          </Box>
        </Flex>
      </Container> */}
    </Box>
  );
}

export default ResumeForm;

