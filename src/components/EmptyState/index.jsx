import { Button } from "../Button";
import emptyStateSvg from "../../assets/empty-state.svg";
import pencil from "../../assets/pencil.svg";

export const EmptyState = ({ onAddNew }) => (
  <section className="flex flex-col flex-1 justify-center items-center gap-5">
    <img
      src={emptyStateSvg}
      alt="Empty state logo"
      role="presentation"
      width={134}
      height={134}
    />
    <p>No hay datos que mostrar</p>
    <Button
      text="Editar procedimientos"
      onClick={onAddNew}
      icon={<img src={pencil} />}
    />
  </section>
);
