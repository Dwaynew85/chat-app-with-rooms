import styles from './styles.module.css';
import MessagesRecieved from './messages';

const Chat = ({ socket }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesRecieved socket={socket} />
      </div>
    </div>
  );
};

export default Chat;