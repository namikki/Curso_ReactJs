const ClientCard = ({ nome, email, telefone, foto_url }) => {
    return (
      <div className="col">
        <div className="card h-100 shadow-sm">
          <img src={foto_url} alt={nome} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text mb-1">
              <i className="bi bi-envelope me-2"></i>{email}
            </p>
            <p className="card-text">
              <i className="bi bi-telephone me-2"></i>{telefone}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClientCard;
  