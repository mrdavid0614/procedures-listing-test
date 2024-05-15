import { useState } from "react";
import {
  EmptyState,
  AddProceduresModal,
  ProceduresList,
  Button,
} from "./components";
import { useProcedures } from "./context/proceduresContext";
import pencil from "./assets/pencil.svg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { savedProcedures } = useProcedures();

  const toggleModalVisibility = () => setIsModalOpen((prevValue) => !prevValue);

  return (
    <main className="h-screen py-20 px-20 sm:p-20 flex flex-col gap-[34px]">
      <h1 className="text-2xl text-center sm:text-left">Procedimientos</h1>
      {savedProcedures.length ? (
        <>
          <ProceduresList />
          <Button
            text="Editar procedimientos"
            onClick={toggleModalVisibility}
            icon={<img src={pencil} />}
            className="self-start"
          />
        </>
      ) : (
        <EmptyState onAddNew={toggleModalVisibility} />
      )}

      <AddProceduresModal
        isModalOpen={isModalOpen}
        onClose={toggleModalVisibility}
      />
    </main>
  );
}

export default App;
