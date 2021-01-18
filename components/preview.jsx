import Link from 'next/link'
import Image from 'next/image'

export default function Preview(props) {
    return (
        <div className="my-14">
            <Link href={props.href}>
                <a>
                    <div className="w-full block">
                        <Image src={props.image} width="1200" height="700" alt={props.alt}/>
                    </div>
                </a>
            </Link>
        </div>
    );
}