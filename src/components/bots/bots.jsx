import "./bots.css"

export function BotsMessage({messages}) {

    return (
        <section className={"main_bot"}>
            <img src="/Avatar_bot.svg" alt="Bot icon"/>
            <p dangerouslySetInnerHTML={{__html: messages}} />
        </section>
    )

}