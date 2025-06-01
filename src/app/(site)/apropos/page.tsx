import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Image
        src="/images/skills/logoNode.svg"
        alt="logo HTML"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/skills/logoGraphQL.svg"
        alt="logo Node"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
