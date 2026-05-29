export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  collection: string;
  colors: string[];
  sizes: string[];
  material: string;
  isNew?: boolean;
  isHit?: boolean;
  description: string;
}

export const COLLECTIONS = [
  'Dragon Basics',
  'Sport Motion',
  'Season Shift',
  'Summer Breeze',
  'Warm Stone',
  'Metal Edition',
];

export const COLORS = [
  { name: 'Чёрный', value: 'black', hex: '#111111' },
  { name: 'Белый', value: 'white', hex: '#EEEEEE' },
  { name: 'Серый', value: 'gray', hex: '#666666' },
  { name: 'Синий', value: 'blue', hex: '#1A3A6B' },
  { name: 'Красный', value: 'red', hex: '#CC1111' },
  { name: 'Зелёный', value: 'green', hex: '#1A5C2A' },
];

export const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];
export const MATERIALS = ['cotton', 'fleece', 'blend'];

const HOODIE_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/41b5f60c-4cae-44e2-8eae-102730354611.jpg';
const TEE_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/dc9c47a3-621c-43da-a6b6-58ffb306b7ab.jpg';
const PANTS_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/7a80b8a8-cf01-47e8-8db8-70df05583181.jpg';

export const products: Product[] = [
  { id: 1, name: 'Dragon Scales Hoodie', price: 6990, image: HOODIE_IMG, collection: 'Dragon Basics', colors: ['black', 'gray'], sizes: ['S','M','L','XL','XXL'], material: 'fleece', isHit: true, description: 'Худи с фактурой чешуи дракона. Плотный флис 340г/м², вышивка на груди.' },
  { id: 2, name: 'Flame Logo Tee', price: 3490, image: TEE_IMG, collection: 'Dragon Basics', colors: ['black', 'white'], sizes: ['S','M','L','XL'], material: 'cotton', isNew: true, description: 'Оверсайз-футболка с огненным принтом. Хлопок 200г/м², прямой крой.' },
  { id: 3, name: 'Dragon Joggers', price: 5490, image: PANTS_IMG, collection: 'Sport Motion', colors: ['black', 'gray'], sizes: ['S','M','L','XL','XXL','3XL'], material: 'blend', description: 'Джоггеры с манжетами. Смесовая ткань, боковые карманы на молнии.' },
  { id: 4, name: 'Scale Zip Hoodie', price: 7990, image: HOODIE_IMG, collection: 'Metal Edition', colors: ['gray', 'black'], sizes: ['M','L','XL'], material: 'fleece', isNew: true, description: 'Зип-худи с металлической фурнитурой. Лимитированная серия.' },
  { id: 5, name: 'Sport Motion Tee', price: 2990, image: TEE_IMG, collection: 'Sport Motion', colors: ['black', 'blue', 'red'], sizes: ['S','M','L','XL','XXL'], material: 'cotton', description: 'Спортивная футболка из технического хлопка. Влагоотводящая обработка.' },
  { id: 6, name: 'Season Shift Hoodie', price: 6490, image: HOODIE_IMG, collection: 'Season Shift', colors: ['blue', 'green', 'black'], sizes: ['S','M','L','XL'], material: 'fleece', description: 'Демисезонное худи. Двойной слой в области плеч, капюшон на шнурке.' },
  { id: 7, name: 'Summer Breeze Tee', price: 2490, image: TEE_IMG, collection: 'Summer Breeze', colors: ['white', 'gray', 'green'], sizes: ['S','M','L'], material: 'cotton', isNew: true, description: 'Лёгкая летняя футболка. Хлопок 160г/м², свободный крой.' },
  { id: 8, name: 'Warm Stone Sweatshirt', price: 5990, image: HOODIE_IMG, collection: 'Warm Stone', colors: ['gray', 'white'], sizes: ['S','M','L','XL','XXL'], material: 'blend', isHit: true, description: 'Свитшот с нагрудным карманом. Приятная к телу смесовая ткань.' },
  { id: 9, name: 'Metal Cargo Pants', price: 8490, image: PANTS_IMG, collection: 'Metal Edition', colors: ['black', 'gray'], sizes: ['M','L','XL','XXL'], material: 'blend', description: 'Карго-брюки с металлическими заклёпками. 8 карманов, стрейч-книт.' },
  { id: 10, name: 'Dragon Basics Tee Pack', price: 4990, image: TEE_IMG, collection: 'Dragon Basics', colors: ['black', 'white', 'gray'], sizes: ['S','M','L','XL','XXL'], material: 'cotton', isHit: true, description: 'Набор из 2 базовых футболок. Классический крой, плотный хлопок.' },
  { id: 11, name: 'Sport Jogger Short', price: 3990, image: PANTS_IMG, collection: 'Sport Motion', colors: ['black', 'blue'], sizes: ['S','M','L','XL'], material: 'cotton', description: 'Шорты-джоггеры. Технический хлопок, эластичный пояс, карман на молнии.' },
  { id: 12, name: 'Season Shift Parka', price: 12990, image: HOODIE_IMG, collection: 'Season Shift', colors: ['black', 'green'], sizes: ['S','M','L','XL'], material: 'blend', isNew: true, description: 'Парка на осень-зиму. Капюшон с мехом, внутренние карманы, водоотталкивающая пропитка.' },
];

export default products;
