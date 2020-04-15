import { gql } from 'apollo-boost';

export const revenueVsExpenses = gql`query RevenueExpensesChart {
    final_ProfitOverExpenses_View {
      data_x: sales
      data_y: expidentures
    }
  }
  `