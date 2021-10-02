using System;
using System.Collections.Generic;
using System.Text;

namespace Aplicacao
{
    public interface BaseService<Entidade>
    {
        public IEnumerable<Entidade> Get();
        public void Post(Entidade entidade);
        public void Put(Entidade entidade);
        public void Delete(Entidade entidade);
    }
}
