
import axios from "../api/axios.js";
import React, { useState, useEffect,useRef } from 'react';

  
  async function fetchData() {
    try {
      const getAllAcademic_training = await axios.get("/cv/getAllAcademic_training");
      const getAllTeaching_experience = await axios.get("/cv/getAllTeaching_experience");
      const getAllCourses_workshops = await axios.get("/cv/getAllCourses_workshops");
      const getAllIntellectual_production = await axios.get("/cv/getAllIntellectual_production");
      const getAllBooks = await axios.get("/cv/getAllBooks");
      const getAllAcademic_professional_merits = await axios.get("/cv/getAllAcademic_professional_merits");
      const getAllLanguages = await axios.get("/cv/getAllLanguages");
      const getAllProfessional_experience = await axios.get("/cv/getAllProfessional_experience");
      return {
        getAllAcademic_training: getAllAcademic_training.data,
        getAllTeaching_experience: getAllTeaching_experience.data,
        getAllCourses_workshops: getAllCourses_workshops.data,
        getAllIntellectual_production: getAllIntellectual_production.data,
        getAllBooks: getAllBooks.data,
        getAllAcademic_professional_merits: getAllAcademic_professional_merits.data,
        getAllLanguages: getAllLanguages.data,
        getAllProfessional_experience: getAllProfessional_experience.data
      };
    } catch (error) {
      console.error('Error al obtener datos académicos:', error);
    }
  }

export async function form(event) {

  event.preventDefault();
  const dataForm = Object.fromEntries(new FormData(event.target));
  const form = document.getElementById("formAcademic_training");
  const submitButton = form.querySelector('button[type="submit"]');
  console.log(event.target.id)

  // const purpose = event.submitter.getAttribute('data-purpose'); // Obtén el valor de data-purpose del botón que desencadenó el envío
  try {
    if (submitButton.innerHTML === 'Guardar') {
      // const { data } = await axios.post("/cv/addAcademic_training", dataForm);
      // setDatosAcademic_training([...datosAcademic_training, dataForm]);

    } else if (submitButton.innerHTML === 'Editar') {
      // console.log('Datos del formulario para Editar:', submitButton.value);
      // const obj = {
      //   columns:dataForm,
      //   where: { where: { id: submitButton.value }},
      // }
    // const { data } = await axios.put("/cv/editAcademic_training", obj);
    // console.log(data)
    // const updatedData = await fetchData();
    // setDatosAcademic_training(updatedData.getAllAcademic_training);
    } 
  } catch (error) {
    console.error('Error en getAllProfessionals:', error);
    throw error;
  }
}



