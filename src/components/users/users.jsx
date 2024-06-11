import "./users.css"

export function UsersMessage({messages}) {
    return (
        <section className={"main_user"}>
            <p>{messages}
            </p>
            <img src="/Avatar_user.svg" alt="User icon"/>
        </section>
    )
}