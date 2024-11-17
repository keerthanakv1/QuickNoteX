// import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import NoteModal from '../components/NoteModal'
// import axios from 'axios'
// import NoteCard from '../components/NoteCard'
// import {toast} from 'react-toastify';

// const Home = () => {
//     const [isModalOpen, setModalOpen] = useState(false)
//     const [filteredNotes, setFilteredNote] = useState(false)
//     const [notes, setNotes] = useState([])
//     const [currentNote, setCurrentNote] = useState(null)
//     const [query, setQuery] = useState("")

//     useEffect(() => {
//         fetchNotes()
//     }, [])

//     useEffect(() => {
//         setFilteredNote(
//             notes.filter((note) => 
//                 note.title.toLowerCase().includes(query.toLowerCase()) || 
//                 note.description.toLowerCase().includes(query.toLowerCase())
//             )
//         )
//     }, [query, notes])

//     const fetchNotes = async() => {
//         try{
//             const {data} = await axios.get("http://localhost:5000/api/note", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             })
//             setNotes(data.notes)
//         }catch(error){
//             console.log(error)
//         }
//     }

//     const closeModal = () => {
//         setModalOpen(false)
//     }

//     const onEdit = (note) => {
//         setCurrentNote(note)
//         setModalOpen(true)
//     }

//     const onAdd = () => {
//         setCurrentNote(null)
//         setModalOpen(true)
//     }

//     const addNote = async (title, description) => {
//         try{
//             const response = await axios.post(
//                 "http://localhost:5000/api/note/add",
//                 { title, description }, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`
//                     }
//                 }
//             );
//             if(response.data.success){
//                 fetchNotes()
//                 closeModal()
//             }
//         }catch (error) {
//             console.log(error)
//         }
//     }

//     const deleteNote = async (id) => {
//         try{
//             const response = await axios.delete(
//                 `http://localhost:5000/api/note/${id}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`
//                     }
//                 }
//             );
//             if(response.data.success){
//                 fetchNotes()
//                 toast.success("note deleted")
//             }
//         }catch (error) {
//             console.log(error)
//         }
//     }

//     const editNote = async (id, title, description) => {
//         try{
//             const response = await axios.put(
//                 `http://localhost:5000/api/note/${id}`,
//                 { title, description }, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`
//                     }
//                 }
//             );
//             if(response.data.success){
//                 fetchNotes()
//             closeModal()
//             }
//         }catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className='bg-gray-100 min-h-screen'>
//             <Navbar setQuery={setQuery}/>

//             <div className = "px-8 pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 { filteredNotes.length > 0 ? filteredNotes.map((note) => (
//                     <NoteCard key={note._id} note = {note} onEdit = {onEdit} deleteNote = {deleteNote}
//                     />
//                 )) : <p>No notes</p>}
//             </div>

//             <button 
//             onClick={onAdd}
//             className = 'fixed right-4 bottom-4 text-2x1 bg-teal-500 text-white font-bold p-4 rounded-full'>
//                 +
//             </button>
//             {isModalOpen && <NoteModal 
//             closeModal = {closeModal}
//             addNote = {addNote} 
//             currentNote = {currentNote}
//             editNote = {editNote}
//             />}
//         </div>
//     )
// }

// export default Home;










import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NoteModal from '../components/NoteModal';
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import { toast } from 'react-toastify';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filteredNotes, setFilteredNote] = useState([]);
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [query, setQuery] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        setFilteredNote(
            notes.filter(
                (note) =>
                    note.title.toLowerCase().includes(query.toLowerCase()) ||
                    note.description.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, notes]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const fetchNotes = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/note', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setNotes(data.notes);
        } catch (error) {
            console.log(error);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const onEdit = (note) => {
        setCurrentNote(note);
        setModalOpen(true);
    };

    const onAdd = () => {
        setCurrentNote(null);
        setModalOpen(true);
    };

    const addNote = async (title, description) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/note/add',
                { title, description },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (response.data.success) {
                fetchNotes();
                closeModal();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/note/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                fetchNotes();
                toast.success('Note deleted successfully');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editNote = async (id, title, description) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/note/${id}`,
                { title, description },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (response.data.success) {
                fetchNotes();
                closeModal();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <Navbar setQuery={setQuery} />

            {/* Toggle Theme Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-teal-500 text-white rounded shadow"
                >
                    Switch Appearance
                </button>
            </div>

            <div className="px-8 pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <NoteCard key={note._id} note={note} onEdit={onEdit} deleteNote={deleteNote} />
                    ))
                ) : (
                    <p>No notes yet</p>
                )}
            </div>

            <button
                onClick={onAdd}
                className={`fixed right-4 bottom-4 text-2xl font-bold p-4 rounded-full ${
                    theme === 'dark' ? 'bg-teal-500 text-white' : 'bg-teal-300 text-gray-900'
                }`}
            >
                +
            </button>

            {isModalOpen && (
                <NoteModal
                    closeModal={closeModal}
                    addNote={addNote}
                    currentNote={currentNote}
                    editNote={editNote}
                    isDarkMode = {theme == 'dark'}
                />
            )}
        </div>
    );
};

export default Home;
