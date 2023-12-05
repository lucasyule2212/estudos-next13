interface UserData {
  login: string;
  id: number;
}

export default async function MainPageContent() {
  await new Promise(resolve => setTimeout(resolve, 2500));
  const userDataResponse = await fetch('https://api.github.com/users/lucasyule2212');
  const userData = await userDataResponse.json() as UserData;

  return (   
    <pre>
      {JSON.stringify(userData, null, 2)}
    </pre>
  );
}
