const FormTextInput = ({
  type,
  name,
  label,
  handler,
  value,
  placeholder,
  disable,
  customClass,
}) => {


  return (
    <div>
      {label && <p className="text-xs font-normal my-1">{label}</p>}
      
      <input
        type={type}
        name={name}
        onChange={handler}
        className={customClass}
        value={value}
        placeholder={placeholder}
        disabled={disable}
      />
    </div>
  );
};

export default FormTextInput;
