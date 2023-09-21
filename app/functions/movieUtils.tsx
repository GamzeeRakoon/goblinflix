// @ts-ignore
import * as movieTrailer from "movie-trailer"

export async function modal(state: boolean) {

}

export async function getTrailerUrl(movieTitle: string) {
    try {
        const url = await movieTrailer(movieTitle);
        if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            return urlParams.get("v") || "";
        }
    } catch (error) {
        console.error(error);
    }
    return "";
}