const mapping: Record<string, string> = {
  marketplaces: 'marketplace',
  products: 'product',
  purchases: 'purchase',
  reservations: 'reservation',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
