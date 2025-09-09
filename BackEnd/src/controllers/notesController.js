export const getAllNotes = (_, res) => {
    res.status(200).json({ message: "get all notes" });
}

export const getNoteById = (req, res) => {
    res.status(200).json({ message: "get notes details" });
}

export const createNote = (req, res) => {
    res.status(201).json({ message: "note created" });
}

export const updateNote = (req, res) => {
    res.status(200).json({ message: "note updated" });
}

export const deleteNote = (req, res) => {
    res.status(200).json({ message: "note deleted" });
}