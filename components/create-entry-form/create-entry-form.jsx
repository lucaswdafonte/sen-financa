import { categories, types } from "@/constants";
import utils from "../../lib/utils.module.css";
import SelectInput from "../select-input/select-input";
import styles from "./create-entry-form.module.css";

export function CreateEntryForm({
  handleFormSubmit,
  title,
  setTitle,
  amount,
  setAmount,
  type,
  setType,
  category,
  setCategory,
  buttonLabel,
  close,
}) {
  return (
    <form
      onSubmit={(e) => handleFormSubmit(e, close)}
      className={styles.addEntryForm}
    >
      <div className={utils.inputContainer}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          placeholder="Título da transação"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={utils.inputContainer}>
        <label htmlFor="amount">Valor:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <SelectInput
        label="Tipo:"
        id="type"
        value={type}
        changeHandler={setType}
        items={types}
      />

      <SelectInput
        label="Categoria:"
        id="category"
        value={category}
        changeHandler={setCategory}
        items={categories}
      />
      <button type="submit" className={styles.addButton}>{buttonLabel}</button>
    </form>
  );
}
