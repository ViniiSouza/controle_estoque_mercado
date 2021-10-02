using Infra.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Repository
{
    public class CategoriaRepository : BaseRepository<Categorias>
    {
        public readonly MercadoManiaDbContext _context;
        public CategoriaRepository()
        {
            _context = new MercadoManiaDbContext();
        }
        public void Create(Categorias entidade)
        {
            _context.Categorias.Add(entidade);
            _context.SaveChanges();
        }
        public void Delete(Categorias entidade)
        {
            _context.Categorias.Remove(entidade);
            _context.SaveChanges();
        }
        public IEnumerable<Categorias> Read()
        {
            return _context.Categorias;
        }
        public void Update(Categorias entidade)
        {
            _context.Categorias.Update(entidade);
            _context.SaveChanges();
        }
        public Categorias GetById(int id)
        {
            return _context.Categorias.Find(id);
        }
    }
}
