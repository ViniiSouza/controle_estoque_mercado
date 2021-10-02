using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Repository
{
    public interface BaseRepository<Entidade>
    {
        public void Create(Entidade entidade);
        public IEnumerable<Entidade> Read();
        public void Update(Entidade entidade);
        public void Delete(Entidade entidade);
    }
}
