using Infra.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Repository
{
    public class ProdutosRepository : BaseRepository<Produtos>
    {
        public readonly MercadoManiaDbContext _context;
        public ProdutosRepository()
        {
            _context = new MercadoManiaDbContext();
        }
        public void Create(Produtos entidade)
        {
            _context.Produtos.Add(entidade);
            _context.SaveChanges();
        }

        public void Delete(Produtos entidade)
        {
            _context.Produtos.Remove(entidade);
            _context.SaveChanges();
        }

        public IEnumerable<Produtos> Read()
        {
            return _context.Produtos;
        }

        public void Update(Produtos entidade)
        {
            _context.Produtos.Update(entidade);
            _context.SaveChanges();
        }
        public Produtos GetById(int id)
        {
            return _context.Produtos.Find(id);
        }
    }
}
