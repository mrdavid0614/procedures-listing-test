import { useState } from "react";
import { Button, Modal, ProcedureFields, Toast } from "..";
import { useProcedures } from "../../context/proceduresContext";
import add from "../../assets/add.svg";
import close from "../../assets/close.svg";
import check from "../../assets/check.svg";
import trash from "../../assets/trash.svg";

const initialProcedureFields = [
  {
    label: "Procedimiento",
    type: "text",
    placeholder: "Ej: 4563523",
    value: undefined,
  },
  {
    label: "Código",
    type: "text",
    placeholder: "Ej: 4563523",
    value: undefined,
  },
  {
    label: "Reclamado RD$",
    type: "number",
    placeholder: "Ej: 4563523",
    value: undefined,
  },
  {
    label: "Diferencia RD$",
    type: "number",
    placeholder: "Ej: 4563523",
    value: undefined,
  },
  {
    label: "Autorizado RD$",
    type: "number",
    placeholder: "Ej: 4563523",
    value: undefined,
  },
];

const initialState = [
  { id: 1, fields: JSON.parse(JSON.stringify(initialProcedureFields)) },
];

export const AddProceduresModal = ({ isModalOpen, onClose }) => {
  const { savedProcedures, setSavedProcedures } = useProcedures();
  const [addedProcedures, setAddedProcedures] = useState(
    savedProcedures.length ? savedProcedures : initialState
  );
  const [showToast, setShowToast] = useState(false);

  const handleAddProcedureRow = () => {
    setAddedProcedures((prevAddedProcedures) => [
      ...prevAddedProcedures,
      {
        id: prevAddedProcedures.at(-1).id + 1,
        fields: JSON.parse(JSON.stringify(initialProcedureFields)),
      },
    ]);
  };

  const handleDeleteProcedureRow = (id) => {
    setAddedProcedures((prevAddedProcedures) => {
      const newAddedProcedures = prevAddedProcedures.filter(
        (procedure) => id !== procedure.id
      );

      return newAddedProcedures;
    });
  };

  const handleModalClose = () => {
    onClose();
  };

  const handleUpdateFieldValue = (id, label, value) => {
    setAddedProcedures((prevAddedProcedures) => {
      const procedureToUpdate = prevAddedProcedures.find(
        (procedure) => id === procedure.id
      );

      const procedureFieldToUpdate = procedureToUpdate.fields.find(
        (field) => field.label === label
      );

      procedureFieldToUpdate.value = value;

      return prevAddedProcedures;
    });
  };

  const handleSaveChanges = () => {
    setSavedProcedures(addedProcedures);
    setShowToast(true);
    onClose();

    setTimeout(() => {
      setShowToast(false);
    }, 1200);
  };

  return (
    <>
      <Modal open={isModalOpen}>
        <img
          src={close}
          width={14}
          height={14}
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleModalClose}
        />
        <section className="py-14 px-10 flex flex-col gap-10">
          <section className="flex flex-wrap">
            <h2 className="text-3xl text-[#1E2469]">Procedimientos</h2>
            <Button
              text="Añadir procedimiento"
              variant="terciary"
              onClick={handleAddProcedureRow}
              icon={<img src={add} />}
            />
          </section>

          <section className="flex flex-col gap-8 xl:gap-10">
            {addedProcedures.map((procedure, index) => (
              <article
                className={`flex items-center gap-3 pb-8 border-b-[1px] border-b-gray-300 xl:border-b-0 xl:pb-0`}
                key={`procedure-${procedure.id}`}
              >
                {!(index === 0 && addedProcedures.length === 1) && (
                  <img
                    src={trash}
                    className="cursor-pointer"
                    onClick={() => handleDeleteProcedureRow(procedure.id)}
                  />
                )}

                <ProcedureFields
                  fields={procedure.fields}
                  procedureId={procedure.id}
                  onFieldValueChange={handleUpdateFieldValue}
                  key={`procedure-${procedure.id}`}
                />
              </article>
            ))}
          </section>

          <section className="flex justify-end gap-4">
            <Button
              text="Cancelar"
              variant="secondary"
              onClick={handleModalClose}
            />
            <Button
              text="Guardar cambios"
              icon={<img src={check} />}
              onClick={handleSaveChanges}
            />
          </section>
        </section>
      </Modal>
      <Toast text="Procedimiento agregado" isShowing={showToast} />
    </>
  );
};
