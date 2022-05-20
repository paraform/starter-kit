import { Button } from "ds-tailwind";

export default function Web() {
  return (
    <>
      <header className="p-5"></header>
      <div className="p-5 no-drag">
        <Button size="large" kind="solid">
          Click Me
        </Button>
      </div>
    </>
  );
}
