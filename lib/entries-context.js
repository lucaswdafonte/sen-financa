import { createContext } from "react";

const EntriesContext = createContext({
  entries: [],
  setEntries: [],
});

export default EntriesContext;