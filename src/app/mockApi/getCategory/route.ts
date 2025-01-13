// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  return new Response(JSON.stringify({ categorys: ['breakfast', 'lunch', 'dinner'] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
