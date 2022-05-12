import Link from "next/link";

function Title(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <style jsx global>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <div>
        <h2>Go to <Link href="/demo"> Demo </Link> </h2>
    </div>
  );
}
