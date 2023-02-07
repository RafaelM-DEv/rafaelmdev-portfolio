
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const quotes = [
  {
    content: 'Cara responsável, dedicado e pontual. Indico ele para qualquer pessoa que busca alguém comprometido com o trabalho!',
    author: 'Jennifer Guarnieri - Social Media'
  },
  {

    content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
    author: 'Jennifer Guarnieri'
  },
  {
    content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
    author: 'Jennifer Guarnieri'
  }
]

const BlogQuotes = quotes.map((quote, index) => 
  <div className='col-span-4' key={index}>
    <Typography sx={{ fontSize: 14 }} gutterBottom className='text-center'>
      <FormatQuoteIcon />
    </Typography>
    <Typography sx={{ mb: 1.5 }}>
      { quote.content }
    </Typography>
    <Typography variant="bo2" className='italic font-bold'>
      { quote.author }
    </Typography>
  </div>
)

function BlogSectionRecommendation () {
  return (
    <section className="flex justify-center py-20 bg-slate-200">
      <div className="container text-slate-600">
        <Typography variant="h5" className='italic text-center pb-12'>
         - Depoimentos de pessoas que já trabalharam comigo -
        </Typography>
        <div className='grid grid-cols-12 gap-x-20 text-center'>
          { BlogQuotes }
        </div>
      </div>
    </section>
  )
}

export default BlogSectionRecommendation