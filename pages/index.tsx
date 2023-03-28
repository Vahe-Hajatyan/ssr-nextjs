import { MainLayout } from "../components/MainLayout";

export default function Index() {
  console.log(process.env.API_URL);
  return (
    <MainLayout>
      <h1>hello next.js!!!!</h1>
      <p>grtgtrgtrg</p>
    </MainLayout>
  );
}
