import React, { useState } from "react";
import axios from "axios";

const form = document.getElementById("formID");

// Fungsi untuk mengosongkan isian dalam formulir
function kosongkanFormulir() {
  // Mendapatkan semua elemen input dalam formulir
  const inputs = form.getElementsByTagName("input");

  // Mengosongkan nilai setiap elemen input
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  // Mengosongkan nilai setiap elemen textarea dalam formulir
  const textareas = form.getElementsByTagName("textarea");
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].value = "";
  }

  // Mengosongkan nilai setiap elemen select dalam formulir
  const selects = form.getElementsByTagName("select");
  for (let i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = -1;
  }
}

const TreatmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    dateOfTreatment: "",
    treatmentDescription: [],
    medicationsPrescribed: [],
    costOfTreatment: "",
  });

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({ ...formData, [name]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "post",
      url: "http://127.0.0.1:3000/api/insert-patient",
      data: formData,
    };

    axios(config)
      .then((response) => {
        kosongkanFormulir();
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="p-4">
      <form id="formID" onSubmit={handleSubmit} method="POST">
        <div className="mb-4">
          <label htmlFor="patientName" className="block mb-2">
            Patient Name:
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={(e) =>
              setFormData({ ...formData, patientName: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="patientId" className="block mb-2">
            Patient ID:
          </label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={(e) =>
              setFormData({ ...formData, patientId: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfTreatment" className="block mb-2">
            Date of Treatment:
          </label>
          <input
            type="date"
            id="dateOfTreatment"
            name="dateOfTreatment"
            value={formData.dateOfTreatment}
            onChange={(e) =>
              setFormData({ ...formData, dateOfTreatment: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="treatmentDescription" className="block mb-2">
            Treatment Description:
          </label>
          <select
            multiple
            id="treatmentDescription"
            name="treatmentDescription"
            value={formData.treatmentDescription}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          >
            <option value="Treatment 1">Treatment 1</option>
            <option value="Treatment 2">Treatment 2</option>
            <option value="Treatment 3">Treatment 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="medicationsPrescribed" className="block mb-2">
            Medications Prescribed:
          </label>
          <select
            multiple
            id="medicationsPrescribed"
            name="medicationsPrescribed"
            value={formData.medicationsPrescribed}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          >
            <option value="Medication 1">Medication 1</option>
            <option value="Medication 2">Medication 2</option>
            <option value="Medication 3">Medication 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="costOfTreatment" className="block mb-2">
            Cost of Treatment:
          </label>
          <input
            type="number"
            id="costOfTreatment"
            name="costOfTreatment"
            value={formData.costOfTreatment}
            onChange={(e) =>
              setFormData({ ...formData, costOfTreatment: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TreatmentForm;
