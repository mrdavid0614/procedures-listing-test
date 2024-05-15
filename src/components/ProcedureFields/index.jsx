import { Input } from "../Input";

export const ProcedureFields = ({
  fields,
  procedureId,
  onFieldValueChange,
}) => (
  <section className="flex flex-wrap flex-shrink gap-6">
    {fields.map((field, index) => (
      <Input
        label={
          `${
            index === 0
              ? `${field.label} ${`${procedureId}`.padStart(2, "0")}`
              : field.label
          }` || ""
        }
        value={field.value}
        type={field.type || "text"}
        placeholder={field.placeholder}
        key={`${procedureId}-${field.label}`}
        onChange={(e) =>
          onFieldValueChange(
            procedureId,
            field.label,
            field.type === "number" ? +e.target.value : e.target.value
          )
        }
      />
    ))}
  </section>
);
