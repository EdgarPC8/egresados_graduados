import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { urlPhotos } from "../api/axios";
import { reorderDateString } from "../helpers/date.js";
import HomePhoneIcon from "./pdfIcons/HomePhoneIcon.jsx";
import PhoneIcon from "./pdfIcons/PhoneIcon.jsx";
import LocationIcon from "./pdfIcons/LocationIcon.jsx";
import EmailIcon from "./pdfIcons/EmailIcon.jsx";
import IdentificationIcon from "./pdfIcons/IdentificationIcon.jsx";

Font.register({
  family: "Lato",
  fonts: [
    { src: "../../src/assets/fonts/Lato-Black.ttf", fontStyle: "black" },
    {
      src: "../../src/assets/fonts/Lato-Bold.ttf",
      fontStyle: "bold",
    },
    {
      src: "../../src/assets/fonts/Lato-Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: "../../src/assets/fonts/Lato-Regular.ttf",
      fontStyle: "regular",
    },
  ],
});
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  Infocol: {
    width: "70%", // Ancho para los datos personales
  },
  photoCol: {
    width: "30%", // Ancho para la foto
  },
  page: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 15,
    color: "#202021",
    fontFamily: "Lato",
    fontStyle: "bold",
    borderBottom: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#3D3D3D",
  },

  section: {
    marginBottom: 10,
  },
  titleInstitution: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  titleName: {
    fontSize: 40,
    color: "#202021",
    fontFamily: "Lato",
    fontStyle: "bold",
  },
  info: {
    fontStyle: "italic",
    fontFamily: "Lato",
    fontSize: 12,
    color: "#202021",
  },
  titleCol: {
    fontFamily: "Lato",
    fontSize: 11,
    fontStyle: "bold",
    color: "#202021",
  },

  contentCell: {
    fontFamily: "Lato",
    fontStyle: "italic",
    color: "#202021",
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: "#444440",
    color: "#FFFFFF",
    borderRadius: 20,
    fontFamily: "Lato",
    fontStyle: "bold",
  },
  content: {
    flex: 1,
    borderColor: "#3D3D3D",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderBottom: 1.5,
  },
  box: {
    flexDirection: "row",
    padding: 30,
    borderRadius: 5,
  },

  inputGroup: {
    marginBottom: 8,
    alignItems: "flex-start",
    flexDirection: "row", // Para alinear elementos en fila
    justifyContent: "flex-start", // Para alinear elementos en el inicio de la fila
  },
  inputLabel: {
    width: 160, // Ancho del label
    fontSize: 10,
    marginRight: 5, // Espacio a la derecha del label
  },

  text: {
    fontSize: 12,

    fontFamily: "Lato",
    fontStyle: "regular",
    color: "#202021",
  },
  input: {
    fontSize: 10,
  },
  photo: {
    width: 120,
    height: 120,
    objectFit: "cover",
    borderRadius: "100%",
  },
  table: {
    width: "100%",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColTh: {
    fontSize: 10,
    flex: 1,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#d7dce6", // Color de fondo para los encabezados
  },
  tableColTd: {
    fontSize: 10,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
});

