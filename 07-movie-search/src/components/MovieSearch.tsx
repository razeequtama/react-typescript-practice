import { getMovie } from "../services/omdb";

export default function MovieSearch() {

    async function retreiveMovie(event: React.FormEvent<HTMLFormElement>)
    {

        event.preventDefault();
        const form = document.querySelector<HTMLFormElement>('form');
        const search = form?.querySelector<HTMLInputElement>('input');
        const searchValue = search?.value || null;

        if(!searchValue)
        {
            console.error("No input!");
        }
        else
        {
            const result = await getMovie(searchValue);
            console.log(result);
        }
    }

    return (
        <div>
            <form onSubmit={retreiveMovie}>
                <label htmlFor="search">Search: </label>
                <input type="search" name="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}