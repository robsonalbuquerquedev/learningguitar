import ChordCardDiMinutos from "./ChordCardDiMinutos";

type Chord = {
    name: string;
    fullName: string;
    quality:
        | "major"
        | "minor"
        | "diminished"
        | "half-diminished";
};

type ChordGridProps = {
    chords: Chord[];
};

export default function ChordGridDiMinutos({
    chords,
}: ChordGridProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chords.map((chord) => (
                <ChordCardDiMinutos
                    key={chord.name}
                    name={chord.name}
                    fullName={chord.fullName}
                    quality={chord.quality}
                />
            ))}
        </div>
    );
}