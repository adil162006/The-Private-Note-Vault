interface NoteCardProps {
  id: string;
  content: string;
  onDelete: (id: string) => void;
}

export default function NoteCard({ id, content, onDelete }: NoteCardProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-3 shadow-sm bg-white">
      <p className="text-gray-800">{content}</p>
      <button
        onClick={() => onDelete(id)}
        className="mt-3 text-red-500 hover:text-red-700 font-medium transition"
      >
        Delete
      </button>
    </div>
  );
}
