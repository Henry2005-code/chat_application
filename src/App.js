import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="509b541c-4424-4d8f-8eed-6281aadd3e7c"
            userName="HenryFowobaje"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}


        />
    );
}

export default App;