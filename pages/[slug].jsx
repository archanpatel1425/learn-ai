import Filer from '@cloudcannon/filer';
import DefaultLayout from '../components/layouts/Layout';
import Blocks from '../components/shared/Blocks';
const filer = new Filer({ path: 'content' });

export default function Page({ page }) {
	return (
		<DefaultLayout page={page}>
			<Blocks content_blocks={page.data.content_blocks} ></Blocks>
		</DefaultLayout>
	);
}

export async function getStaticPaths() {
	const slugs = (await filer.listItemSlugs('pages')).map((slug) => ({ params: { slug } }));
	const ignored = {
		index: true,
		blog: true,
		"404": true,
		feed: true
	};

	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem(`${params.slug}.md`, { folder: 'pages' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
