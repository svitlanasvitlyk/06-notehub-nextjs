
import { Note } from "@/lib/api";
import NoteItem from "../NoteItem/NoteItem";


interface NoteListProps {
  notes: Note[];
}


const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}

export default NoteList;
