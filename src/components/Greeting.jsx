import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () => {
    if (messages.length <= 1) return messages[0];

    let newMessage;
    do {
      newMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (newMessage === greeting);

    return newMessage;
  };


  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}