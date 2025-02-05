import Filer from '@cloudcannon/filer';
import DefaultLayout from '../components/layouts/Layout';
import Blocks from '../components/shared/Blocks';

const filer = new Filer({ path: 'content' });

function HomePage({ page }) {
  return (
    <DefaultLayout page={page}>
      <Blocks content_blocks={page.data.content_blocks} ></Blocks>
    </DefaultLayout>
  )
}

export default HomePage

export async function getStaticProps({ params }) {
  const page = await filer.getItem('index.md', { folder: 'pages' });
  return {
    props: {
      page: JSON.parse(JSON.stringify(page))
    }
  };
}
