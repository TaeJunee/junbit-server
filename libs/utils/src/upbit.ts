import axios from 'axios'

export class Upbit {
  baseURL = 'https://api.upbit.com/v1'
  options = { method: 'GET', headers: { accept: 'application/json' } }

  // getAllMarkets(): any {
  //   const response = fetch(
  //     `${this.baseURL}/market/all?isDetails=false`,
  //     this.options,
  //   );
  //   return response.then((res) => res.json());
  // }

  async getMinuteCandle(
    unit: number,
    market: string,
    count = 10,
  ): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseURL}/candles/minutes/${unit}?market=${market}&count=${count}`,
        this.options,
      )

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }

  // async getDayCandle(market: string, count = 5): Promise<any> {
  //   const response = await axios.get(
  //     `${this.baseURL}/candles/days?market=${market}&count=${count}`,
  //     this.options,
  //   );
  //   return response.data;
  // }

  async getTicker(markets: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseURL}/ticker?markets=${markets}`,
        this.options,
      )

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }
}
