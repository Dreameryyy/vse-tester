import { useContext } from "react";
import { ApplicationContext } from "../layout/ApplicationLayout";

export interface AnswerProps {
    correct: boolean;
    revealed: boolean;
    text: string;
    selected: boolean;
    onSelect: (correct: boolean, text: string) => void;
}

const Answer: React.FC<AnswerProps> = ({
    correct,
    revealed,
    selected,
    text,
    onSelect,
}: AnswerProps) => {
    const { darkmode } = useContext(ApplicationContext);

    const base = darkmode
        ? "border-neutral-800 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:shadow-lg"
        : "bg-white text-neutral-700 hover:border-neutral-500 hover:shadow-lg";

    const highlight = darkmode
        ? "!border-blue-500 !bg-blue-900"
        : "!border-blue-500 !bg-blue-100";

    const color = correct
        ? darkmode
            ? "bg-green-900 border-green-300 text-white"
            : "border-green-500 bg-green-500 text-white"
        : darkmode
        ? "bg-neutral-900 border-neutral-700 text-neutral-500"
        : "text-gray-400";

    return (
        <button
            onClick={() => onSelect(correct, text)}
            className={`mb-2 rounded-xl border-2 px-6 py-4 text-left font-black transition lg:mb-5 lg:px-6 lg:py-4 ${
                revealed ? color : base
            } ${selected ? highlight : ""}`}
        >
            {text}
        </button>
    );
};

export default Answer;
