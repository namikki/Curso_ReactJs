const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Função para renderizar um número limitado de botões de página
    const getPageNumbers = () => {
      const delta = 1; // Quantas páginas mostrar antes e depois da atual
      const pages = [];
      
      // Sempre mostrar a primeira página
      //pages.push(1);
      
      // Calcular o intervalo de páginas a mostrar
      const rangeStart = Math.max(1, currentPage - delta);
      const rangeEnd = Math.min(totalPages, currentPage + delta);
      
      // Adicionar elipses antes do intervalo, se necessário
      if (rangeStart > 1) {
        pages.push('...');
      }
      
      // Adicionar páginas do intervalo
      for (let i = rangeStart; i <= rangeEnd; i++) {
        pages.push(i);
      }
      
      // Adicionar elipses depois do intervalo, se necessário
      if (rangeEnd < totalPages) {
        pages.push('...');
      }
      
      // Sempre mostrar a última página, se for maior que 1
      // if (totalPages > 1) {
      //   pages.push(totalPages);
      // }
      
      return pages;
    };
  
    if (totalPages <= 1) return null;
  
    return (
    <>
      <nav aria-label="Navegação de páginas">
        <ul className="pagination justify-content-center mt-4 mb-1">
           {/* Botão Primeiro */}
           <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
            >
              <i className="bi bi-chevron-double-left me-1"></i>
              Primeiro
            </button>
          </li>

          {/* Botão Anterior */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="bi bi-chevron-left me-1"></i>
              Anterior
            </button>
          </li>
          
          {/* Números de página */}
          {getPageNumbers().map((pageNum, index) => (
            <li 
              key={index} 
              className={`page-item ${pageNum === currentPage ? 'active' : ''} ${pageNum === '...' ? 'disabled' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => pageNum !== '...' && onPageChange(pageNum)}
                disabled={pageNum === '...'}
              >
                {pageNum}
              </button>
            </li>
          ))}
          
          {/* Botão Próximo */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próximo
              <i className="bi bi-chevron-right ms-1"></i>
            </button>
          </li>
          
          {/* Botão Último */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              Último
              <i className="bi bi-chevron-double-right ms-1"></i>
            </button>
          </li>
        </ul>
      </nav> 
      <p className="small text-center m-0">Mostrando Página {currentPage} de {totalPages}</p>
      </>
    );
  };
  
  export default Pagination;