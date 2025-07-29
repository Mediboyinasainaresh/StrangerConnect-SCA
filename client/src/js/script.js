const socket = io('http://localhost:5000');

const chatBox = document.getElementById('chat');
const messageInput = document.getElementById('message');

const roomId = 'global-room'; // single global room for now
socket.emit('join-room', roomId);

socket.on('user-joined', (id) => {
  chatBox.value += `User joined: ${id}\n`;
});

socket.on('receive-message', (message) => {
  chatBox.value += `Stranger: ${message}\n`;
});

function sendMessage() {
  const msg = messageInput.value;
  if (!msg) return;

  socket.emit('send-message', { roomId, message: msg });
  chatBox.value += `You: ${msg}\n`;
  messageInput.value = '';
}
