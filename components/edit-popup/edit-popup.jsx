"use client";
import EntriesContext from "@/lib/entries-context";
import { useContext, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import Popup from "reactjs-popup";
import { CreateEntryForm } from "../create-entry-form/create-entry-form";
import styles from "./edit-popup.module.css";

export function EditPopup({ entry, UpdateIcon }) {
  const [title, setTitle] = useState(entry.title);
  const [amount, setAmount] = useState(entry.amount);
  const [type, setType] = useState(entry.type);
  const [category, setCategory] = useState(entry.category);

  const { entries, setEntries } = useContext(EntriesContext);

  const handleUpdateEntry = (e, close) => {
    e.preventDefault();

    const updatedEntries = entries.map((item) => {
      if (item.id == entry.id) {
        return {
          ...item,
          title,
          amount,
          type,
          category,
        };
      } else {
        return item;
      }
    });

    setEntries(updatedEntries);
    close();
  };

  return (
    <Popup
      trigger={
        <button className="button">
          <GrUpdate size="2rem" className={styles.updateIcon}/>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className={styles.modal}>
          <button className={styles.close} onClick={close}>
            &times;
          </button>
          <div className={styles.header}> Modal Title </div>
          <div className={styles.content}>
            <CreateEntryForm
              title={title}
              setTitle={setTitle}
              amount={amount}
              setAmount={setAmount}
              type={type}
              setType={setType}
              category={category}
              setCategory={setCategory}
              handleFormSubmit={handleUpdateEntry}
              buttonLabel="Atualizar"
              close={close}
            />
          </div>
        </div>
      )}
    </Popup>
  );
}
