// import React, { useState, useEffect } from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import { Button } from '@chakra-ui/react';
// import { FiDownload } from 'react-icons/fi';
// import PDFDocument from '../components/PDFDocument';

// const Resumes = () => {
//   const [pdfBlob, setPdfBlob] = useState(null);

//   useEffect(() => {
//     // Generar el PDF cuando se monta el componente
//     const pdf = <PDFDocument />;
//     setPdfBlob(pdf);
//   }, []);

//   return (
//     <>
//       {pdfBlob && (
//         <PDFDownloadLink
//           document={pdfBlob}
//           fileName="curriculm.pdf"
//           className="custom-download-button"
//         >
//           {({ loading }) => (
//             <Button
//               colorScheme="red" // Cambia el esquema de color según tu preferencia
//               leftIcon={<FiDownload />} // Añade un ícono a la izquierda del texto del botón
//             >
//               {loading ? 'Generando PDF...' : 'Descargar PDF'}
//             </Button>
//           )}
//         </PDFDownloadLink>
//       )}
//     </>
//   );
// };

// export default Resumes;


import React, { useState, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from '../components/PDFDocument';

const Resumes = () => {
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    // Establecer el estado para mostrar el PDF
    setShowPDF(true);
  }, []);

  return (
    <>
      {showPDF && (
        <PDFViewer width="100%" height="500px">
          <PDFDocument data={{
    ci: '1104661598',
    firstName: 'Edgar',
    secondName: 'Patricio',
    firstLastName: 'Torres',
    secondLastName: 'Condolo',
    bloodType: 'A+',
    birthDate: '2000-07-05',
    gender: 'M',
    civilStatus: 'Soltero',
    nationality: 'Ecuatoriana',
    placeBirth: 'Cariamanga',
    placeResidence: 'Cariamanga',
    direction: 'Calle Centenario y 18 de Noviembre',
    homePhone: '(07) 268-8460',
    cellPhone: '(593) 96-923-6901',
    personalEmail: 'edgartorrespc8@gmail.com',
    institutionalEmail: 'ep_torres@marianosamaniego.edu.ec',
    image: '',
} }/>
        </PDFViewer>
      )}
    </>
  );
};

export default Resumes;

// import React from 'react';
// import PDFDocument from '../components/PDFDocument';

// const Resumes = () => {
//   return (
//     <>
//       <PDFDocument />
//     </>
//   );
// };

// export default Resumes;








// const navigate = useNavigate();
// const toast = useToast();
// const { user } = useAuth();
// const [users, setUsers] = useState([]);

// const { isOpen, onOpen, onClose } = useDisclosure();

// const [currentUser, setCurrentUser] = useState({});
// const cancelRef = useRef();

// const deleteUser = () => {
//   toast.promise(removeUser(currentUser.userId), {
//     loading: {
//       title: "Eliminando...",
//       position: "top-right",
//     },
//     success: (d) => ({
//       title: "Usuario",
//       description: d.data.message,
//       isClosable: true,
//     }),
//     error: (e) => ({
//       title: "Error",
//       description: e.response.data.message,
//       isClosable: true,
//     }),
//   });

//   setUsers(users.filter((user) => user.userId !== currentUser.userId));
// };

// const columns = [
//   {
//     header: "Id",
//     accessorKey: "userId",
//     cell: (props) => props.row.index + 1,
//   },
//   {
//     header: "Cédula",
//     accessorKey: "ci",
//   },

//   {
//     header: "Nombres Completos",
//     accessorKey: "fullname",
//     accessorFn: (row) =>
//       `
//       ${row.firstName} ${row.secondName} ${row.firstLastName} ${row.secondLastName}`,
//   },

//   {
//     header: "Foto",
//     accessorKey: "photo",
//     cell: (props) => (
//       <Avatar
//         name={props.row.original.firstName}
//         src={
//           props.row.original.photo &&
//           `${urlPhotos}/${props.row.original.photo}`
//         }
//       />
//     ),
//   },
//   {
//     header: "Acción",

//     cell: (props) => (
//       <Stack spacing={4} direction="row" align="center">
//         <Button
//           colorScheme="yellow"
//           onClick={() => navigate(`/editar-usuario/${props.row.original.userId}`)  
//         }
//         >
//           Editar
//         </Button>
//         <Button
//           colorScheme="red"
//           onClick={() => {
//             setCurrentUser(props.row.original);
//             onOpen();
//           }}
//         >
//           Eliminar
//         </Button>
//       </Stack>
//     ),
//   },
// ];

// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const userRequest = await getUsers();

//       setUsers(userRequest.data.filter((us) => us.userId !== user.userId));
//       // console.log(users);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchUsers();
// }, [user]);
   {/* <Box p={10}>
        <Flex alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Curriculos</Heading>
          </Box>
          <Spacer />
        </Flex>
        <Tabl data={users} columns={columns} />

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay bg="blackAlpha.300" backdropFilter="blur(10px)">
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Eliminar Usuario
              </AlertDialogHeader>

              <AlertDialogBody>
                ¿Estás seguro de eliminar ha {currentUser.firstName}
                {currentUser.firstLastName}?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteUser();
                    onClose();
                  }}
                  ml={3}
                >
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box> */}
