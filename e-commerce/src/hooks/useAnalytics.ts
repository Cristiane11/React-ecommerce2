import { logEvent } from 'firebase/analytics';
import { analytics } from '../lib/firebase/firebase';

// Custom hook for Firebase Analytics
export const useAnalytics = () => {
  // Track page views
  const trackPageView = (pageName: string) => {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  };

  // Track product views
  const trackProductView = (productId: number, productName: string, category: string, price: number) => {
    logEvent(analytics, 'view_item', {
      currency: 'USD',
      value: price,
      items: [{
        item_id: productId.toString(),
        item_name: productName,
        item_category: category,
        price: price,
        quantity: 1
      }]
    });
  };

  // Track add to cart (for future cart functionality)
  const trackAddToCart = (productId: number, productName: string, category: string, price: number) => {
    logEvent(analytics, 'add_to_cart', {
      currency: 'USD',
      value: price,
      items: [{
        item_id: productId.toString(),
        item_name: productName,
        item_category: category,
        price: price,
        quantity: 1
      }]
    });
  };

  // Track purchases (for future checkout functionality)
  const trackPurchase = (transactionId: string, products: Array<{id: number, name: string, category: string, price: number, quantity: number}>, totalValue: number) => {
    logEvent(analytics, 'purchase', {
      transaction_id: transactionId,
      currency: 'USD',
      value: totalValue,
      items: products.map(product => ({
        item_id: product.id.toString(),
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity
      }))
    });
  };

  // Track search events
  const trackSearch = (searchTerm: string) => {
    logEvent(analytics, 'search', {
      search_term: searchTerm
    });
  };

  return {
    trackPageView,
    trackProductView,
    trackAddToCart,
    trackPurchase,
    trackSearch
  };
};