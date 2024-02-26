import React, { useState } from "react";
import axios from "axios";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormButton from "./FormButton";

const TreatmentForm = () => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    patientName: "", // Nama pasien
    patientId: "", // ID pasien
    dateOfTreatment: "", // Tanggal perawatan
    treatmentDescription: [], // Deskripsi perawatan (multi-select)
    medicationsPrescribed: [], // Obat yang diresepkan (multi-select)
    costOfTreatment: "", // Biaya perawatan
  });

  const [loading, setLoading] = useState(false); // State untuk status loading

  // Fungsi untuk menghandle perubahan pada input teks (bukan select)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menghandle perubahan pada select
  const handleChange = (selectedOptions, name) => {
    // Periksa nama formulir yang sedang diubah dan perbarui sesuai
    if (name === "treatmentDescription") {
      setFormData({ ...formData, treatmentDescription: selectedOptions });
    } else if (name === "medicationsPrescribed") {
      setFormData({ ...formData, medicationsPrescribed: selectedOptions });
    }
  };

  // Fungsi untuk mereset formulir
  const resetForm = () => {
    setFormData({
      patientName: "", // Reset nama pasien
      patientId: "", // Reset ID pasien
      dateOfTreatment: "", // Reset tanggal perawatan
      treatmentDescription: [], // Reset deskripsi perawatan
      medicationsPrescribed: [], // Reset obat yang diresepkan
      costOfTreatment: "", // Reset biaya perawatan
    });
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set status loading menjadi true saat pengiriman formulir
    const config = {
      method: "post",
      url: "http://127.0.0.1:3000/api/insert-patient",
      data: formData,
    };

    axios(config)
      .then((response) => {
        alert("Data berhasil diinputkan");
        resetForm(); // Panggil fungsi resetForm setelah berhasil mengirimkan formulir
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Set status loading menjadi false setelah pengiriman formulir selesai (baik sukses maupun gagal)
      });
  };

  // Opsi untuk select treatment
  const treatmentOptions = [
    { label: "Treatment 1", value: "Treatment 1" },
    { label: "Treatment 2", value: "Treatment 2" },
    { label: "Treatment 3", value: "Treatment 3" },
  ];

  // Opsi untuk select medication
  const medicationOptions = [
    { label: "Medication 1", value: "Medication 1" },
    { label: "Medication 2", value: "Medication 2" },
    { label: "Medication 3", value: "Medication 3" },
  ];

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} id="formID">
        {/* Input untuk nama pasien */}
        <FormInput
          label="Patient Name:"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleInputChange}
          required={true}
        />
        {/* Input untuk ID pasien */}
        <FormInput
          label="Patient ID:"
          id="patientId"
          name="patientId"
          value={formData.patientId}
          onChange={handleInputChange}
          required={true}
        />
        {/* Input untuk tanggal perawatan */}
        <FormInput
          label="Date of Treatment:"
          id="dateOfTreatment"
          name="dateOfTreatment"
          value={formData.dateOfTreatment}
          onChange={handleInputChange}
          type="date"
          required={true}
        />
        {/* Select untuk deskripsi perawatan */}
        <FormSelect
          value={formData.treatmentDescription}
          label="Treatment Description:"
          id="treatmentDescription"
          opt={treatmentOptions}
          onChange={(selectedOptions) =>
            handleChange(selectedOptions, "treatmentDescription")
          }
          required={true}
        />
        {/* Select untuk obat yang diresepkan */}
        <FormSelect
          value={formData.medicationsPrescribed}
          label="Medications Prescribed:"
          id="medicationsPrescribed"
          opt={medicationOptions}
          onChange={(selectedOptions) =>
            handleChange(selectedOptions, "medicationsPrescribed")
          }
          required={true}
        />
        {/* Input untuk biaya perawatan */}
        <FormInput
          label="Cost of Treatment:"
          id="costOfTreatment"
          name="costOfTreatment"
          value={formData.costOfTreatment}
          onChange={handleInputChange}
          type="number"
          required={true}
        />
        {/* Tombol Submit */}
        <FormButton loading={loading} type="submit" />
      </form>
    </div>
  );
};

export default TreatmentForm;
