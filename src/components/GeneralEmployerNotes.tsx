import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import CreateNote from "./CreateNote";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Note = {
  id: number;
  author: string;
  lastEdit: string;
  content: string;
};

type EmployerNotesProps = {
  notes: Note[];
};

const GeneralEmployerNotes: React.FC<EmployerNotesProps> = ({ notes }) => {
  return (
    <Card className="min-w-fit">
      <CardHeader className="bg-[#f4f4f5] w-full border border-borders gap-2 items-center">
        <CardTitle className="text-2xl font-bold ">
          General Employer Notes
        </CardTitle>
        <a
          href="#"
          className="text-secondary font-bold text-sm bg-white rounded-xl px-2  py-1 text-center"
        >
          {notes.length} Notes
        </a>
      </CardHeader>

      <CardContent className="max-h-60 flex ">
        <section className="h-full border-borders border-r">
          <div className="overflow-y-scroll overflow-x-hidden max-h-40 scroll-bar p-3  ml-3 w-fit">
            {Array.isArray(notes)
              ? notes.map((note) => (
                  <div key={note.id} className="mb-3 font-normal ">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 font-bold text-sm">
                        {note.author}
                      </p>
                      <p className="text-gray text-sm">{note.lastEdit}</p>
                    </div>
                    <p>{note.content}</p>
                  </div>
                ))
              : null}
          </div>
          <div className="text-secondary font-bold text-sm flex justify-normal items-center border-borders border-t "
            >
            <a className='ml-6 py-6' href="#">View Notes Page</a>
            <ChevronRightIcon className="w-4" />
          </div>
        </section>
        <section className="w-full">
          <CreateNote />
        </section>
      </CardContent>
    </Card>
  );
};

export default GeneralEmployerNotes;
