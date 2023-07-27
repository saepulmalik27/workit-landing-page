import Founder from '@/components/templates/founder'
import Hero from '@/components/templates/hero'
import Product from '@/components/templates/product'
import dataCopy from '@/_copy-text.json'

export default function Home() {

  const {products, founder} = dataCopy

  return (
    <main className='lg:pb-[110px] md:pb-[120px] pb-[60px]'>
      <Hero/>
      <Product products={products}/>
      <Founder title={founder.title} description={founder.description} action={{
        label: founder.button
      }} />
    </main>
  )
}
