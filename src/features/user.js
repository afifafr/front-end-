const User = ({ user }) => {
    const { id, username } = user
    return (

        <div>
            <h1>name : {username}</h1>
        </div>
    )
}
export default User;