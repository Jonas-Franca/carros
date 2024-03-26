import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className=" min-h-svh bg-offwhiitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/carros/sao-paulo-conchal?idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQA6J8XGFANdu7LfQjXBvvJugQtbSXZxYlA-GUhLveyxu4K_k3qPVl9BoC5AgQAvD_BwE" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="icone dos carros SUV" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/carros/sp-sao-paulo?estadocidade=S%C3%A3o%20Paulo%20-%20S%C3%A3o%20Paulo&tipoveiculo=carros&anunciante=Concession%C3%A1ria%7CLoja" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone dos carros de luxo" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}