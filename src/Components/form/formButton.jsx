const FormButton = ({ label, handler, disable, customClass }) => {
  return (
    <button className={customClass} disabled={disable} onClick={handler}>
      {label}
    </button>
  );
};

export default FormButton;
