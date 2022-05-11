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
      {/* <Title heading={'Dynamic Title'}/> */}
      {/* <h1>Hello World</h1> */}
    </div>
  );
}
