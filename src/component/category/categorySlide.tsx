/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useState } from 'react';
import CategoryContent from './categoryContent';

export default function CategorySlide({ categorys }: { categorys: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (e: any) => {
    const target = e.target as HTMLElement;

    if (!target.dataset.category) return;
    if (target && target.dataset.category) {
      setSelected(target.dataset.category); // 선택된 카테고리 상태 업데이트
    }
  };

  return (
    <div onClick={handleClick}>
      {categorys.map((e, idx) => (
        <CategoryContent idx={idx} key={e} title={e} selected={selected === e} />
      ))}
    </div>
  );
}
