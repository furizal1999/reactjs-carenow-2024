// membuat element FormButton
const FormButton = (props) => {
  return (
    <button
      type={props.type}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
        props.loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={props.loading}
    >
      {props.loading ? "Submitting..." : "Submit"}
    </button>
  );
};

export default FormButton;
