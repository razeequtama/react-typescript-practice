import axios from "axios";

export default function UserContext()
{
    async function getUsers() {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            return response.data; // 1. Mengambil array 'users' langsung dari struktur DummyJSON
        } catch (error: any) {
            // 2. Menyertakan error asli agar lebih mudah dilacak (debug)
            throw new Error(`Error fetching the API: ${error.message}`); 
        }
    }

    async function logUsers() {
        try {
            const usersData = await getUsers();
            console.log(usersData)
        } catch (error: any) {
            throw new Error(`Error fetching the API: ${error.message}`); 
        }
    }

    return(
        <div>
            <h1>Hi</h1>
            <button onClick={logUsers}>Test</button>
        </div>
    )
}