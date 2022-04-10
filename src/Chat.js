import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import db from "./firebase";
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [ roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
        }
    }, [roomId]);   // dependent on roomId
    
    useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))

    }, []);
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        
        setInput("");
    };
    
    return (
    <div className="chat">
        <div className="chat_header">
            <IconButton>
            <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'} />
            </IconButton>

            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at ...</p>
            </div>

            <div className="chat_headerRight">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="chat_body">            
            <p className={'chat_message ${true && "chat_receiver"}'}>
                <span className="chat_name">Matleza</span>
                Hey Guys
                <span className="chat_timestamp">14:23</span>            
            </p>'
        </div>

        <div className="chat_footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a mesage" type="text" />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
        </div>
    </div>
    );
}

export default Chat