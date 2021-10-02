using Aplicacao;
using Infra.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace APIMercadoMania.Controllers
{
    [ApiController]
    [Route("{controller}")]
    public class CategoriaController : ControllerBase
    {
        private CategoriaService _categoriaService = new CategoriaService();

        [HttpGet]
        public List<Categorias> Get()
        {
            return _categoriaService.Get().ToList();
        }

        [HttpGet("{id}")]
        public Categorias GetCategoria(int id)
        {
            return _categoriaService.GetById(id);
        }

        [HttpPost]
        public string Post([FromBody]Categorias categoria)
        {
            try
            {
                _categoriaService.Post(categoria);
                return "Post executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
            
        }
        [HttpPut]
        public string Put(Categorias categoria)
        {
            try
            {
                _categoriaService.Put(categoria);
                return "Put executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
            
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {
                _categoriaService.Delete(_categoriaService.GetById(id));
                return "Delete executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
            
        }
    }
}
