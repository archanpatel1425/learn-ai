import Layout from "@/components/layouts";
import Sections from "@/components/sections";
import Filer from "@cloudcannon/filer";

const filer = new Filer({ path: "content" });

async function HomePage() {
  const page = await filer.getItem("team.md", { folder: "pages" });
  const PageData = JSON.parse(JSON.stringify(page));

  return (
    <Layout>
      <Sections block={PageData?.data?.content_blocks} />
    </Layout>
  );
}

export default HomePage;
