import { defaultOutlineButtonClass, redOutlineButtonClass } from "@/utils/buttonStyles";
import { Button } from "antd";

interface FooterButtonsProps {
  onGeneratePDF: () => void;
  onEdit: () => void;
  onDelete: () => void;
  generatePDFText?: string;
  editText?: string;
  deleteText?: string;
}

export default function FooterButtons({
  onGeneratePDF,
  onEdit,
  onDelete,
  generatePDFText = "Gerar PDF",
  editText = "Editar",
  deleteText = "Deletar pedido",
}: FooterButtonsProps) {
  return (
    <>
      <div className="mt-4 flex gap-4 justify-end">
        <Button onClick={onGeneratePDF} className={defaultOutlineButtonClass}>
          {generatePDFText}
        </Button>
        <Button
          onClick={onEdit}
          className={defaultOutlineButtonClass}

          style={{
            color: "#da291c",
            fontSize: "14px",
          }}
        >
          {editText}
        </Button>
        <Button
          onClick={onDelete}

          className={redOutlineButtonClass}
          style={{
            fontSize: "14px",
          }}
        >
          {deleteText}
        </Button>
      </div>
    </>
  );
}
