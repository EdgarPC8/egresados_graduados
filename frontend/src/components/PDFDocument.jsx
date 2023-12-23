import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    Infocol: {
        width: '70%', // Ancho para los datos personales
    },
    photoCol: {
        width: '30%', // Ancho para la foto
    },
    page: {
        flexDirection: 'column',
        padding: 30,
    },
    section: {
        marginBottom: 10,
    },
    titleInstitution: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputGroup: {
        marginBottom: 8,
        alignItems: 'flex-start',
        flexDirection: 'row', // Para alinear elementos en fila
        justifyContent: 'flex-start', // Para alinear elementos en el inicio de la fila
    },
    inputLabel: {
        width: 160, // Ancho del label
        fontSize: 10,
        marginRight: 5, // Espacio a la derecha del label
    },
    input: {
        fontSize: 10,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    table: {
        width: '100%',
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableColTh: {
        fontSize: 10,
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        textAlign: 'center',
        backgroundColor: '#f2f2f2', // Color de fondo para los encabezados
        fontWeight: 700, // Aplicar negrita de manera más explícita
    },
    tableColTd: {
        fontSize: 10,
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        textAlign: 'center',
    },
});

const PDFDocument = ({ data }) => {
    const personalInfo = [
        { label: 'Cedula', value: data.ci },
        { label: 'Primer Apellido', value: data.firstName },
        { label: 'Segundo Apellido', value: data.secondName },
        { label: 'Primer Nombre', value: data.firstLastName },
        { label: 'Segundo Nombre', value: data.secondLastName },
        { label: 'Genero', value: data.gender },
        { label: 'Tipo de Sangre', value: data.bloodType },
        { label: 'Fecha de nacimiento', value: data.birthDate },
        { label: 'Estado Civil', value: data.civilStatus },
        { label: 'Nacionalidad', value: data.nationality },
        { label: 'Teléfono de domicilio', value: data.homePhone },
        { label: 'Teléfono de celular', value: data.cellPhone },
        { label: 'Lugar de Nacimiento', value: data.placeBirth },
        { label: 'Dirección de domicilio', value: data.direction },
        { label: 'Lugar de residencia', value: data.placeResidence },
        { label: 'Correo Institucional', value: data.institutionalEmail },
        { label: 'Correo Personal', value: data.personalEmail },
    ];
    const FormacionAcademica = {
        header: [
            { width: '50%', title: 'Tipo' },
            { width: '50%', title: 'Titulo Obtenido' },
            { width: '50%', title: 'Institucion educativa' },
            { width: '50%', title: 'Fecha' },
            { width: '50%', title: 'Lugar' },
            { width: '50%', title: 'Pais' },
            { width: '50%', title: 'Nro' },
        ],
        values: [
            { 0: "dedede", 1: "Todededrres", 2: "deded", 3: "bng", 4: "gfhfgh", 5: "fghfgh", 6: "hgfhfgh", },
        ],
    }
    const ExperienciaDocente = {
        header: [
            { width: '50%', title: 'Institución'},
            { width: '50%', title: 'Materia' },
            { width: '50%', title: 'Fecha Inicio'},
            { width: '50%', title: 'Fecha Fin'},
            { width: '50%', title: 'Modalidad'},
            { width: '50%', title: 'Lugar' },
            { width: '50%', title: 'País' },
        ],
        values: [
            { 0: "dedede", 1: "Todededrres", 2: "deded", 3: "bng", 4: "gfhfgh", 5: "fghfgh", 6: "hgfhfgh", },
        ],
    }
    const Cursos = {
        header: [
            { width: '50%', title: 'Tipo'},
            { width: '50%', title: 'Nombre' },
            { width: '50%', title: 'Organizado Por:'},
            { width: '50%', title: 'Lugar'},
            { width: '50%', title: 'Duracion(Horas)'},
            { width: '50%', title: 'Fecha Inicio' },
            { width: '50%', title: 'Fecha Fin' },
            { width: '50%', title: 'Tipo de Participación'},
        ],
        values: [
            { 0: "dedede", 1: "Todededrres", 2: "deded", 3: "bng", 4: "gfhfgh", 5: "fghfgh", 6: "hgfhfgh",7:'DEDED'},
        ],
    }
    const renderTable = (Table) => {
        const calcColumnWidth = (widthPercentage) => {
            return { flexBasis: widthPercentage };
        };
        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    {/* Encabezado */}
                    {Table.header.map((col, colIndex) => (
                        <View style={{ ...styles.tableColTh, ...calcColumnWidth(col.width) }} key={colIndex}>
                            <Text>{col.title}</Text>
                        </View>
                    ))}
                </View>
                {/* Datos */}
                {Table.values.map((row, rowIndex) => (
                    <View style={styles.tableRow} key={rowIndex}>
                        {Object.keys(row).map((key, colIndex) => (
                            <View style={{ ...styles.tableColTd, ...calcColumnWidth(Table.header[colIndex].width) }} key={colIndex}>
                                <Text>{row[key]}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        );
    };
    const renderPersonalData = () => {
        return (
            personalInfo.map((info, index) => (
                <View style={styles.inputGroup} key={index}>
                    <Text style={styles.inputLabel}>{info.label}:</Text>
                    <View style={styles.input}>
                        <Text>{info.value}</Text>
                    </View>
                </View>
            ))
        );
    };


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.titleInstitution}>INSTITUTO SUPERIOR TECNOLÓGICO "MARIANO SAMANIEGO"</Text>
                {/* <View style={styles.section}>
                    <Text style={styles.heading}>HOJA DE VIDA</Text>
                    <View style={styles.row}>
                        <View style={styles.Infocol}>
                            <Text style={styles.subTitle}>Datos Personales</Text>
                            {renderPersonalData()}
                        </View>
                        <View style={styles.photoCol}>
                            <Text style={styles.subTitle}>Foto</Text>
                            <View style={styles.photo}>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subTitle}>Formacion Academica</Text>
                    {renderTable(FormacionAcademica)}
                </View>
                <View style={styles.section}>
                    <Text style={styles.subTitle}>Experiencia Docente</Text>
                    {renderTable(ExperienciaDocente)}
                </View> */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>CURSOS, TALLERES, SEMINARIOS, CONGRESOS Y /U OTROS</Text>
                    {renderTable(Cursos)}
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;



