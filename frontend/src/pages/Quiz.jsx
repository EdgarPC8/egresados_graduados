import React, { useState } from "react";
import { insertStudent } from "../api/dataRequest";
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
  Button,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  Tfoot,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";



function Quiz() {
  const [name, setName] = useState("");
  // ... (resto de los estados)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    // ... (resto de los datos)
  };

  return (
    <Box fontSize={50} mb={100}>
      <Container maxW={"container.xl"}>
        <Grid gap={1} mt={2}>
          <GridItem>
            <Heading as="h1" textAlign="center" >
              INSTITUTO SUPERIOR TECNOLÓGICO MARIANO SAMANIEGO
            </Heading>
          </GridItem>
          <GridItem>
            <Heading as="h1" textAlign="center" >
              ENCUESTA DE EMPLEABILIDAD A GRADUADOS
            </Heading>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Grid templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem order={{ base: 2, md: 1 }}>
            <Heading as="h3" size="md" textAlign="center">
              <Box bg="primary.200" color="white" p={2} borderRadius="md">
                DATOS DEL EGRESADO O GRADUADO/A
              </Box>
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Nombre' />
                  <Input type='text' placeholder='Primer Nombre' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Primer Apellido' />
                  <Input type='text' placeholder='Primer Apellido' />
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
                  <InputLeftAddon children='Segundo Apellido' />
                  <Input type='text' placeholder='Segundo Apellido' />
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
                  <InputLeftAddon children='Genero' />
                  <Select placeholder='Seleccione una opción'>
                    <option value='F'>Femenino</option>
                    <option value='M'>Masculino</option>
                  </Select>
                </InputGroup>
              </GridItem>

              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Email' />
                  <Input type='text' placeholder='Email' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono residencial' />
                  <Input type='tel' placeholder='Teléfono residencial' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Teléfono de celular' />
                  <Input type='tel' placeholder='Teléfono de celular' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup mt={3}>
                  <InputLeftAddon w={150} children='Posee título' />
                  <RadioGroup m={"auto"}>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='green' value='Si'>
                        Si
                      </Radio>
                      <Radio colorScheme='green' value='No'>
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </InputGroup>
              </GridItem>
            </Grid>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Carrera de la que Egresó' />
                  <Input type='text' placeholder='Carrera de la que Egresó' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de Residencia Actual' />
                  <Input type='text' placeholder='Lugar de Residencia Actual' />
                </InputGroup>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <InputGroup>
                  <InputLeftAddon children='Lugar de residencia' />
                  <Input type='text' placeholder='Lugar de residencia' />
                </InputGroup>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <Container py={2} maxW={"container.xl"} fontSize={"container.sm"}>
        <Heading as="h3" size="md" textAlign="center">
          <Box bg="primary.200" color="white" p={2} borderRadius="md">
            DATOS DEL TRABAJO Y ESTUDIO
          </Box>
        </Heading>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={2} mt={5}>
              <GridItem fontSize={"sm"}>
                <FormControl isRequired display="flex">
                  <FormLabel>Trabaja Actualmente:</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='green' value='Si'>
                        Si
                      </Radio>
                      <Radio colorScheme='green' value='No'>
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl display="flex">
                  <FormLabel>Tipo de Empresa:</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='green' value='1'>
                        Pública
                      </Radio>
                      <Radio colorScheme='green' value='2'>
                        Privada
                      </Radio>
                      <Radio colorScheme='green' value='3'>
                        Propia-familiar
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>

            </Grid>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Nombre de la Empresa:</FormLabel>
                  <Input type='text' variant='flushed' placeholder='Nombre de la Empresa' />
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Dirección del trabajo:</FormLabel>
                  <Input type='text' variant='flushed' placeholder='Dirección del trabajo' />
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Teléfono en el trabajo:</FormLabel>
                  <Input type='text' variant='flushed' placeholder='Teléfono en el trabajo' />
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl display="flex">
                  <FormLabel>¿Su cargo tiene relación con su perfil profesional?</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='green' value='Si'>
                        Si
                      </Radio>
                      <Radio colorScheme='green' value='No'>
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl display="flex">
                  <FormLabel>Tiempo de servicio en la empresa:</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='green' value='1'>
                        0-6 meses
                      </Radio>
                      <Radio colorScheme='green' value='2'>
                        6 meses-año
                      </Radio>
                      <Radio colorScheme='green' value='3'>
                        Más de un año
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>¿Cuál es su situación laboral actual?</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5}>
                      <Radio colorScheme='green' value='1'>
                        Trabajo en un sector  relacionado a mi profesión
                      </Radio>
                      <Radio colorScheme='green' value='2'>
                        Trabajo en un sector no relacionado a mi profesión
                      </Radio>
                      <Radio colorScheme='green' value='3'>
                        Estoy  desempleado
                      </Radio>
                      <Radio colorScheme='green' value='4'>
                        Otros
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Explique su respuesta:</FormLabel>
                  <Textarea placeholder='Explique su respuesta' />
                </FormControl>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>

        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={2} mt={2}>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>¿Cuándo empezó a trabajar?</FormLabel>
                  <RadioGroup>
                    <Stack spacing={5}>
                      <Radio colorScheme='green' value='1'>
                        Antes de graduarse
                      </Radio>
                      <Radio colorScheme='green' value='2'>
                        Durante el primer año después de graduarse
                      </Radio>
                      <Radio colorScheme='green' value='3'>
                        Un año después de graduarse
                      </Radio>
                      <Radio colorScheme='green' value='4'>
                        No trabaja
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Área en la que desarrolla su actividad profesional actualmente:</FormLabel>
                  <Textarea placeholder='Describa...' />
                </FormControl>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>

        <Grid p={2} border="1px solid #ccc" borderRadius={8} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿Cuál es la relación del trabajo que tiene con la carrera que estudió?</FormLabel>
              <RadioGroup>
                <Stack spacing={5}>
                  <Radio colorScheme='green' value='1'>
                    Bastante
                  </Radio>
                  <Radio colorScheme='green' value='2'>
                    Mediana
                  </Radio>
                  <Radio colorScheme='green' value='3'>
                    Poca
                  </Radio>
                  <Radio colorScheme='green' value='4'>
                    Ninguna
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿Cuál fue el factor que más contribuyo para que consiguiera su primer empleo?</FormLabel>
              <RadioGroup>
                <Stack spacing={5}>
                  <Radio colorScheme='green' value='1'>
                    Título profesional
                  </Radio>
                  <Radio colorScheme='green' value='2'>
                    Experiencia laboral
                  </Radio>
                  <Radio colorScheme='green' value='3'>
                    Practicas preprofesionales
                  </Radio>
                  <Radio colorScheme='green' value='4'>
                    Antecedentes que brinda la carrera
                  </Radio>
                  <Radio colorScheme='green' value='5'>
                    Recomendación de terceras personas
                  </Radio>
                  <Radio colorScheme='green' value='6'>
                    Otros
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Especifique:</FormLabel>
              <Textarea placeholder='Especifique...' />
            </FormControl>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿Qué  conocimientos y habilidades son las más relevantes para el desempeño de sus actividades laborales actuales? (Puede ser más de uno)</FormLabel>
              <RadioGroup>
                <Stack spacing={5}>
                  <Checkbox>
                    Gestiona, transfiere y desarrolla soluciones informáticas para ambientes corporativos
                  </Checkbox>
                  <Checkbox>
                    Explora problemas y genera diseños y soluciones inteligentes de sistemas informáticos mediante análisis de tecnología y costos de software y hardware
                  </Checkbox>
                  <Checkbox>
                    Conforma equipos, procesos y sistemas de desarrollo de tecnologías informáticas con destreza y habilidad
                  </Checkbox>
                  <Checkbox>
                    Conocimiento del lenguaje especializado de la ciencia
                  </Checkbox>
                  <Checkbox>
                    Conoce los procedimientos de desarrollo, implementación y adecuación de medios informáticos
                  </Checkbox>
                  <Checkbox>
                    Habilidad de trabajo en equipo y pro actividad, para adaptarse a los avances
                  </Checkbox>
                  <Checkbox>
                    científicos y al desarrollo tecnológico.
                  </Checkbox>
                  <Checkbox>
                    Conoce la importancia de la investigación en su propio proceso de formación
                  </Checkbox>
                  <Checkbox>
                    Afronta y actúa con confianza y seguridad el análisis y la solución de problemas que se encuentran en la profesión
                  </Checkbox>
                  <Checkbox>
                    Participa en procesos emprendedores
                  </Checkbox>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿Cuál es su percepción general de los/las profesionales del ITSFMS?</FormLabel>
              <RadioGroup>
                <Stack spacing={5} direction={{ base: "column", md: "row" }}>
                  <Radio colorScheme='green' value='1'>
                    Excelente
                  </Radio>
                  <Radio colorScheme='green' value='2'>
                    Muy buena
                  </Radio>
                  <Radio colorScheme='green' value='3'>
                    Buena
                  </Radio>
                  <Radio colorScheme='green' value='4'>
                    Regular
                  </Radio>
                  <Radio colorScheme='green' value='5'>
                    Mala
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>

        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>En su opinión, ¿Cuáles son las principales carencias que tiene el programa académico de la carrera en que se graduó?</FormLabel>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Carrera:</FormLabel>
                  <Input type='text' variant='flushed' placeholder='Carrera' />
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}></GridItem>
              <RadioGroup>
                <Stack spacing={5}>
                  <Checkbox>
                    Falta de actualización en nuevos temas
                  </Checkbox>
                  <Checkbox>
                    Enseñanza de aplicaciones tecnológicas
                  </Checkbox>
                  <Checkbox>
                    Actualización de los nuevos programas en software
                  </Checkbox>
                  <Checkbox>
                    Capacitar continuamente al personal docente
                  </Checkbox>
                  <Checkbox>
                    Otros
                  </Checkbox>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Especifique:</FormLabel>
              <Textarea placeholder='Especifique...' />
            </FormControl>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} templateColumns={{ base: "1fr", md: "9fr" }} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿Que recomienda para estrechar las relaciones entre el ISTMS y los GRADUADOS?</FormLabel>
              <GridItem fontSize={"sm"}>
                <FormControl>
                  <FormLabel>Carrera:</FormLabel>
                  <Input type='text' variant='flushed' placeholder='Carrera' />
                </FormControl>
              </GridItem>
              <GridItem fontSize={"sm"}>
                <Stack spacing={5}>
                  <Checkbox>
                    Cursos de capacitación y actualización
                  </Checkbox>
                  <Checkbox>
                    Hacer reuniones anuales de egresados
                  </Checkbox>
                  <Checkbox>
                    Tener acceso a un directorio
                  </Checkbox>
                  <Checkbox>
                    Otros
                  </Checkbox>
                </Stack>
              </GridItem>
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Especifique:</FormLabel>
              <Textarea placeholder='Especifique...' />
            </FormControl>
          </GridItem>
        </Grid>
        {/*             */}
        <Grid p={2} border="1px solid #ccc" borderRadius={8} gap={4} mt={2} templateColumns={{ base: "1fr", md: "2fr 2fr" }} >
          <GridItem fontSize={"sm"} colSpan={{ base: 1, md: 2 }}>
            <FormControl display="flex">
              <FormLabel>¿Ha realizado usted estudios posteriores? </FormLabel>
              <RadioGroup>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='green' value='Si'>
                    Si
                  </Radio>
                  <Radio colorScheme='green' value='No'>
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Carrera:</FormLabel>
              <Input type='text' variant='flushed' placeholder='Carrera' />
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Centro de Estudio:</FormLabel>
              <Input type='text' variant='flushed' placeholder='Centro de Estudio' />
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>Año de titulación:</FormLabel>
              <Input type='text' variant='flushed' placeholder='Año de titulación' />
            </FormControl>
          </GridItem>
          <GridItem fontSize={"sm"}>
            <Stack spacing={5}>
              <Checkbox>
                En Curso
              </Checkbox>
            </Stack>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>¿A qué actividades económicas se dedica la institución o empresa en la que trabaja? </FormLabel>
              <RadioGroup display={{ base: "", md: "flex" }} >
                <Stack spacing={5} flex="1">
                  <Radio colorScheme='green' value='1'>
                    Alimentos fresco y procesados
                  </Radio>
                  <Radio colorScheme='green' value='2'>
                    Productos forestales de madera
                  </Radio>
                  <Radio colorScheme='green' value='3'>
                    Biotecnología (bioquímica y biomedicina)
                  </Radio>
                  <Radio colorScheme='green' value='4'>
                    Servicios ambientales
                  </Radio>
                  <Radio colorScheme='green' value='5'>
                    Confecciones y calzado
                  </Radio>
                  <Radio colorScheme='green' value='6'>
                    Tecnología (software, hardware y servicios informáticos)
                  </Radio>
                  <Radio colorScheme='green' value='7'>
                    Energías renovables
                  </Radio>
                  <Radio colorScheme='green' value='15'>
                    Otros
                  </Radio>
                </Stack>
                <Stack spacing={5} flex="1">
                  <Radio colorScheme='green' value='8'>
                    Vehículos, automotores, carrocerías y partes
                  </Radio>
                  <Radio colorScheme='green' value='9'>
                    Industria farmacéutica
                  </Radio>
                  <Radio colorScheme='green' value='10'>
                    Construcción
                  </Radio>
                  <Radio colorScheme='green' value='11'>
                    Metalmecánica
                  </Radio>
                  <Radio colorScheme='green' value='12'>
                    Transporte y logística
                  </Radio>
                  <Radio colorScheme='green' value='13'>
                    Petroquímica
                  </Radio>
                  <Radio colorScheme='green' value='14'>
                    Turismo
                  </Radio>

                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>
        <Grid p={2} border="1px solid #ccc" borderRadius={8} gap={4} mt={2}>
          <GridItem fontSize={"sm"}>
            <FormControl>
              <FormLabel>En su desempeño laboral que tan necesario es el dominio del idioma inglés</FormLabel>
              <RadioGroup>
                <Stack spacing={5}>
                  <Radio colorScheme='green' value='1'>
                  Indispensable	
                  </Radio>
                  <Radio colorScheme='green' value='2'>
                  No indispensable	
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
export default Quiz;
