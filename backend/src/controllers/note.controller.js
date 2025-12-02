import Note from "../models/Note.js";



export const getNotes = async (req,res) =>{
    try {
        const notes = await Note.find({user: req.user.id})
        res.status(200).json(notes);        // 200 OK
    } catch (error) {
         console.error(error);
    res.status(500).json({ message: "Server error" });
    }

}

export const createNote = async(req,res) =>{
    const {content}=req.body;
     if (!content) {
     return res.status(400).json({ message: "Note content is required" });
     }

    try {
         const note = await Note.create({
      user: req.user,   
      content,
    });

    res.status(201).json(note); // 201 Created
    } catch (error) {
            console.error(error);
    res.status(500).json({ message: "Server error" });

    }
}


export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Ensure the logged-in user owns this note
    if (note.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await note.remove();

    res.status(200).json({ message: "Note removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
