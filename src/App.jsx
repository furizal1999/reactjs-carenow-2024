import React from "react";
import TreatmentForm from "./TreatmentForm";

const App = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          Healthcare Treatment Entry System
        </h1>
        <TreatmentForm />
      </div>
    </>
  );
};

export default App;
