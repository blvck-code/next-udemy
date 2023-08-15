import Image from "next/image";
import path from "path";
import * as fs from "fs/promises";

export default function HomePage({ products }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}
