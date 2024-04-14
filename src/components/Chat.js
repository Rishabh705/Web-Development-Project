import React from "react";
import '../styles/Chat.css'

export default function Chat() {

    const [chatVisible, setChatVisible] = React.useState(false); 

    const [inputValue, setInputValue] = React.useState('');
    const [chatMessages, setChatMessages] = React.useState([]);

    const toggleChatWindow = () => {
        setChatVisible(!chatVisible); 
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    

    const sendMessage = async () => {
        try {

            if (inputValue.trim() === '') return;

            const formData = new FormData();
            formData.append('input_text', inputValue);
            let message = ''
            const response = await fetch('http://127.0.0.1:8000/model/talk/', {
                method: 'POST',
                body: formData
            });
            if (response.status === 200) {
                const responseData = await response.json();
                message = responseData.chat_response;
                console.log(message);
            } else {
                console.log("Error in getting a response.");
            }
            setChatMessages(prevMessages => [
                ...prevMessages, 
                { type: 'user', message: inputValue },
                { type: 'api', message: message }
            ]);
            
            setInputValue('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    

    return (
        <>
            <div className='chat-window' style={{ display: chatVisible ? 'flex' : 'none' }}>
            <div className='messages-container'>
                {chatMessages.map((message, index) => (
                            <div key={index} className={`message ${message.type}-message`}>
                                <div className='message-content'>{message.message}</div>
                            </div>
                        ))}
                </div>
                <span style={{ marginTop: 'auto' }}>
                    <input className='chat-input' type='text' value={inputValue} onChange={handleInputChange} />
                    <button className='send' onClick={sendMessage}>=</button>
                </span>
            </div>
            <button className='chat' onClick={toggleChatWindow}>Chat</button>
        </>
    )
}