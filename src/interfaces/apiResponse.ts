import { Movie } from "./movies";

export interface apiResponse {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}