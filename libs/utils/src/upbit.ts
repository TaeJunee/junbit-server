import axios from 'axios'

export class Upbit {
  BASE_URL = 'https://api.upbit.com/v1'
  options = { method: 'GET', headers: { accept: 'application/json' } }

  async getAllTokens(): Promise<any> {
    const response = await axios.get(
      `${this.BASE_URL}/market/all?isDetails=false`,
      this.options,
    )
    return response.data
  }

  async getMinuteCandle(
    unit: number,
    market: string,
    to: string,
    count = 1,
  ): Promise<any> {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/candles/minutes/${unit}?market=${market}&to=${to}&count=${count}`,
        this.options,
      )

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }

  // async getDayCandle(market: string, count = 1): Promise<any> {
  //   const response = await axios.get(
  //     `${this.BASE_URL}/candles/days?market=${market}&count=${count}`,
  //     this.options,
  //   );
  //   return response.data;
  // }

  async getTicker(markets: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/ticker?markets=${markets}`,
        this.options,
      )

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }
}
