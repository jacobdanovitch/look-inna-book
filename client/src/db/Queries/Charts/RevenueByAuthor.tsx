import { gql } from 'apollo-boost';

export const revByAuth = gql`query RevenueByAuthorChart {
  final_RevenueByAuthor_View(order_by: {revenue: desc_nulls_last}, limit: 10) {
    label: fullname
    data: revenue
  }
}
`