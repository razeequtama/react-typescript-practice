import axios from "axios";
import type { OMDbResponse } from "../types/omdb";

export async function getMovie(title: string): Promise<OMDbResponse> {

    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
        return response.data;
    } catch (error) {
        console.error("Failed to fetch movie:", error);
        throw error;
    }

}