import { MainLayout } from "../../components/MainLayout";

export default function About({ title }) {
  return (
    <MainLayout>
      <h1>{title}</h1>
    </MainLayout>
  );
}
About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return {
    title: data.title,
  };
};
