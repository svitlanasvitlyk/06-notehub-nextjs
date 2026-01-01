/*import { Note } from "@/lib/api";*/

import type { Note } from "@/types/note";

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

