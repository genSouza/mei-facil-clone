import * as s from "@/styles/pages/index";
import Image from "next/image";
import HeaderPartOne from "/public/bg_index_header_part-1.png";
import HeaderPartTwo from "/public/home-hero-700x653.png";
import { CardMei } from "@/components/Card/Index";

export default function Home() {
  return (
    <div>
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
            loading="eager"
            priority={true}
          ></Image>
        </s.HeaderContentLast>
      </s.SiteHeader>
      <s.SectionCardTop>
        <CardMei
          buttonText="Abrir agora"
          onClick={() => {}}
          text="Abra seu MEI grátis com ajuda de especialistas e tenha seu CNPJ em minutos!"
          title="Abrir um Mei"
        />
        <CardMei
          buttonText="Conheça agora"
          onClick={() => {}}
          text="Precisa de ajuda com burocracia ou quer saber como vender mais?"
          title="Já tenho mei"
          variant="secondary"
        />
      </s.SectionCardTop>
    </div>
  );
}
