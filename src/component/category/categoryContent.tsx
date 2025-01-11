export default function CategoryContent({ title, selected, idx }: { title: string; selected: boolean; idx: number }) {
  return (
    <div
      role="button"
      tabIndex={idx}
      className={`p-4 text-center rounded-md cursor-pointer transition hover:bg-blue-200 ${
        selected ? 'bg-blue-500 text-white font-bold' : 'bg-gray-100 text-gray-800'
      }`}
      data-category={title}>
      {title}
    </div>
  );
}
