using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Repository.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : BaseController<Transaction, TransactionRepository, int>
    {
        public TransactionController(TransactionRepository transactionRepository) : base(transactionRepository)
        {

        }
    }
}