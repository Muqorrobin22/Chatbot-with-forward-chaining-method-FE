
import './App.css'
import {useState} from "react";
import {BotsMessage} from "./components/bots/bots.jsx";
import {UsersMessage} from "./components/users/users.jsx";
import {welcomeStateMessage} from "./utils/variables.js";

function App() {
    const [state, setState] = useState(false)
    const [welcomeState, setWelcomeState] = useState(false)
    const [message, setMessage] = useState([])
    const [ruleBaseState, setRuleBaseState] = useState(null)



  return (
    <>
        <section className={"wrapper"}>
            <div className={"wrapper__heading"}>
                <img src="/pens.png" alt="pens image"/>
                <h1>Chatbot Perpustakaan PENS</h1>
            </div>
            <div className={"wrapper__main"}>
                <BotsMessage messages={welcomeStateMessage} />
                <UsersMessage messages={"Bagaimana cara meminjam buku perpustakaan?"} />
            </div>
            <div className={"wrapper__input"}>
                <div className={"input_chat"}>
                    <input type="text" placeholder={"Masukkan pertanyaan anda"} className={"chat"}/>
                    <div className={"images"}>
                        <img src="/send.svg" alt="Send Icon"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default App
