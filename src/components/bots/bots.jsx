import "./bots.css"

export function BotsMessage({messages}) {

    return (
        <section className={"main_bot"}>
            <img src="/Avatar_bot.svg" alt="Bot icon"/>
            <p>{messages}
            </p>
        </section>
    )

}