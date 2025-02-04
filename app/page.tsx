import Layout from "@/components/layouts";
import Sections from "@/components/sections";
import Filer from "@cloudcannon/filer";
import Blocks from '../components/shared/Blocks';
const filer = new Filer({ path: "content" });

async function HomePage() {
  const page = await filer.getItem("index.md", { folder: "pages" });
  const PageData = JSON.parse(JSON.stringify(page));

  return (
    <Layout>
      <Blocks content_blocks={PageData.data.content_blocks} />
    </Layout>
  );
}

export default HomePage;
