const BotonVolverArriba = () => {
    const volverArriba = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button onClick={volverArriba}>
        {/* No hay contenido de texto */}
      </button>
    );
  };
  
  export default BotonVolverArriba;