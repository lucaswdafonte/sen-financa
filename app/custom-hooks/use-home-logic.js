import { categories, types } from "@/constants";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHomeLogic = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(types.income);
  const [category, setCategory] = useState(categories.home);

  const [entries, setEntries] = useState([]);

  const contextValue = {
    entries,
    setEntries,
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    let currentDate = new Date();

    let newEntry = {
      title,
      amount,
      type,
      category,
      id: uuidv4(),
      creationDate: currentDate.toLocaleDateString(),
    };

    setEntries([...entries, newEntry]);
    setTitle("");
    setAmount(0);
  };

  const handleDeleteEntry = (id) => {
    const entriesWithoutDelete = entries.filter((entry) => entry.id != id);
    setEntries(entriesWithoutDelete);
  };

  const getTotal = (desiredType) => {
    const desiredEntries = entries.filter((entry) => entry.type == desiredType);

    if (desiredEntries.length > 0) {
      return desiredEntries.reduce(
        (acummulator, entry) => acummulator + parseFloat(entry.amount),
        0
      );
    } else {
      return 0;
    }
  };

  const incomesTotal = getTotal(types.income);
  const expensesTotal = getTotal(types.expense);

  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [entriesToShow, setEntriesToShow] = useState(entries);

  useEffect(() => {
    if (categoryFilter != "" && typeFilter != "") {
      setEntriesToShow(
        entries
          .filter((entry) => entry.category == categoryFilter)
          .filter((entry) => entry.type == typeFilter)
      );
    } else if (categoryFilter != "") {
      setEntriesToShow(
        entries.filter((entry) => entry.category == categoryFilter)
      );
    } else if (typeFilter != "") {
      setEntriesToShow(entries.filter((entry) => entry.type == typeFilter));
    } else {
      setEntriesToShow(entries);
    }
  }, [categoryFilter, typeFilter, entries]);

  return {
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
  };
};

export default useHomeLogic;