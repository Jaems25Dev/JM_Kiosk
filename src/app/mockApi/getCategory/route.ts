// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  return new Response(JSON.stringify({ categorys: ['음료', '음식'] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}