import { categories, types } from "@/constants";
import SelectInput from "../select-input/select-input";
import styles from "./entries-filters.module.css";

export default function EntriesFilters({
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
}) {
  return (
    <div className={styles.filtersContainer}>
      <SelectInput
        label="Filtrar por tipo:"
        id="type-filter"
        items={types}
        extraItem={{ value: "", text: "Todos" }}
        value={typeFilter}
        changeHandler={setTypeFilter}
      />

      <SelectInput
        label="Filtrar por categoria:"
        id="category-filter"
        items={categories}
        extraItem={{ value: "", text: "Todas" }}
        value={categoryFilter}
        changeHandler={setCategoryFilter}
      />
    </div>
  );
}
