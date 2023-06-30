

export const fetchResponse = async(chat) =>{
    try {
        const reponse = await fetch('http://localhost:3001',{
             method:'POST',
             headers :{
                'Content-Type': "application.json"
             },
             body: JSON.stringify({
                message:chat.map((message)=> message.message).join("\n")
             })

        })
        const data = await reponse.json()
        return data
    } catch (error) {
        console.log(error);
    }
}