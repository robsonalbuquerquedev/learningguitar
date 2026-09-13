import ChordCard from "./ChordCard";

type Chord = {
    name: string;
    fullName: string;
    quality: "major" | "minor";
};

type ChordGridProps = {
    chords: Chord[];
};

export default function ChordGrid({
    chords,
}: ChordGridProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chords.map((chord) => (
                <ChordCard
                    key={chord.name}
                    name={chord.name}
                    fullName={chord.fullName}
                    quality={chord.quality}
                />
            ))}
        </div>
    );
}