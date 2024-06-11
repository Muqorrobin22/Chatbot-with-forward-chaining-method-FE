
import './App.css'
import {useEffect, useState} from "react";
import {BotsMessage} from "./components/bots/bots.jsx";
import {UsersMessage} from "./components/users/users.jsx";
import {welcomeStateMessage} from "./utils/variables.js";
import {APIKEYS} from "./utils/APIKEYS.js";
import {ruleBaseDetect} from "./utils/RuleBased.js";

function App() {
    const [state, setState] = useState(false)
    const [welcomeState, setWelcomeState] = useState(false)
    const [message, setMessage] = useState([])
    const [ruleBaseState, setRuleBaseState] = useState(null)
    const [textMessage, setTextMessage] = useState('')


    const formatOutput = (inputString) => {
        let formatEnter = inputString.replace(/\n/g, '<br>');
        let formatLink = formatEnter.replace( /\\link(.*?)\\link/g, '<a href="$1" target="_blank">$1</a>')
        return formatLink;
    }

    const onSendButton = async (value) => {
        console.log("input: ", value)
        if(value === "") {
            return ;
        }

        let userMessage = {name: "User", message: value}
        setMessage([...message, userMessage])

        setTextMessage("")

        try{

            const response = await fetch(`${APIKEYS}/fc/topics`, {
                method: "POST",
                body: JSON.stringify({ message: value }),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const r = await response.json();
            let msg2 = { name: "Bot", message: r.answer };
            console.log("messages: ", msg2)

            let subtopicState = ruleBaseDetect(msg2)

            if(subtopicState === "syarat_peminjaman") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/syarat-peminjaman`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");

            } else if(subtopicState === "langkah_peminjaman") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/langkah-peminjaman`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");

            } else if(subtopicState === "langkah_pengembalian") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/langkah-pengembalian`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "kondisi_rusak") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/kondisi-rusak`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "kondisi_hilang") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/kondisi-hilang-1`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "kondisi_hilang2") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/kondisi-hilang-2`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "maksimal_pinjam") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/maksimal-pinjam`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "denda") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/denda`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "informasi_jam_layanan") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/informasi-jam-layanan`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "peraturan_pengunjung") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/peraturan-pengunjung`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "dikembalikan_orang_lain") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/dikembalikan-orang-lain`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "mou") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/mou`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "struktur_keanggotaan") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/struktur-keanggotaan`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "sertifikat_akreditasi") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/sertifikat-akreditasi`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "bebas_pinjam") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/bebas-pinjam`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "syarat_wisuda") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/syarat-wisuda`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "Isi_CD_Proyek_Akhir") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/cd-proyek-akhir`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "qrcode_pengesahan") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/qrcode-pengesahan`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "visi") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/visi`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "misi") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/misi`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "koleksi_jurnal") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/koleksi-jurnal`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "koleksi_ebook") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/koleksi-ebook`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "pinjam_confirm") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/pinjam-confirm`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "kembali_confirm") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/kembali-confirm`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "syarat_confirm") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/syarat-confirm`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "keanggotaan") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/keanggotaan`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "koleksi_perpus") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/koleksi_perpus`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "struktur_organisasi") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/struktur_organisasi`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "koleksi_buku") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/koleksi_buku`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "layanan_loker") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/layanan_loker`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "layanan_referensi") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/layanan_referensi`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "koleksi_modul") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/koleksi_modul`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "mencari_buku") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/mencari_buku`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "pengadaan_buku") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/pengadaan_buku`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "tata_tertib") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/tata_tertib`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            } else if(subtopicState === "npp_perpustakaan") {
                const ansLangkah = await fetch(`${APIKEYS}/rule-based/npp_perpustakaan`);
                const response = await ansLangkah.json();
                msg2 = { name: "Bot", message: formatOutput(response.answer) };
                setMessage([...message, msg2]);
                setTextMessage("");
            }


            else {

                msg2 = {name: "Bot", message: "Maaf kami tidak tahu maksud anda, Mungkin bisa bertanya lebih spesifik"}
                setMessage([...message, msg2])
                setTextMessage("")

            }


        } catch (e) {
            console.log("error: ", e)
        }

    }

    useEffect(()=> {
        // console.log("api keys: ", APIKEYS)

        if(!welcomeState){
            console.log("running")
            setWelcomeState(true)
            let messageChat = {name: "Bot", message: welcomeStateMessage}
            setTimeout(() => {
                setMessage([...message, messageChat])

            }, 1000)
        }



    }, [])

    useEffect(() => {
        if (ruleBaseState !== null) {
            // Perform your processing here
            console.log("rule base3: ", ruleBaseState);
            // Further processing logic with ruleBaseState
        }
    }, [ruleBaseState]);


    console.log("messages all: ", message)

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
                        return <div key={item.message}> <BotsMessage messages={item.message}/> </div>
                    } else if (item.name === "User") {
                        return <div key={item.message}> <UsersMessage messages={item.message}/> </div>
                    }
                })}
            </div>
            <div className={"wrapper__input"}>
                <div className={"input_chat"}>
                    <input type="text" placeholder={"Masukkan pertanyaan anda"} className={"chat"} onChange={e => setTextMessage(e.target.value)} onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            onSendButton(textMessage)
                    }}} value={textMessage} />
                    <div className={"images"}>
                        <img src="/send.svg" alt="Send Icon" onClick={() => onSendButton(textMessage)}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default App
