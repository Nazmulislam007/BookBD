import { colorGenerator } from "@/lib";

type DummyImgType = {
  title: string;
};

export default function DummyImg({ title }: DummyImgType) {
  return (
    <div
      style={{
        display: "block",
        width: "clamp(155px, 155px, 155px)",
        height: "-webkit-fill-available",
        padding: "10px",
        backgroundColor: colorGenerator().bgColor,
        color: colorGenerator().color,
      }}
    >
      {title}
    </div>
  );
}
