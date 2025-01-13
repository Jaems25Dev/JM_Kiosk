// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category'); // 쿼리 파라미터에서 category 값 받기

  // 예시 메뉴 데이터
  const menuItems: Record<string, any> = {
    breakfast: [
      { name: 'Pancakes', description: 'Fluffy pancakes with syrup' },
      { name: 'Eggs & Bacon', description: 'Classic breakfast with eggs and bacon' },
    ],
    lunch: [
      { name: 'Grilled Chicken Sandwich', description: 'Chicken with lettuce, tomato, and mayo' },
      { name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing' },
    ],
    dinner: [
      { name: 'Steak', description: 'Grilled to perfection with mashed potatoes' },
      { name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce' },
    ],
  };

  // category 파라미터에 맞는 메뉴 반환
  if (category && menuItems[category]) {
    return new Response(JSON.stringify(menuItems[category]), { status: 200 });
  }
  return new Response(JSON.stringify({ error: 'Invalid category' }), { status: 400 });
}
