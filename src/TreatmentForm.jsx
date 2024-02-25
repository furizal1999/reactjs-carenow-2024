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
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({ ...formData, [name]: selectedOptions });
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

  //   return (
  // <div className="p-4">
  //   <form id="formID" onSubmit={handleSubmit} method="POST">
  //     <div className="mb-4">
  //       <label htmlFor="patientName" className="block mb-2">
  //         Patient Name:
  //       </label>
  //       <input
  //         type="text"
  //         id="patientName"
  //         name="patientName"
  //         value={formData.patientName}
  //         onChange={(e) =>
  //           setFormData({ ...formData, patientName: e.target.value })
  //         }
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="patientId" className="block mb-2">
  //         Patient ID:
  //       </label>
  //       <input
  //         type="text"
  //         id="patientId"
  //         name="patientId"
  //         value={formData.patientId}
  //         onChange={(e) =>
  //           setFormData({ ...formData, patientId: e.target.value })
  //         }
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="dateOfTreatment" className="block mb-2">
  //         Date of Treatment:
  //       </label>
  //       <input
  //         type="date"
  //         id="dateOfTreatment"
  //         name="dateOfTreatment"
  //         value={formData.dateOfTreatment}
  //         onChange={(e) =>
  //           setFormData({ ...formData, dateOfTreatment: e.target.value })
  //         }
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="treatmentDescription" className="block mb-2">
  //         Treatment Description:
  //       </label>
  //       <select
  //         multiple
  //         id="treatmentDescription"
  //         name="treatmentDescription"
  //         value={formData.treatmentDescription}
  //         onChange={handleChange}
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       >
  //         <option value="Treatment 1">Treatment 1</option>
  //         <option value="Treatment 2">Treatment 2</option>
  //         <option value="Treatment 3">Treatment 3</option>
  //       </select>
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="medicationsPrescribed" className="block mb-2">
  //         Medications Prescribed:
  //       </label>
  //       <select
  //         multiple
  //         id="medicationsPrescribed"
  //         name="medicationsPrescribed"
  //         value={formData.medicationsPrescribed}
  //         onChange={handleChange}
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       >
  //         <option value="Medication 1">Medication 1</option>
  //         <option value="Medication 2">Medication 2</option>
  //         <option value="Medication 3">Medication 3</option>
  //       </select>
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="costOfTreatment" className="block mb-2">
  //         Cost of Treatment:
  //       </label>
  //       <input
  //         type="number"
  //         id="costOfTreatment"
  //         name="costOfTreatment"
  //         value={formData.costOfTreatment}
  //         onChange={(e) =>
  //           setFormData({ ...formData, costOfTreatment: e.target.value })
  //         }
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         required
  //       />
  //     </div>
  //     <button
  //       type="submit"
  //       className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
  //         loading ? "opacity-50 cursor-not-allowed" : ""
  //       }`}
  //       disabled={loading}
  //     >
  //       {loading ? "Submitting..." : "Submit"}
  //     </button>
  //     {/* <button
  //       type="submit"
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //     >
  //       Submit
  //     </button> */}
  //   </form>
  // </div>
  //   );
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
          required
        />
        <FormInput
          label="Patient ID:"
          id="patientId"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Date of Treatment:"
          id="dateOfTreatment"
          name="dateOfTreatment"
          value={formData.dateOfTreatment}
          onChange={handleChange}
          type="date"
          required
        />
        <FormSelect
          label="Treatment Description:"
          id="treatmentDescription"
          name="treatmentDescription"
          value={formData.treatmentDescription}
          onChange={handleChange}
          options={treatmentOptions}
          required
        />
        <FormSelect
          label="Medications Prescribed:"
          id="medicationsPrescribed"
          name="medicationsPrescribed"
          value={formData.medicationsPrescribed}
          onChange={handleChange}
          options={medicationOptions}
          required
        />
        <FormInput
          label="Cost of Treatment:"
          id="costOfTreatment"
          name="costOfTreatment"
          value={formData.costOfTreatment}
          onChange={handleChange}
          type="number"
          required
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
