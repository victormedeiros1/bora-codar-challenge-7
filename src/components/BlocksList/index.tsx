import Block from "./components/Block";

const blocks = [
  {
    id: 0,
    title: "Theme só res enha",
    cover: "/src/assets/images/bloco-1.jpg",
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Natal - RN",
  },
  {
    id: 1,
    title: "Não sou deSASS coisas",
    cover: "/src/assets/images/bloco-2.jpg",
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Caicó - RN",
  },
  {
    id: 2,
    title: "Assets te pego",
    cover: "/src/assets/images/bloco-3.jpg",
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Salvador - BA",
  },
  {
    id: 3,
    title: "As gata e IML",
    cover: "/src/assets/images/bloco-4.jpg",
    description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
    location: "Péssimo - MC",
  },
];

export default function BlocksList() {
  return (
    <section className="max-w-[78.5rem] mx-auto my-0">
      <header className="mb-10 mt-24">
        <h3 className="text-lg font-bold">Blocos recomendados</h3>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {blocks.map(({ id, title, description, cover, location }) => (
          <Block
            key={id}
            title={title}
            cover={cover}
            description={description}
            location={location}
          />
        ))}
      </div>
    </section>
  );
}