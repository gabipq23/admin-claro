import { Button, ConfigProvider, DatePicker, Input, Tooltip } from "antd";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { FilterOutlined, UploadOutlined } from "@ant-design/icons";
import { defaultOutlineButtonClass } from "@/utils/buttonStyles";
export function FiltroMonthOffers({ handleSubmit, onSubmit, clearFilters, control, setShowUploadModal }: any) {

    const { RangePicker } = DatePicker;

    return (

        <>

            <div className="flex items-center justify-between">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    onReset={clearFilters}
                    className="flex min-w-[200px] flex-wrap gap-2 mb-4"
                >
                    <div className="flex gap-2 flex-wrap">
                        <ConfigProvider
                            theme={{
                                components: {
                                    Input: {
                                        hoverBorderColor: "#da291c",
                                        activeBorderColor: "#da291c",
                                        activeShadow: "none",
                                    },
                                    Select: {
                                        hoverBorderColor: "#da291c",
                                        activeBorderColor: "#da291c",
                                        activeOutlineColor: "none",
                                    },
                                    DatePicker: {
                                        hoverBorderColor: "#da291c",
                                        activeBorderColor: "#da291c",
                                        colorPrimaryBorder: "#da291c",
                                        colorPrimary: "#da291c",
                                    },
                                },
                            }}
                        >
                            <Controller
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Nome"
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        style={{
                                            width: "115px",
                                        }}
                                        maxLength={13}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="data_from"
                                render={({ field: fieldDe }) => (
                                    <Controller
                                        control={control}
                                        name="data_to"
                                        render={({ field: fieldAte }) => (
                                            <RangePicker
                                                style={{
                                                    width: "215px",
                                                }}
                                                value={
                                                    fieldDe.value && fieldAte.value
                                                        ? [
                                                            fieldDe.value
                                                                ? dayjs(decodeURIComponent(fieldDe.value))
                                                                : null,
                                                            fieldAte.value
                                                                ? dayjs(
                                                                    decodeURIComponent(fieldAte.value)
                                                                )
                                                                : null,
                                                        ]
                                                        : [null, null]
                                                }
                                                format="DD/MM/YYYY"
                                                onChange={(dates) => {
                                                    fieldDe.onChange(
                                                        dates && dates[0]
                                                            ? encodeURIComponent(
                                                                dates[0]
                                                                    .startOf("day")
                                                                    .format("YYYY-MM-DD")
                                                            )
                                                            : null
                                                    );
                                                    fieldAte.onChange(
                                                        dates && dates[1]
                                                            ? encodeURIComponent(
                                                                dates[1].endOf("day").format("YYYY-MM-DD")
                                                            )
                                                            : null
                                                    );
                                                }}
                                                allowClear
                                                placeholder={["de", "até"]}
                                            />
                                        )}
                                    />
                                )}
                            />
                        </ConfigProvider>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Tooltip
                            title="Filtrar"
                            placement="top"
                            styles={{ body: { fontSize: "11px" } }}
                        >
                            <Button
                                className={defaultOutlineButtonClass}
                                style={{
                                    width: "24px",
                                    height: "28px",
                                }}
                                htmlType="submit"
                            >
                                <FilterOutlined />
                            </Button>
                        </Tooltip>

                        <Tooltip
                            title="Limpar filtro"
                            placement="top"
                            styles={{ body: { fontSize: "11px" } }}
                        >
                            <Button
                                className={defaultOutlineButtonClass}
                                style={{ width: "24px", height: "28px" }}
                                onClick={clearFilters}
                            >
                                X
                            </Button>
                        </Tooltip>
                    </div>
                </form>

                <div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorBorder: "#da291c",
                                    colorText: "#da291c",
                                    colorPrimary: "#da291c",

                                },
                            },
                        }}
                    >
                        <Button
                            className={defaultOutlineButtonClass}
                            icon={<UploadOutlined />}
                            onClick={() => setShowUploadModal(true)}
                        >
                            Novo arquivo
                        </Button>
                    </ConfigProvider>
                </div>
            </div></>
    )
}