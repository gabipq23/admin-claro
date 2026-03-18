import { apiPurchase } from "@/configs/api";
import { OrderBandaLargaPFResponse } from "@/interfaces/bandaLargaPF";

export class BandaLargaService {
  async allBandaLargaFiltered({
    page,
    per_page,
    data_to,
    data_from,
    status,
    availability,
    cpf,
    cnpj,
    phone,
    after_sales_status,
    order,
    sort,
    order_number,
  }: {
    page?: string | number;
    per_page?: string | number;
    data_to?: string;
    data_from?: string;
    status?: string;
    availability?: string;
    cpf?: string;
    cnpj?: string;
    phone?: string;
    after_sales_status?: string;
    order?: string;
    sort?: string;
    order_number?: string;
  }): Promise<OrderBandaLargaPFResponse> {
    const res = await apiPurchase.get(`/claro/orders`, {
      params: {
        page,
        per_page,
        data_to,
        data_from,
        status,
        availability,
        cpf,
        cnpj,
        phone,
        after_sales_status,
        order,
        sort,
        order_number,
      },
    });

    return res.data;
  }

  async updateBandaLargaOrderInfo(id: number, data: any): Promise<any> {
    const response = await apiPurchase.put(`/claro/orders/${id}`, data);
    return response.data;
  }
  async removeBandaLargaOrder(id: number) {
    await apiPurchase.delete(`/claro/orders/${id}`);
  }

  async changeBandaLargaOrderStatus(id: number, data: { status: string }) {
    await apiPurchase.patch(`/claro/orders/${id}/status`, data);
  }
}
