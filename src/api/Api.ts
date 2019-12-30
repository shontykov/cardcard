import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL || "";

export class Api {
  card = new CardController();
}

export interface OrderRequest {
  fio?: string;
  phoneNumber?: string;
}

export class CardController {
  order(request: OrderRequest) {
    const config: any = {};
    config.headers = config.headers || {};
    config.headers = {
      "x-ibm-client-id": "c274fb89-0d53-4304-95e9-130b267cd326"
    };
    config.baseURL = baseURL;

    const date = new Date();

    const callTimeString =
      (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
      ":" +
      date.getMinutes();

    const dateString =
      (date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()) +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear();

    const data = {
      system: "EXTERNALSITE",
      requestId: "c274fb89-0d53-4304-95e9-130b267cd326",
      responseId: "c274fb89-0d53-4304-95e9-130b267cd326",
      route: "DeltaM",
      object: "ClaimAddRequest",
      timestamp: "1453526556",
      type: "REQUEST",
      attributes: {
        data: {
          type: "SMARTCALL",
          systemId: "c274fb89-0d53-4304-95e9-130b267cd326",
          name: request.fio, //---------------------FIO
          phone: request.phoneNumber, //------------PhoneNumber
          iinBin: null,
          organizationName: null,
          email: null,
          callTime: callTimeString, //--------------CallTime
          date: dateString, //----------------------DateTime
          productService: {
            productName: "#картакарта",
            productCode: "0.300.1400.10",
            productDescription: "Кредитная карта - рассрочка #картакарта"
          }
        }
      }
    };

    return axios
      .post(`/protected/callcenter/order`, data, config)
      .then(r => r.data);
  }
}

export default new Api();
