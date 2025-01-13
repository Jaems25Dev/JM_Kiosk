'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function ProductContainer({ init }: { init: string }) {
  const category = useSearchParams().get('category') ?? init;
  const [data, setData] = useState<any>();

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:3000/mockApi/getProduct?category=${category}`);
    if (!res.ok) throw Error('error');
    const result = await res.json();
    setData(result);
  }, [category]);

  useEffect(() => {
    if (category) fetchData();
  }, [category, fetchData]);

  return (
    <div>
      <div>Info : {category}</div>
      {data?.map((e: { name: string; description: string }) => {
        return (
          <div key={e.name}>
            <h3>name : {e.name}</h3>
            <span>description: {e.description}</span>
          </div>
        );
      })}
    </div>
  );
}
