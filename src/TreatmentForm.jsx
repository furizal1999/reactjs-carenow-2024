import React, { useState } from "react";
import axios from "axios";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function resetForm(setFormData) {
  // mereset form berdasarkan id
  document.getElementById("patientName").value = "";
  document.getElementById("patientId").value = "";
  document.getElementById("dateOfTreatment").value = "";
  document.getElementById("treatmentDescription").value = "";
  document.getElementById("medicationsPrescribed").value = "";
  document.getElementById("costOfTreatment").value = "";

  // set form data menjadi ""
  setFormData({
    patientName: "",
    patientId: "",
    dateOfTreatment: "",
    treatmentDescription: [],
    medicationsPrescribed: [],
    costOfTreatment: "",
  });
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
    // Periksa apakah options tidak undefined sebelum mengonversinya menjadi array
    const selectedOptions = options
      ? Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value)
      : [];

    // Gabungkan kedua pembaruan menjadi satu panggilan ke setFormData
    setFormData({ ...formData, [name]: options ? selectedOptions : value });
  };

  const [loading, setLoading] = useState(false); // state for loading status

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // set loading to true when submitting form
    const config = {
      method: "post",
      url: "http://127.0.0.1:3000/api/insert-patient",
      data: formData,
    };

    axios(config)
      .then((response) => {
        alert("Data berhasil di inputkan");

        resetForm(setFormData);
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // set loading to false after submission (whether success or error)
      });
  };

  const treatmentOptions = [
    { label: "Treatment 1", value: "Treatment 1" },
    { label: "Treatment 2", value: "Treatment 2" },
    { label: "Treatment 3", value: "Treatment 3" },
  ];

  const medicationOptions = [
    { label: "Medication 1", value: "Medication 1" },
    { label: "Medication 2", value: "Medication 2" },
    { label: "Medication 3", value: "Medication 3" },
  ];

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} id="formID">
        <FormInput
          label="Patient Name:"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label="Patient ID:"
          id="patientId"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label="Date of Treatment:"
          id="dateOfTreatment"
          name="dateOfTreatment"
          value={formData.dateOfTreatment}
          onChange={handleChange}
          type="date"
          required={true}
        />
        <FormSelect
          label="Treatment Description:"
          id="treatmentDescription"
          name="treatmentDescription"
          value={formData.treatmentDescription}
          onChange={handleChange}
          options={treatmentOptions}
          required={true}
          multiple={true}
        />
        <FormSelect
          label="Medications Prescribed:"
          id="medicationsPrescribed"
          name="medicationsPrescribed"
          value={formData.medicationsPrescribed}
          onChange={handleChange}
          options={medicationOptions}
          required={true}
          multiple={true}
        />
        <FormInput
          label="Cost of Treatment:"
          id="costOfTreatment"
          name="costOfTreatment"
          value={formData.costOfTreatment}
          onChange={handleChange}
          type="number"
          required={true}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TreatmentForm;
