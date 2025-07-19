type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl shadow-md hover:bg-zinc-700 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{content}</p>
    </div>
  );
}
