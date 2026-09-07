import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useParams } from 'react';
import { useState } from '@materaial-ui/icons/AttachFile';
import SearchOutline from '@material-ui/icons/SearchOutlined';
import { useStateValue } from './StateProvider';
import MoreVert from '@material-ui/icons/MoreVert';
import EmojiEmotionIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/send';
import './chat.css';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from '.firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [speed, setSpeed ] = useState("");
    const {roomId} = useParam();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

useEffect(() => {
if (roomId) {
    db.collation('rooms').doc(roomId).onSnapshot((snapshot) =>
        setRoomName(snapshot.data().name) );

    db.colaction('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => 
         setMessages(snapshot.docs.map((doc) => doc.data())));
  }
    })
}
