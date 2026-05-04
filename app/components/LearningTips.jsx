import { FaBook, FaClock } from "react-icons/fa";

export default function LearningTips() {
    return (
        <div className="mt-12 pb-16 ">

            <div className="flex items-center gap-2 mb-8">
                <h2 className="text-4xl font-semibold">
                    Learning Tips
                </h2>
            </div>

            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div
                    className="rounded-lg px-8 py-12 h-full bg-surface border border-surface-alt"
                >
                    <h3 className="font-semibold flex items-center gap-2 text-lg mb-4 text-accent">
                        <FaBook></FaBook> Study Techniques
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Use spaced repetition to retain information longer.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Practice active recall instead of re-reading notes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Break sessions into focused 25-minute blocks.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Take notes in your own words, not verbatim.</span>
                        </li>
                    </ul>
                </div>

                <div
                    className="rounded-lg px-8 py-12 h-full bg-surface border border-surface-alt"
                >
                    <h3 className="font-semibold flex items-center gap-2 text-lg mb-4 text-accent">
                        <FaClock></FaClock> Time Management Tips
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Set a dedicated study time and stick to it daily.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Tackle your hardest subject first when energy is high.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Avoid multitasking — focus on one topic at a time.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-sm text-accent">✓</span>
                            <span className="text-sm text-white">Review what you learned within 24 hours of a session.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}