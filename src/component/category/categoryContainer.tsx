import CategorySlide from './categorySlide';

export default async function CategoryContainer() {
  const { categorys } = await (await fetch('http://localhost:3000/mockApi/getCategory')).json();

  return <CategorySlide categorys={categorys} />;
}
