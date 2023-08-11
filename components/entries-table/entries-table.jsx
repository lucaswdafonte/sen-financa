import { EditPopup } from "@/components/edit-popup/edit-popup";
import { AiFillDelete } from "react-icons/ai";
import styles from "./entries-table.module.css";

export default function EntriesTable({ entries, handleDeleteEntry }) {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Título</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Data de criação</th>
            <th className={styles.shortColumn}>Atualizar</th>
            <th className={styles.shortColumn}>Excluir</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {entries.length > 0 &&
            entries.map((entry) => {
              return (
                <tr key={entry.id}>
                  <td>{entry.title}</td>
                  <td>R$ {entry.amount}</td>
                  <td>{entry.type}</td>
                  <td>{entry.category}</td>
                  <td>{entry.creationDate}</td>
                  <td>
                    <EditPopup entry={entry} />
                  </td>
                  <td className={styles.buttonCell}>
                    <button onClick={() => handleDeleteEntry(entry.id)}>
                      <AiFillDelete
                        size="2.5rem"
                        className={styles.deleteIcon}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {entries.length == 0 && (
        <span className={styles.noEntries}>Nenhuma transação adicionada.</span>
      )}
    </>
  );
}