const PDFDocument = ({ data, cv }) => {
  const imageURL = data.image ? `${urlPhotos}/${data.image}` : "/noPhoto.jpg";

  const contact = [
    // { label: "Primer Apellido", value: data.firstName },
    // { label: "Segundo Apellido", value: data.secondName },
    // { label: "Primer Nombre", value: data.firstLastName },
    // { label: "Segundo Nombre", value: data.secondLastName },
    // { label: "Genero", value: data.gender },
    // { label: "Tipo de Sangre", value: data.bloodType },
    // { label: "Fecha de nacimiento", value: data.birthDate },
    // { label: "Estado Civil", value: data.civilStatus },
    // { label: "Nacionalidad", value: data.nationality },
    { icon: <HomePhoneIcon width={18} height={18} />, value: data.homePhone },
    { icon: <PhoneIcon width={18} height={18} />, value: data.cellPhone },
    //{ label: "Lugar de Nacimiento", value: data.placeBirth },
    { icon: <LocationIcon width={18} height={18} />, value: data.direction },
    //{ label: "Lugar de residencia", value: data.placeResidence },
    {
      icon: <EmailIcon width={18} height={18} />,
      value: data.institutionalEmail,
    },
    { icon: <EmailIcon width={18} height={18} />, value: data.personalEmail },
  ];

  const Table = ({ data: Table }) => {
    const calcColumnWidth = (widthPercentage) => {
      return { flexBasis: widthPercentage };
    };

    const getCellContent = (rowIndex, colKey) => {
      const cellData = Table.values[rowIndex][colKey];
      return (
        <Text style={styles.contentCell}>{reorderDateString(cellData)}</Text>
      );
    };

    const getPorcentaje = (colIndex, colCount) => {
      const totalColumns = colCount || 1;
      return Table.valuesPorcentajes && Table.valuesPorcentajes[colIndex]
        ? Table.valuesPorcentajes[colIndex]
        : (100 / totalColumns).toString() + "%";
    };

    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          {Table.header.map((col, colIndex) =>
            col.row ? (
              <View
                style={{
                  ...styles.tableColTh,
                  ...calcColumnWidth(col.width),
                  padding: 0,
                }}
                key={colIndex}
              >
                {col.row.map((rowObj, rowIndex) => (
                  <View
                    style={{
                      ...styles.tableRow,
                      //borderBottomWidth: rowIndex === numRows - 1 ? 0 : 1, // Última fila sin borde inferior
                    }}
                    key={rowIndex}
                  >
                    {rowObj.col.map((column, columnIndex) => (
                      <View
                        style={{
                          ...styles.tableColTd,
                          ...calcColumnWidth(
                            getPorcentaje(columnIndex, rowObj.col.length),
                          ),
                          //borderLeftWidth: columnIndex === 0 ? 0 : 1, // Primer columna sin borde izquierdo
                        }}
                        key={columnIndex}
                      >
                        {column.title && (
                          <Text style={styles.titleCol}>{column.title}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ) : (
              <View
                style={{
                  ...styles.tableColTh,
                  ...calcColumnWidth(col.width),
                }}
                key={colIndex}
              >
                <Text style={styles.titleCol}>{col.title}</Text>
              </View>
            ),
          )}
        </View>

        {Table.values.map((row, rowIndex) => (
          <View style={styles.tableRow} key={rowIndex}>
            {Object.keys(row).map((_, colIndex) => {
              const width = getPorcentaje(colIndex, Object.keys(row).length);
              return (
                <View
                  style={{
                    ...styles.tableColTd,
                    ...calcColumnWidth(width),
                  }}
                  key={colIndex}
                >
                  {getCellContent(rowIndex, colIndex)}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.content}>
          <View style={styles.box}>
            <Image src={imageURL} style={[styles.photo]} />
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                marginLeft: 30,
                width: "60%",
              }}
            >
              <Text style={styles.titleName}>{data.firstName}</Text>
              <Text style={styles.titleName}>{data.firstLastName}</Text>
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <IdentificationIcon width={18} height={18} />
                <Text style={styles.text}>{data.ci}</Text>
              </View>
              <Text style={styles.text}>{data.aboutMe}</Text>
            </View>
          </View>

          {Object.entries(cv).map(([section, data]) => {
            const { values, title } = data;
            if (values && values.length > 0) {
              return (
                <View key={section} style={styles.section}>
                  <Text style={styles.title}>{title}</Text>
                  <Table data={data} />
                </View>
              );
            }
            return null;
          })}

          <View
            style={{
              flexDirection: "row",
              borderTop: 1,
            }}
          >
            <View
              style={{
                padding: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#202021",
                  fontFamily: "Lato",
                  fontStyle: "bold",
                  paddingBottom: 10,
                }}
              >
                CONTACTO
              </Text>
              <View style={{ gap: 5 }}>
                {contact.map(({ value, icon }, index) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {icon}
                    <Text style={styles.text} key={index}>
                      {value}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
