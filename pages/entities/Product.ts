export default class Product {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly image: string,
    readonly price: number,
    readonly description?: string,
  ) {}
}
