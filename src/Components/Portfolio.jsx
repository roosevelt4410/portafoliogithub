import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      description: 'Este proyecto consiste en un sistema multiplataforma que abarca tanto la web, desarrollada con Angular y Firebase, como la aplicación móvil, construida utilizando Flutter. El propósito de este sistema es facilitar la gestión de archivos entre abogados e investigadores criminales, permitiéndoles intercambiar información de manera eficiente y segura Si deseas obtener una comprensión más detallada de este proyecto, te invito a visitar el video en YouTube donde se realiza una explicación exhaustiva de todas sus funcionalidades y características.',
      demo: 'https://www.youtube.com/watch?v=fVXFHHas1Xo&t=600s',
      codigo: 'https://gitlab.com/andresr4410/compartidawebfastresearches'
    },
    {
      id: 2,
      src: reactParallax,
      description: 'Aplicación de ecomerce hecha en MERN, la cual tiene bastantes funcionalidades como el carrito de compra, ingreso seguro a la app, visualizar productos mediante categorias, registrar comentarios y calificar productos, pagar en la tienda, pedir a domicilio, crear ordenes, un tablero completamente administrativo para el admin, visualiza el video para que veas todas las funcionalidades, administracion de productos, usuarios registrados en la app, informes estadisticos con graficas',
      demo: 'https://www.youtube.com/shorts/5bDHywLGfpg',
      codigo: 'https://gitlab.com/andresr4410/mern-onlywings/-/tree/main/OnlyWings?ref_type=heads'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Mira algunos de mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description,demo,codigo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-200">{description}</p>
                <div className="flex items-center justify-center mt-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-full text-center text-lg"
                  >
                    Demo
                  </a>
                  <a
                    href={codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-500 text-white rounded-full text-center text-lg"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
