import { navigateTo } from "#app";

export const gotoProduct = (id: number) => {
  navigateTo({ name: 'viewproduct-id', params: { id: id } });
}

export const { format: formatNumber } = Intl.NumberFormat('th-TH', {
  notation: "standard",
  maximumFractionDigits: 2
})
