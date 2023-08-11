import utils from "../../lib/utils.module.css";

export default function SelectInput({
  label,
  id,
  value,
  items,
  changeHandler,
  extraItem,
}) {
  return (
    <div className={utils.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      >
        {extraItem && <option value={extraItem.value}>{extraItem.text}</option>}
        {Object.values(items).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
