
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Coffee & Breakfast' | 'Main Plates' | 'Sweets & Pizzas';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
