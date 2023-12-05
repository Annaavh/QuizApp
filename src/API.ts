
import axios from "axios";

// axios.defaults.baseURL = "https://opentdb.com";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    // const endpoint = `https://opentdb.com/api.php?amount=${5}&difficulty=${difficulty}&type=multiple`;
    // const data = await (await fetch(endpoint)).json();
    // console.log(data)
    try {
        const response = await axios.get(`api.php?amount=5&difficulty=easy&type=multiple`);
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
    }
}