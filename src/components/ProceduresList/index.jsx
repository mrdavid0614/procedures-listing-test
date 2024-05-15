import { useProcedures } from "../../context/proceduresContext";

export const ProceduresList = () => {
  const { savedProcedures } = useProcedures();

  return (
    <section className="overflow-y-auto flex flex-col gap-5 sm:gap-3">
      {savedProcedures.map((procedure) => {
        return (
          <article
            key={procedure.id}
            className="py-4 px-[34px] flex flex-wrap bg-white gap-10 md:gap-20
             rounded-[10px]"
          >
            {procedure.fields.map((field, index) => (
              <div key={`${procedure.id}-${field.label}`}>
                <p className="text-base text-[#949494]">
                  {index === 0
                    ? `${field.label} ${`${procedure.id}`.padStart(2, "0")}`
                    : field.label}
                </p>
                <p className="font-semibold text-base">
                  {field.label.includes("RD$") && "RD$ "}
                  {field.value ?? "-"}
                </p>
              </div>
            ))}
          </article>
        );
      })}
    </section>
  );
};
