import { Note } from "@/lib/api";

interface NoteItemProps{
  item: Note;
}


const NoteItem = ({ item }: NoteItemProps) => {
  return (
    <li>
      <p>{item.title}</p>
    </li>
  );
}

export default NoteItem;

