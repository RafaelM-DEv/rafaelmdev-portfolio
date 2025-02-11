import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const quotes = [
  {
    content:
      "Cara responsável, dedicado e pontual. Indico ele para qualquer pessoa que busca alguém comprometido com o trabalho!",
    author: "Jennifer Guarnieri - Social Media",
  },
  {
    content:
      "Excelente trabalho em equipe, sempre disposto a ajudar e contribuir positivamente para o sucesso do projeto. Recomendo sem hesitação!",
    author: "Ana Silva - Gerente de Projetos",
  },
  {
    content:
      "Profissional altamente competente e comprometido. Sempre entrega resultados de alta qualidade dentro dos prazos estabelecidos. Uma excelente adição a qualquer equipe!",
    author: "Pedro Santos - Desenvolvedor Sênior",
  },
  {
    content:
      "Grande capacidade de liderança e resolução de problemas. Suas habilidades técnicas combinadas com sua atitude proativa o tornam uma peça fundamental em qualquer projeto.",
    author: "Mariana Oliveira - CEO",
  },
  {
    content:
      "Pessoa confiável e com uma ética de trabalho impecável. Sempre demonstrou um alto nível de profissionalismo em todas as interações.",
    author: "Lucas Costa - Analista de Sistemas",
  },
];

const BlogQuotes = quotes.map((quote, index) => (
  <div className="col-span-4" key={index}>
    <Typography sx={{ fontSize: 14 }} gutterBottom className="text-center">
      <FormatQuoteIcon />
    </Typography>
    <Typography sx={{ mb: 1.5 }}>{quote.content}</Typography>
    <Typography variant="bo2" className="italic font-bold">
      {quote.author}
    </Typography>
  </div>
));

function BlogSectionRecommendation(props) {
  return (
    <section
      ref={props.toRef}
      className="flex justify-center py-20 bg-slate-200"
    >
      <div className="container text-slate-600">
        <Typography variant="h5" className="italic text-center pb-12">
          - Depoimentos de pessoas que já trabalharam comigo -
        </Typography>
        <div className="grid grid-cols-1 gap-x-20 text-center px-10">
          {BlogQuotes}
        </div>
      </div>
    </section>
  );
}

export default BlogSectionRecommendation;
