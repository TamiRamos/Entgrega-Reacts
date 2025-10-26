import React from "react";
import { Link } from "react-router-dom";
import imagenPortada from "../assets/imagenes/imagen1.png"; // Cambiá si querés otra imagen

const ItemListContainer = () => {
  return (
    <section className="inicio-container">
      <div className="inicio-texto">
        <h1>✨ Bienvenidos a Ambar Nails ✨</h1>
        <p>
          Descubrí nuestra colección de productos premium para el cuidado y embellecimiento
          de tus uñas. Desde esmaltes profesionales hasta accesorios únicos — todo lo que 
          necesitás para destacar tu estilo y creatividad. 💖
        </p>
        <Link to="/categoria/esmaltes" className="btn-catalogo">
          Ver Catálogo
        </Link>
      </div>

      <div className="inicio-imagen">
        <img src={imagenPortada} alt="Productos Ambar Nails" />
      </div>
    </section>
  );
};

export default ItemListContainer;
