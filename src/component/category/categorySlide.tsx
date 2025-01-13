/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CategoryContent from './categoryContent';

const changeCategory = (category: string, searchParams: URLSearchParams) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set('category', category);

  return params.toString();
};

export default function CategorySlide({ categorys }: { categorys: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = searchParams.get('category') ?? categorys[0];

  const handleClick = (e: any) => {
    const target = e.target as HTMLElement;

    if (!target.dataset.category) return;
    if (target && target.dataset.category) {
      router.replace(`${pathname}?${changeCategory(target.dataset.category, searchParams)}`); // 선택된 카테고리 상태 업데이트
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
