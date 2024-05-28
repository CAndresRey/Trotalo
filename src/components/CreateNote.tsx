import { useState, useEffect } from "react";
import Button from "./Button";

const CreateNote = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(500);

  useEffect(() => {
    setCharCount(500 - text.length);
  }, [text]);
  return (
    <div className="w-full px-6 mt-2">
      <label
        htmlFor="employerNotes"
        className="block text-sm font-medium text-[#495057]"
      >
        Enter general notes about employer, these will be simple instructions.
      </label>
      <div className="mt-1">
        <textarea
          id="employerNotes"
          name="employerNotes"
          rows={5}
          onChange={(e) => setText(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-[#6C757D] rounded-md"
          placeholder="Enter employer notes here."
          maxLength={500}
        ></textarea>
      </div>
      <p className="mt-2 text-sm  text-[#6C757D] text-end">
        {charCount} characters remaining.
      </p>
      <div className="w-56 flex gap-4 float-right mt-3">
        <Button id="cancel" theme="secondary">Reset</Button>
        <Button id="save" theme="primary">
          Save Note
        </Button>
      </div>
    </div>
  );
};

export default CreateNote;
