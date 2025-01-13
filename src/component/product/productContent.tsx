export default function ProductContent({ name, description }: { name: string; description: string }) {
  return (
    <div key={name}>
      <h3>name : {name}</h3>
      <span>description: {description}</span>
    </div>
  );
}
