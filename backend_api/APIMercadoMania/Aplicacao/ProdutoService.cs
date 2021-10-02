using Infra.Entidades;
using Infra.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aplicacao
{
    public class ProdutoService : BaseService<Produtos>
    {
        public readonly ProdutoRepository _repository;
        public ProdutoService()
        {
            _repository = new ProdutoRepository();
        }
        public IEnumerable<Produtos> Get()
        {
            return _repository.Read();
        }
        public void Post(Produtos entidade)
        {
            _repository.Create(entidade);
        }
        public void Put(Produtos entidade)
        {
            _repository.Update(entidade);
        }
        public void Delete(Produtos entidade)
        {
            _repository.Delete(entidade);
        }
        public Produtos GetById(int id)
        {
            return _repository.GetById(id);
        }
    }
}
