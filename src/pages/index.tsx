import * as s from "@/styles/pages/index";
import Image from "next/image";
import HeaderPartOne from "/public/bg_index_header_part-1.png";
import HeaderPartTwo from "/public/home-hero-700x653.png";

export default function Home() {
  return (
    <main>
      <s.SiteHeader>
        <s.HeaderContentFirst>
          <Image
            src={HeaderPartOne}
            width={120}
            height={410}
            alt="balão azul"
          ></Image>
        </s.HeaderContentFirst>
        <s.HeaderContentMiddle>
          <h1>
            Ser <strong>MEI</strong>
            <br />
            ficou muito <br />
            mais fácil
          </h1>
          <p>
            Uma plataforma digital completa para
            <br />
            você que já é ou quer se tornar um
            <br />
            microempreendedor individual
          </p>
        </s.HeaderContentMiddle>
        <s.HeaderContentLast>
          <Image
            src={HeaderPartTwo}
            width={700}
            height={653}
            alt="homem escrevendo"
          ></Image>
        </s.HeaderContentLast>
      </s.SiteHeader>
    </main>
  );
}
