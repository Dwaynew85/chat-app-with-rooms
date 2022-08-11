import styles from './styles.module.css';
import Messagesreceived from './messages';

const Chat = ({ socket }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <Messagesreceived socket={socket} />
      </div>
    </div>
  );
};

export default Chat;