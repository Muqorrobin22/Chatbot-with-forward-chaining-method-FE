
import './App.css'
import {useEffect, useState} from "react";
import {BotsMessage} from "./components/bots/bots.jsx";
import {UsersMessage} from "./components/users/users.jsx";
import {welcomeStateMessage} from "./utils/variables.js";
import {APIKEYS} from "./utils/APIKEYS.js";

function App() {
    const [state, setState] = useState(false)
    const [welcomeState, setWelcomeState] = useState(false)
    const [message, setMessage] = useState([])
    const [ruleBaseState, setRuleBaseState] = useState(null)


    const formatOutput = (inputString) => {
        let formatEnter = inputString.replace(/\n/g, "<br>");
        let formatLink = formatEnter.replace( /\\link(.*?)\\link/g, '<a href="$1" target="_blank">$1</a>')
        return formatLink;
    }

    useEffect(()=> {
        // console.log("api keys: ", APIKEYS)

        if(!welcomeState){
            console.log("running")
            setWelcomeState(true)
            let messageChat = {name: "Bot", messages: welcomeStateMessage}
            setTimeout(() => {
                setMessage([...message, messageChat])

            }, 1000)
        }



    }, [])

    console.log("messages: ", message)

  return (
    <>
        <section className={"wrapper"}>
            <div className={"wrapper__heading"}>
                <img src="/pens.png" alt="pens image"/>
                <h1>Chatbot Perpustakaan PENS</h1>
            </div>
            <div className={"wrapper__main"}>
                {message.map(item => {
                    if (item.name === "Bot") {
                        return <div key={item.messages}> <BotsMessage messages={item.messages}/> </div>
                    } else {
                        return <div key={item.messages}> <UsersMessage messages={item.messages}/> </div>
                    }
                })}
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
