import styles from "./totals.module.css";

export default function Totals({ incomesTotal, expensesTotal }) {
  return (
    <div className={styles.totalsContainer}>
      <span>Total de receitas: R$ {incomesTotal}</span>
      <span>Total de despesas: R$ {expensesTotal}</span>
      <span>Saldo final: R$ {incomesTotal - expensesTotal}</span>
    </div>
  );
}
