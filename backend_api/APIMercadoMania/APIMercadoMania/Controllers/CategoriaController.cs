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
        public BaseResult Post([FromBody]Categorias categoria)
        {
            try
            {
                _categoriaService.Post(categoria);
                return new BaseResult()
                {
                    Sucesso = true,
                    Mensagem = "Post executado"
                };
            }
            catch (Exception ex)
            {
                return new BaseResult()
                {
                    Sucesso = false,
                    Erro = "Erro encontrado: " + ex.Message
                };
            }
            
        }
        [HttpPut]
        public BaseResult Put(Categorias categoria)
        {
            try
            {
                _categoriaService.Put(categoria);
                return new BaseResult()
                {
                    Sucesso = true,
                    Mensagem = "Put executado"
                };
            }
            catch (Exception ex)
            {
                return new BaseResult()
                {
                    Sucesso = false,
                    Erro = "Erro encontrado: " + ex.Message
                };
            }
            
        }
        [HttpDelete("{id}")]
        public BaseResult Delete(int id)
        {
            try
            {
                _categoriaService.Delete(_categoriaService.GetById(id));
                return new BaseResult()
                {
                    Sucesso = true,
                    Mensagem = "Delete executado"
                };
            }
            catch (Exception ex)
            {
                return new BaseResult()
                {
                    Sucesso = false,
                    Erro = "Erro encontrado: " + ex.Message
                };
            }
            
        }
    }
}
