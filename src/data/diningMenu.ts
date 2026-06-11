import type {DiningItem} from '../types';
import {images} from './assets';

export const DINING_MENU: DiningItem[] = [
  {
    id: 'classic-resort-breakfast',
    title: 'Classic Resort Breakfast',
    category: 'Breakfast',
    price: 18,
    description:
      'Eggs, toast, roasted potatoes, seasonal fruit, and a fresh morning side.',
    image: images.dishes.classicBreakfast,
  },
  {
    id: 'golden-pancake-stack',
    title: 'Golden Pancake Stack',
    category: 'Sweet',
    price: 14,
    description:
      'Warm pancakes with maple syrup, berries, and soft whipped cream.',
    image: images.dishes.chocolateCake,
  },
  {
    id: 'fresh-fruit-bowl',
    title: 'Fresh Fruit Bowl',
    category: 'Healthy',
    price: 11,
    description:
      'A bright bowl of seasonal fruit with mint, citrus, and a light honey touch.',
    image: images.dishes.fruitCreamCup,
  },
  {
    id: 'avocado-morning-toast',
    title: 'Avocado Morning Toast',
    category: 'Healthy',
    price: 13,
    description:
      'Crisp toast with avocado, herbs, lemon, and a soft breakfast garnish.',
    image: images.dishes.coastalSalad,
  },
  {
    id: 'coastal-croissant-plate',
    title: 'Coastal Croissant Plate',
    category: 'Breakfast',
    price: 12,
    description:
      'Buttery croissants with jam, seasonal fruit, and a light morning garnish.',
    image: images.dishes.morningCoffee,
  },
  {
    id: '3sixty-classic-burger',
    title: '3Sixty Classic Burger',
    category: 'Entree',
    price: 19,
    description:
      'A hearty resort-style burger with a toasted bun, crisp toppings, savoury sauce, and a side inspired by lounge dining.',
    image: images.dishes.grillBurger,
  },
  {
    id: 'atlantic-fish-and-chips',
    title: 'Atlantic Fish & Chips',
    category: 'Entree',
    price: 21,
    description:
      'Crispy battered fish served with golden fries, light tartar sauce, and a fresh coastal-style garnish.',
    image: images.dishes.fishAndChips,
  },
  {
    id: 'harbour-chicken-plate',
    title: 'Harbour Chicken Plate',
    category: 'Entree',
    price: 23,
    description:
      'Tender grilled chicken served with seasonal vegetables, roasted potatoes, and a warm savoury finish.',
    image: images.dishes.harbourChicken,
  },
  {
    id: '3sixty-appetizer-board',
    title: '3Sixty Appetizer Board',
    category: 'Appetizer',
    price: 18,
    description:
      'A shareable starter plate with crispy bites, warm dips, and lounge-style flavours for the table.',
    image: images.dishes.appetizerBoard,
  },
  {
    id: 'coastal-caesar-salad',
    title: 'Coastal Caesar Salad',
    category: 'Salad',
    price: 14,
    description:
      'Crisp romaine, creamy dressing, parmesan, croutons, and a fresh finish for a lighter resort meal.',
    image: images.dishes.coastalSalad,
  },
  {
    id: 'buffet-weekend-plate',
    title: 'Buffet Weekend Plate',
    category: 'Buffet',
    price: 28,
    description:
      'A generous buffet-inspired selection with rotating weekend favourites, warm sides, and comfort-style dishes.',
    image: images.dishes.weekendPlate,
  },
  {
    id: 'friday-buffet-special',
    title: 'Friday Buffet Special',
    category: 'Buffet',
    price: 31,
    description:
      "A Friday evening buffet option inspired by 3Sixty's weekend specials, with varied mains, sides, and dessert choices.",
    image: images.dishes.fridayFeast,
  },
  {
    id: 'saturday-buffet-special',
    title: 'Saturday Buffet Special',
    category: 'Buffet',
    price: 34,
    description:
      'A Saturday dining selection with a fuller buffet-style spread, ideal for guests planning a relaxed evening meal.',
    image: images.dishes.saturdayFeast,
  },
  {
    id: 'celtic-junction-comfort-plate',
    title: 'Celtic Junction Comfort Plate',
    category: 'Sydney Dining',
    price: 22,
    description:
      "A warm and inviting plate inspired by Celtic Junction's hospitality-focused restaurant atmosphere in Sydney.",
    image: images.dishes.celticComfort,
  },
  {
    id: 'celtic-junction-share-bites',
    title: 'Celtic Junction Share Bites',
    category: 'Appetizer',
    price: 16,
    description:
      'A casual sharing option with savoury bites, dipping sauce, and a relaxed restaurant-style presentation.',
    image: images.dishes.celticShareBites,
  },
  {
    id: 'may-garden-signature-bowl',
    title: 'May Garden Signature Bowl',
    category: 'Asian Dining',
    price: 20,
    description:
      'A flavourful bowl inspired by May Garden Restaurant, with rice, vegetables, savoury sauce, and a balanced main topping.',
    image: images.dishes.gardenSignatureBowl,
  },
  {
    id: 'may-garden-noodle-plate',
    title: 'May Garden Noodle Plate',
    category: 'Asian Dining',
    price: 18,
    description:
      'Warm noodles tossed with vegetables, rich sauce, and an inviting restaurant-style flavour profile.',
    image: images.dishes.gardenNoodlePlate,
  },
  {
    id: 'lounge-dessert-trio',
    title: 'Lounge Dessert Trio',
    category: 'Dessert',
    price: 13,
    description:
      'A small dessert selection with sweet bites, soft textures, and a polished finish for after dinner.',
    image: images.dishes.dessertTrio,
  },
  {
    id: 'warm-chocolate-cake',
    title: 'Warm Chocolate Cake',
    category: 'Dessert',
    price: 12,
    description:
      'A rich chocolate dessert served warm with a soft center and a sweet evening-style garnish.',
    image: images.dishes.chocolateCake,
  },
  {
    id: 'fresh-fruit-and-cream-cup',
    title: 'Fresh Fruit & Cream Cup',
    category: 'Dessert',
    price: 10,
    description:
      'Seasonal fruit served with light cream and a fresh, simple finish.',
    image: images.dishes.fruitCreamCup,
  },
  {
    id: 'morning-coffee-set',
    title: 'Morning Coffee Set',
    category: 'Drinks',
    price: 8,
    description:
      'Fresh coffee served with your choice of milk and a small sweet bite for a simple start.',
    image: images.dishes.morningCoffee,
  },
  {
    id: 'coastal-iced-tea',
    title: 'Coastal Iced Tea',
    category: 'Drinks',
    price: 7,
    description:
      'A chilled tea drink with a clean citrus note, ideal for a light refreshment during the visit.',
    image: images.dishes.coastalIcedTea,
  },
  {
    id: 'sparkling-citrus-mocktail',
    title: 'Sparkling Citrus Mocktail',
    category: 'Drinks',
    price: 9,
    description:
      'A bright non-alcoholic citrus drink with sparkling bubbles and a fresh resort-style presentation.',
    image: images.dishes.citrusMocktail,
  },
  {
    id: 'lounge-lemonade',
    title: 'Lounge Lemonade',
    category: 'Drinks',
    price: 7,
    description:
      'A cool lemonade with a balanced sweet and tart flavour, made for relaxed lounge moments.',
    image: images.dishes.loungeLemonade,
  },
];

export function getDiningItemById(id: string): DiningItem | undefined {
  return DINING_MENU.find(item => item.id === id);
}
