import ProductContainer from '@/component/product/productContainer';
import CategorySlide from '@/component/category/categorySlide';
import { Suspense } from 'react';

export default async function MenuPage() {
  const { categorys } = await (await fetch('http://localhost:3000/mockApi/getCategory')).json();

  return (
    <>
      <Suspense fallback={<div>Category suspend</div>}>
        <CategorySlide categorys={categorys} />
      </Suspense>
      <Suspense fallback={<div>Product suspend</div>}>
        <ProductContainer init={categorys[0]} />
      </Suspense>
    </>
  );
}
