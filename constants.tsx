
import { MenuItem } from './types';

export const COLORS = {
  gold: '#C5A059',
  darkGreen: '#1B2B24',
  cream: '#FDFBF7',
};

export const MENU_ITEMS: MenuItem[] = [
  // Coffee & Breakfast
  { id: '1', name: 'Signature Black Iris Latte', price: 35, description: 'Double espresso with steamed velvet milk and gold flakes.', category: 'Coffee & Breakfast' },
  { id: '2', name: 'Moroccan Spiced Coffee', price: 25, description: 'Traditional blend with cinnamon, ginger, and cardamom.', category: 'Coffee & Breakfast' },
  { id: '3', name: 'Belgian Waffles', price: 45, description: 'Freshly baked with seasonal fruits and organic honey.', category: 'Coffee & Breakfast' },
  { id: '4', name: 'Avocado Sourdough', price: 55, description: 'Crushed avocado, poached egg, and chili flakes.', category: 'Coffee & Breakfast' },
  
  // Main Plates
  { id: '5', name: 'Truffle Beef Burger', price: 65, description: 'Aged beef patty, black truffle mayo, and fontina cheese.', category: 'Main Plates' },
  { id: '6', name: 'Chicken Pesto Panini', price: 45, description: 'Grilled chicken, sun-dried tomatoes, and homemade pesto.', category: 'Main Plates' },
  { id: '7', name: 'Crispy Tacos Trio', price: 55, description: 'Slow-cooked lamb, pickled onions, and lime crema.', category: 'Main Plates' },
  { id: '8', name: 'Quinoa Power Salad', price: 50, description: 'Roasted veggies, feta, and lemon-tahini dressing.', category: 'Main Plates' },

  // Sweets & Pizzas
  { id: '9', name: 'Pizza Margherita Royale', price: 60, description: 'Buffalo mozzarella, fresh basil, and extra virgin olive oil.', category: 'Sweets & Pizzas' },
  { id: '10', name: 'Pizza Bresaola', price: 85, description: 'Air-dried beef, arugula, and parmesan shavings.', category: 'Sweets & Pizzas' },
  { id: '11', name: 'Nutella & Almond Crêpe', price: 40, description: 'Topped with toasted Moroccan almonds.', category: 'Sweets & Pizzas' },
  { id: '12', name: 'Chef\'s Cheesecake', price: 38, description: 'Burnt San Sebastian style with berry coulis.', category: 'Sweets & Pizzas' },
];
