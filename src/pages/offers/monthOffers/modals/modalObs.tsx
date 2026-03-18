import { Button, ConfigProvider, Input, Modal } from "antd";
import { useState, useEffect } from "react";
import { MonthOffer, UpdateMonthOfferData } from "@/interfaces/monthOffer";
import { defaultOutlineButtonClass } from "@/utils/buttonStyles";

export function ModalObs({
  showModal,
  setShowModal,
  updateMonthOffer,
  selectedItem,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  updateMonthOffer: (params: {
    id: number;
    data: UpdateMonthOfferData;
  }) => void;
  selectedItem: MonthOffer | null;
}) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setDescription(selectedItem.description || "");
    }
  }, [selectedItem]);

  const handleSave = () => {
    if (!selectedItem) return;

    updateMonthOffer({
      id: selectedItem.id,
      data: { description },
    });

    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setDescription("");
  };
  return (
    <>
      <Modal
        centered
        title={<span style={{ color: "#252525" }}>Descrição</span>}
        open={showModal}
        onCancel={handleClose}
        footer={null}
        width={600}
      >
        <ConfigProvider
          theme={{
            components: {
              Input: {
                hoverBorderColor: "#da291c",
                activeBorderColor: "#da291c",
                activeShadow: "none",
                colorBorder: "#bfbfbf",
                colorTextPlaceholder: "#666666",
              },
              Button: {
                colorBorder: "#da291c",
                colorText: "#da291c",
                colorPrimary: "#da291c",
                colorPrimaryHover: "#883fa2",
              },
            },
          }}
        >
          <div>
            <Input.TextArea
              autoSize={{ minRows: 3, maxRows: 3 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 text-[16px] font-light text-[#353535] w-full"
              placeholder="Adicione aqui uma descrição..."
            />
          </div>
          <div
            className="flex justify-end gap-4 z-10"
            style={{
              position: "sticky",
              bottom: -1,
              left: 0,
              right: 0,
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            <Button
              className={defaultOutlineButtonClass}
              onClick={handleClose}
              style={{
                fontSize: "14px",
              }}
            >
              Cancelar
            </Button>
            <Button
              className={defaultOutlineButtonClass}
              onClick={handleSave}
              style={{
                fontSize: "14px",
              }}
            >
              Salvar
            </Button>
          </div>
        </ConfigProvider>
      </Modal>
    </>
  );
}
