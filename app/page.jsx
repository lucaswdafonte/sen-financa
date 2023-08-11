"use client";
import { CreateEntryForm } from "@/components/create-entry-form/create-entry-form";
import EntriesFilters from "@/components/entries-filters/entries-filters";
import EntriesTable from "@/components/entries-table/entries-table";
import Totals from "@/components/totals/totals";
import EntriesContext from "@/lib/entries-context";
import styles from "./page.module.css";
import useHomeLogic from "./custom-hooks/use-home-logic";

export default function Home() {
  const {
    title,
    setTitle,
    amount,
    setAmount,
    type,
    setType,
    category,
    setCategory,
    contextValue,
    handleAddEntry,
    handleDeleteEntry,
    incomesTotal,
    expensesTotal,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    entriesToShow,
  } = useHomeLogic();

  return (
    <EntriesContext.Provider value={contextValue}>
      <main className={styles.appContainer}>
        <div className={styles.addEntryContainer}>
          <h2 className={styles.addEntryHeader}>Adicionar nova transação:</h2>
          <CreateEntryForm
            handleFormSubmit={handleAddEntry}
            title={title}
            setTitle={setTitle}
            amount={amount}
            setAmount={setAmount}
            type={type}
            setType={setType}
            category={category}
            setCategory={setCategory}
            buttonLabel="Adicionar"
          />
        </div>

        <EntriesFilters
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <EntriesTable
          entries={entriesToShow}
          handleDeleteEntry={handleDeleteEntry}
        />

        <Totals incomesTotal={incomesTotal} expensesTotal={expensesTotal} />
      </main>
    </EntriesContext.Provider>
  );
}
