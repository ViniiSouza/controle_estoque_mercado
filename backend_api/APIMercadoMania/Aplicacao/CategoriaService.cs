using Infra.Entidades;
using Infra.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aplicacao
{
    public class CategoriaService : BaseService<Categorias>
    {
        public readonly CategoriaRepository _repository;
        public CategoriaService()
        {
            _repository = new CategoriaRepository();
        }

        public IEnumerable<Categorias> Get()
        {
            return _repository.Read();
        }

        public void Post(Categorias entidade)
        {
            _repository.Create(entidade);
        }
        public void Put(Categorias entidade)
        {
            _repository.Update(entidade);
        }
        public void Delete(Categorias entidade)
        {
            _repository.Delete(entidade);
        }
        public Categorias GetById(int id)
        {
            return _repository.GetById(id);
        }
    }
}
