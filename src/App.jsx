
import './App.css'

function App() {

  return (
    <>
        <section className={"wrapper"}>
            <div className={"wrapper__heading"}>
                <img src="/pens.png" alt="pens image"/>
                <h1>Chatbot Perpustakaan PENS</h1>
            </div>
            <div className={"wrapper__main"}>
                <section className={"main_bot"}>
                    <img src="/Avatar_bot.svg" alt="Bot icon"/>
                    <p>Halo, selamat datang di chatbot perpustakaan PENS!
                        Chatbot kami siap membantu Anda dengan berbagai informasi seputar perpustakaan, seperti koleksi buku, pemesanan buku baru, lokasi buku di rak, dan lain-lain. Apa yang ingin Anda tanyakan?
                    </p>
                </section>
                <section className={"main_user"}>
                    <p>Bagaimana cara meminjam buku perpustakaan?
                    </p>
                    <img src="/Avatar_user.svg" alt="User icon"/>
                </section>
            </div>
        </section>
    </>
  )
}

export default App
