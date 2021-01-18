import Head from 'next/head'
import Link from 'next/link'
import Preview from '../components/preview'

function FooterItem(props) {
    return (
        <li className="my-2">
            <Link href="/">
                <a className="font-semibold uppercase">
                    {props.children}
                </a>
            </Link>
        </li>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Leon Liang</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="hidden lg:block fixed left-8 lg:left-12 xl:left-16 2xl:left-20 top-8 lg:top-12 xl:top-16 2xl:top-20">
                <h1 className="font-bold uppercase text-blue-700">Leon Liang</h1>
                <h2 className="text-4xl font-extrabold">Aspiring CS <br/> Student.</h2>
            </header>

            <main className="float-right mx-6 md:mx-12 lg:mx-0 lg:pl-72 xl:pl-80 2xl:pl-96">
                <Preview
                    href="/lts"
                    image="/images/fintech-pitch.png"
                />
                <Preview
                    href="/project-butterfly"
                    image="/images/project-butterfly-pitch.jpg"
                />
                <Preview
                    href="/luxmun"
                    image="/images/luxmun.jpg"
                />
                <Preview
                    href="/creative-coding-for-all"
                    image="/images/cc4all.jpg"
                />
                <Preview
                    href="/cansat"
                    image="/images/cansat.png"
                />
            </main>

            <footer className="hidden lg:block fixed left-8 lg:left-12 xl:left-16 2xl:left-20 bottom-8 lg:bottom-12 xl:bottom-16 2xl:bottom-20">
                <ul>
                    <FooterItem>Projects</FooterItem>
                    <FooterItem>About me</FooterItem>
                    <FooterItem>Github</FooterItem>
                </ul>
            </footer>
        </>
    )
}
