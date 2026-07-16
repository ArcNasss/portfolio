import Image from "next/image";

export default function ContributionGraph() {
  return (
    <div className="rounded-xl   ">
      <Image
        src="https://raw.githubusercontent.com/ArcNasss/ArcNasss/output/snake.svg"
        alt="GitHub Snake Animation"
        width={1200}
        height={300}
        className="w-full"
        unoptimized
      />
    </div>
  );
}