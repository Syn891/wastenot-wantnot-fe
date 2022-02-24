export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();

    console.log(users)
    return {
      props: { users },
    };
  }