import { gql } from 'apollo-boost';

export const profitableBooks = gql`query ProfitableBooksChart {
  final_MostProfitableBooks_View(order_by: {profit: desc_nulls_last}, limit: 5) {
    label: title
    data: profit
  }
}
`